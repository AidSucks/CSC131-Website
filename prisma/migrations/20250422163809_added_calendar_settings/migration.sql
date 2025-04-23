/*
  Warnings:

  - You are about to drop the column `maxDays` on the `AvailabilityRule` table. All the data in the column will be lost.
  - You are about to drop the column `minDays` on the `AvailabilityRule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AvailabilityRule" DROP COLUMN "maxDays",
DROP COLUMN "minDays";

-- CreateTable
CREATE TABLE "CalendarSettings" (
    "id" SERIAL NOT NULL,
    "minDays" INTEGER NOT NULL,
    "maxDays" INTEGER NOT NULL,

    CONSTRAINT "CalendarSettings_pkey" PRIMARY KEY ("id")
);
