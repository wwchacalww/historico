-- CreateTable
CREATE TABLE "classrooms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shift" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "classrooms_pkey" PRIMARY KEY ("id")
);
