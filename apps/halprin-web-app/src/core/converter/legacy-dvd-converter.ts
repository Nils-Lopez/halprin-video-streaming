import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import { slugify } from 'transliteration';
import { Simplify } from 'type-fest';
import { StringConvert } from '@contredanse/common/utils/string-convert';
import { isNonEmptyString, isSafeInteger } from '@contredanse/common';
import { stripHtml } from 'string-strip-html';
import CodeBlockWriter from 'code-block-writer';
import { Media, Tag } from '@/data/data.types';
import { isMediaUrl } from '@/features/video/utils/typeguards';

type DvdJson = Simplify<{
  dvd: {
    medias: {
      media: {
        $: {
          favorite: number;
          path?: string;
          path_fr?: string;
          path_en?: string;
          thumb?: string | null;
          type: string;
          moment?: string;
        };
        tag: {
          $: {
            id: number;
            value: number;
          };
        }[];
        fr: string[];
        en: string[];
      }[];
    }[];
    credits: {
      credit: {
        $: { id: number; index: boolean; year: number };
        fr: string[];
        en: string[];
      }[];
    }[];
    index: {
      tag: {
        $: { id: number };
        fr: string[];
        en: string[];
      }[];
    }[];
  };
}>;

export class LegacyDvdConverter {
  xmltoDvdJson = async (xmlFile: string): Promise<DvdJson> => {
    const xmlString = fs.readFileSync(xmlFile);
    const json = await parseStringPromise(xmlString, {
      trim: true,
    });
    return json;
  };

  getTags = (dvdJson: DvdJson): Tag[] => {
    const tmp = dvdJson.dvd.index[0].tag;
    if (!Array.isArray(tmp)) {
      throw new Error('dvdJson.dvd.index.tag is not an array');
    }
    const tags: Tag[] = [];
    const slugs: string[] = [];
    tmp.forEach((tag) => {
      const id = StringConvert.toSafeInteger(tag['$'].id);
      if (!isSafeInteger(id)) {
        throw new Error('Tag does not have an id');
      }
      const slug = slugify((stripHtml(tag['en'][0]).result ?? '').trim());
      if (!isNonEmptyString(slug)) {
        throw new Error('tag label is empty');
      }
      if (slugs.includes(slug)) {
        throw new Error('Tag slug already defined');
      }
      slugs.push(slug);
      tags.push({
        id: id,
        tag_slug: slug,
        label: {
          en: stripHtml(tag['en'][0]).result,
          fr: stripHtml(tag['fr'][0]).result,
        },
      });
    });
    return tags;
  };

  getMedia = (dvdJson: DvdJson, tags: Tag[]): Media[] => {
    const media = dvdJson.dvd.medias[0].media;
    const data: Media[] = [];
    const slugs: string[] = [];
    media.map((medium) => {
      const slug = slugify(stripHtml(medium.en[0]).result.trim());
      if (!isNonEmptyString(slug)) {
        throw new Error('media label is empty');
      }
      if (slugs.includes(slug)) {
        throw new Error('media slug already defined');
      }
      slugs.push(slug);

      const normalizedTags: Media['tags'] = [];

      medium.tag.forEach((tag) => {
        const current = tags.filter(
          (t) => t.id === StringConvert.toSafeInteger(tag.$.id)
        )?.[0];
        if (current) {
          normalizedTags.push({
            tag_slug: current?.tag_slug,
            relevance: StringConvert.toSafeInteger(tag.$.value) ?? 0,
          });
        }
      });

      const mediaUrl =
        'path' in medium.$ && medium.$.path?.trim() !== ''
          ? medium.$.path?.trim()
          : {
              en: medium.$.path_en?.trim(),
              fr: medium.$.path_fr?.trim(),
            };
      if (!isMediaUrl(mediaUrl)) {
        throw new Error(`Cannot infer mediaUrl for ${medium.en[0]}`);
      }

      const thumb = (medium.$.thumb?.trim() ?? '').replace(
        /^pics\//,
        '/images/media/thumb'
      );
      const mediaType = thumb.match(/audio\.png$/) ? 'audio' : 'video';

      data.push({
        media_slug: slug,
        media_type: mediaType,
        title: {
          fr: stripHtml(medium.fr[0]).result,
          en: stripHtml(medium.en[0]).result,
        },
        type: medium.$.type,
        ...('moment' in medium.$ ? { moment: medium.$.moment } : {}),
        thumb: thumb,
        media_url: mediaUrl,
        tags: normalizedTags,
      });
    });
    return data;
  };

  convert = async (xmlFile: string, jsonFile: string): Promise<void> => {
    const json = await this.xmltoDvdJson(xmlFile);
    const tags = this.getTags(json);
    const media = this.getMedia(json, tags);
    console.log('media', JSON.stringify(media, null, 2));
  };

  writeTypescriptFile = (
    data: unknown,
    type: 'Tag' | 'Media',
    fileName: string
  ) => {
    const writer = new CodeBlockWriter({
      newLine: '\n',
      indentNumberOfSpaces: 2, // default: 4
      useTabs: false,
      useSingleQuote: false,
    });
    writer.writeLine(`import { ${type} } from './data.types';`);
    writer.writeLine('');
    writer.write(
      `export const ${type.toLowerCase()}Data: ${type}[] = ${JSON.stringify(
        data,
        null,
        2
      )};`
    );
    fs.writeFileSync(fileName, writer.toString());
  };
}
