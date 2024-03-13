import { Router } from "express";
import { AddClassroomClontroller } from "../../../classroom/usecase/add/add-classroom.controller";
import { ListClassroomController } from "../../../classroom/usecase/list/list-classroom.controller";
import { ShowClassroomController } from "../../../classroom/usecase/show/show-classroom.controller";
import { DiaryPDFController } from "../../../classroom/usecase/diary-pdf/diary-pdf.controller";


const classRouter = Router();

const addController = new AddClassroomClontroller();
const listController = new ListClassroomController();
const showController = new ShowClassroomController();
const diaryPDFController = new DiaryPDFController();

classRouter.post("/", addController.handle);
classRouter.get("/list/:year", listController.handle);
classRouter.get("/show/:id", showController.handle);
classRouter.get("/diary-pdf", diaryPDFController.handle)

export { classRouter }