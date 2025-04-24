-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MODERATOR', 'ADMINISTRATOR');

-- CreateTable
CREATE TABLE "AuthorizedUser" (
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "AuthorizedUser_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthorizedUser_email_key" ON "AuthorizedUser"("email");
