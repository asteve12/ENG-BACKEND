-- CreateTable
CREATE TABLE "Account" (
    "parentName" TEXT NOT NULL,
    "childName" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "childGender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
