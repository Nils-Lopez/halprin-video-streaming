import path from 'path';
import { LegacyDvdConverter } from '../legacy-dvd-converter';
import { isPlainObject } from '@contredanse/common';

const xmlFile = path.resolve(__dirname, '../../../data/dvd_legacy/dvd.xml');
const tagFile = path.resolve(__dirname, '../../../data/tags.data.ts');
const mediaFile = path.resolve(__dirname, '../../../data/media.data.ts');
describe('LegacyDvdConverter tests', () => {
  describe('xmlToDvdJson', () => {
    it('should work read json', async () => {
      const conv = new LegacyDvdConverter();
      const json = await conv.xmltoDvdJson(xmlFile);
      expect(isPlainObject(json.dvd.credits[0])).toBeTruthy();
      expect(isPlainObject(json.dvd.index[0].tag[0])).toBeTruthy();
    });
  });
  describe('convert', () => {
    it('should work read json', async () => {
      const conv = new LegacyDvdConverter();
      const json = await conv.convert(xmlFile, '/tmp/test.json');
      //expect(isPlainObject(json.dvd.credits[0])).toBeTruthy();
      //expect(isPlainObject(json.dvd.index[0].tag[0])).toBeTruthy();
    });
  });

  describe('Write tags', () => {
    it('should write to file', async () => {
      if (true) {
        const conv = new LegacyDvdConverter();
        const json = await conv.xmltoDvdJson(xmlFile);
        const tags = conv.getTags(json);
        //conv.writeTypescriptFile(tags, 'Tag', tagFile);
        const media = conv.getMedia(json, tags);
        conv.writeTypescriptFile(media, 'Media', mediaFile);
      }
      //expect(isPlainObject(json.dvd.credits[0])).toBeTruthy();
      //expect(isPlainObject(json.dvd.index[0].tag[0])).toBeTruthy();
    });
  });
});
