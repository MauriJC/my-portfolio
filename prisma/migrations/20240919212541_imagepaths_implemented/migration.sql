-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "longDescription" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mainImagePath" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
