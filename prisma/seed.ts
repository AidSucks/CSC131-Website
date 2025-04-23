import { PrismaClient } from "@prisma/client";
import availabilityData from "./availability-rules.json"; 
import calendarSettingsData from "./calendar-settings.json";


const prisma = new PrismaClient();

async function main() {
  await prisma.availabilityRule.createMany({
    data: availabilityData,
  });

  await prisma.calendarSettings.create({
    data: calendarSettingsData,
  });

  console.log("Seeded availability rules from JSON.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
