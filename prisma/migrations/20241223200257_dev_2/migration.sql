-- CreateTable
CREATE TABLE "Footprint" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "views" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Footprint_id_key" ON "Footprint"("id");

-- AddForeignKey
ALTER TABLE "Footprint" ADD CONSTRAINT "Footprint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
