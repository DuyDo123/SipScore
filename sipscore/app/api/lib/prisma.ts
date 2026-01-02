import 'dotenv/config';
import { PrismaClient } from '../../../prisma/generated/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = new PrismaClient({
  accelerateUrl: process.env.PRISMA_ACCELERATE_URL!,
  log: ['query', 'warn', 'error'],
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}