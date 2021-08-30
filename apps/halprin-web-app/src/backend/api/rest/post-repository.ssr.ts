import { PrismaClientDbMain } from '@contredanse/db-main';
import { InternalServerError, NotFound } from '@tsed/exceptions';
import { Asserts, UnPromisify } from '@contredanse/common';

export type GetPosts = UnPromisify<
  ReturnType<typeof PostRepositorySsr['prototype']['getPosts']>
>;

export class PostRepositorySsr {
  constructor(private prisma: PrismaClientDbMain) {}

  /**
   * @throws Error
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getPost = async (postId: number) => {
    try {
      const post = this.prisma.post.findUnique({
        where: { id: postId },
        include: { author: true },
      });
      Asserts.isPresent(
        post,
        () => new NotFound(`Post ${postId} can't be found`)
      );
      return post;
    } catch (e) {
      throw new InternalServerError(`Post ${postId} can't be retrieved`, e);
    }
  };

  /**
   * @throws Error
   */
  getPosts = async (options?: { limit?: number; offset?: number }) => {
    const { limit, offset } = options ?? {};
    try {
      return await this.prisma.post.findMany({
        skip: offset,
        take: limit,
        where: {
          publishedAt: {
            not: null,
          },
        },
        include: {
          author: {
            select: {
              firstName: true,
              lastName: true,
              nickname: true,
            },
          },
        },
        orderBy: { publishedAt: 'desc' },
      });
    } catch (e) {
      throw new InternalServerError(`Posts can't be retrieved`, e);
    }
  };
}
