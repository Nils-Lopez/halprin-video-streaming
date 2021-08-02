import { prismaClient } from '@/backend/config/container.config';
import { PrismaClient } from '../../../../../../packages/db-main';

export type GraphqlSdlContext = {
  prisma: PrismaClient;
};

export const graphqlSdlContext: GraphqlSdlContext = {
  prisma: prismaClient,
};
