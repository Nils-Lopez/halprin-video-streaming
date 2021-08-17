import { prismaClient } from '@/backend/config/container.config';
import { PrismaClientDbMain } from '@contredanse/db-main';

export type GraphqlSdlContext = {
  prisma: PrismaClientDbMain;
};

export const graphqlSdlContext: GraphqlSdlContext = {
  prisma: prismaClient,
};
