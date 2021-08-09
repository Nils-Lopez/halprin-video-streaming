import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import { slugify } from 'transliteration';
import { Simplify } from 'type-fest';
import { StringConvert } from '@contredanse/common/utils/string-convert';
import { isNonEmptyString, isSafeInteger } from '@contredanse/common';
import { stripHtml } from 'string-strip-html';
import CodeBlockWriter from 'code-block-writer';
import { Tag } from '@/data/data.types';

type DvdJson = Simplify<{
  dvd: {
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
    const json = await parseStringPromise(xmlString, {});

    //console.log(JSON.stringify(json, null, 4));
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
        slug: slug,
        label: {
          en: stripHtml(tag['en'][0]).result,
          fr: stripHtml(tag['fr'][0]).result,
        },
      });
    });
    //console.log(JSON.stringify(tags, null, 4));
    return tags;
  };

  convert = async (xmlFile: string, jsonFile: string): Promise<void> => {
    const json = await this.xmltoDvdJson(xmlFile);
    const tags = this.getTags(json);
  };

  writeTypescriptFile = (data: unknown, type: 'Tag', fileName: string) => {
    const writer = new CodeBlockWriter({
      newLine: '\n',
      indentNumberOfSpaces: 2, // default: 4
      useTabs: false,
      useSingleQuote: false,
    });
    writer.writeLine(`import { ${type} } from './data.types';`);
    writer.writeLine('');
    writer.write(
      `export const tagData: ${type}[] = ${JSON.stringify(data, null, 2)};`
    );
    fs.writeFileSync(fileName, writer.toString());
  };
}
