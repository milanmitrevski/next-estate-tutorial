import { prisma } from '@/app/database/db';

export async function getRecentProperties() {
  try {
    const properties = prisma.property.findMany({
      take: 6,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return properties;
  } catch (error) {
    console.error('Failed to fetch recent properties:', error);
    return [];
  }
}
