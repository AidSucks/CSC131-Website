-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "CustomerAppointment" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT,
    "message" TEXT,
    "submittedDate" TIMESTAMP(3) NOT NULL,
    "appointmentStart" TIMESTAMP(3) NOT NULL,
    "appointmentEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailabilityRule" (
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "allowedAppointments" JSONB[],

    CONSTRAINT "AvailabilityRule_pkey" PRIMARY KEY ("dayOfWeek")
);

-- CreateTable
CREATE TABLE "SpecialUnavailabilityRule" (
    "id" TEXT NOT NULL,
    "note" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpecialUnavailabilityRule_pkey" PRIMARY KEY ("id")
);
