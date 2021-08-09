import { VideoRepo } from '@/features/video/repository/video.repo';
import { Media } from '@/data/data.types';

describe('VideoRepo tests', () => {
  describe('findByTags', () => {
    const testData: Partial<Media>[] = [
      {
        slug: 'video-1',
        title: {
          fr: 'Vidéo 1',
          en: 'Video 1',
        },
        tags: [
          { slug: 'one', relevance: 20 },
          { slug: 'two', relevance: 10 },
        ],
      },
      {
        slug: 'video-2',
        title: {
          fr: 'Vidéo 2',
          en: 'Video 2',
        },
        tags: [
          { slug: 'three', relevance: 5 },
          { slug: 'two', relevance: 40 },
        ],
      },
    ];
    const repo = new VideoRepo({
      lang: 'fr',
      videoData: testData as Media[],
    });
    describe('when tags correspond to one video only', () => {
      it('should return only one video', async () => {
        const result = await repo.findByTags(['one', 'four'], false);
        expect(result.length).toStrictEqual(1);
        expect(result?.[0].slug).toStrictEqual('video-1');
      });
    });
    describe('when tags correspond to multiple videos and sortByRelevance = true', () => {
      it('should return all matching videos sorted', async () => {
        const result = await repo.findByTags(['one', 'two'], true);
        expect(result.length).toStrictEqual(2);
        expect(result?.[0].slug).toStrictEqual('video-2');
        expect(result?.[1].slug).toStrictEqual('video-1');
      });
    });

    describe('when tags correspond to multiple videos and sortByRelevance = false', () => {
      it('should return all matching videos sorted', async () => {
        const result = await repo.findByTags(['one', 'two'], false);
        expect(result.length).toStrictEqual(2);
        expect(result?.[0].slug).toStrictEqual('video-1');
        expect(result?.[1].slug).toStrictEqual('video-2');
      });
    });

    describe('when tag is given as string', () => {
      it('should return same matching as if it was an array', async () => {
        expect(await repo.findByTags('one', false)).toStrictEqual(
          await repo.findByTags(['one'], false)
        );
      });
    });
  });
});
