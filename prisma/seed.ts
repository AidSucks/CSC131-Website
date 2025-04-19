import { PrismaClient } from "@prisma/client";
import availabilityData from "./availability-rules.json"; 


const prisma = new PrismaClient();

async function main() {
  await prisma.availabilityRule.createMany({
    data: availabilityData,
  });

  console.log("Seeded availability rules from JSON.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
