import { Router } from "express";
import { classRouter } from "./classroom.router";
import { studentRouter } from "./student.router";

const router = Router();

router.use("/classrooms", classRouter);
router.use("/students", studentRouter)

export { router }