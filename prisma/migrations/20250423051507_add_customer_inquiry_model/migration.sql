-- CreateTable
CREATE TABLE "CustomerInquiry" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT,
    "servicesRequested" TEXT[],
    "message" TEXT,

    CONSTRAINT "CustomerInquiry_pkey" PRIMARY KEY ("id")
);
