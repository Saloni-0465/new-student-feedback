import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.status.createMany({
    data: [
      { status: 'Unresolved' },
      { status: 'In-progress' },
      { status: 'Resolved' },
    ],
    skipDuplicates: true, // Avoid creating duplicate entries
  });

  console.log('Statuses seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
