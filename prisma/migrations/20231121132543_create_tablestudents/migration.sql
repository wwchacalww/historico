-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ieducar" INTEGER NOT NULL,
    "educadf" TEXT,
    "birth_day" TIMESTAMP(3) NOT NULL,
    "anne" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "classroom_id" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_classroom_id_fkey" FOREIGN KEY ("classroom_id") REFERENCES "classrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
