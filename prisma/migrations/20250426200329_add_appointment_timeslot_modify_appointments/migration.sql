/*
  Warnings:

  - You are about to drop the column `allowedAppointments` on the `AvailabilityRule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AvailabilityRule" DROP COLUMN "allowedAppointments",
ALTER COLUMN "dayOfWeek" SET DEFAULT 'MONDAY';

-- AlterTable
ALTER TABLE "CustomerAppointment" ALTER COLUMN "submittedDate" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "AppointmentTimeslot" (
    "id" SERIAL NOT NULL,
    "startHour" INTEGER NOT NULL,
    "startMin" INTEGER NOT NULL,
    "endHour" INTEGER NOT NULL,
    "endMin" INTEGER NOT NULL,

    CONSTRAINT "AppointmentTimeslot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AppointmentTimeslotToAvailabilityRule" (
    "A" INTEGER NOT NULL,
    "B" "DayOfWeek" NOT NULL,

    CONSTRAINT "_AppointmentTimeslotToAvailabilityRule_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentTimeslot_startHour_endHour_startMin_endMin_key" ON "AppointmentTimeslot"("startHour", "endHour", "startMin", "endMin");

-- CreateIndex
CREATE INDEX "_AppointmentTimeslotToAvailabilityRule_B_index" ON "_AppointmentTimeslotToAvailabilityRule"("B");

-- AddForeignKey
ALTER TABLE "_AppointmentTimeslotToAvailabilityRule" ADD CONSTRAINT "_AppointmentTimeslotToAvailabilityRule_A_fkey" FOREIGN KEY ("A") REFERENCES "AppointmentTimeslot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentTimeslotToAvailabilityRule" ADD CONSTRAINT "_AppointmentTimeslotToAvailabilityRule_B_fkey" FOREIGN KEY ("B") REFERENCES "AvailabilityRule"("dayOfWeek") ON DELETE CASCADE ON UPDATE CASCADE;
