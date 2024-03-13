import { Router } from "express";
import { AddStudentController } from "../../../student/usecase/add/add-student.controller";
import { ShowStudentController } from "../../../student/usecase/show/show-student.controller";
import { FindByIEducarStudentController } from "../../../student/usecase/FindByIEducar/findbyieducar-student.controller";
import { FindByNameStudentController } from "../../../student/usecase/FindByName/findbyname-student.controller";
import { ListStudentController } from "../../../student/usecase/list/show-student.controller";
import multer from "multer";

import uploadConfig from "../../config/upload";
import { ImportStudentsController } from "../../../student/usecase/import/import-students.controller";

const upload = multer(uploadConfig.upload("./tmp"));

const studentRouter = Router();

const addController = new AddStudentController();
const showController = new ShowStudentController();
const FindByIeducarController = new FindByIEducarStudentController();
const findByNameController = new FindByNameStudentController();
const listController = new ListStudentController();
const importController = new ImportStudentsController();


studentRouter.post("/", addController.handle);
studentRouter.post("/import", upload.single("file"), importController.handle);
studentRouter.get("/show/:id", showController.handle);
studentRouter.get("/find/ieducar/:ieducar", FindByIeducarController.handle);
studentRouter.get("/find/name/", findByNameController.handle);
studentRouter.get("/list/:classroom", listController.handle);


export { studentRouter }