-- CreateTable
CREATE TABLE "BusinessInformation" (
    "id" TEXT NOT NULL,
    "businessEmail" TEXT,
    "businessPhone" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "youtube" TEXT,
    "twitterX" TEXT,
    "businessAddress" TEXT,

    CONSTRAINT "BusinessInformation_pkey" PRIMARY KEY ("id")
);
