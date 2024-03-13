/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ShowStudentUsacase } from "./show-student.usecase";


export class ShowStudentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const usecase = new ShowStudentUsacase();
        try {
            const { id } = request.params;
            const result = await usecase.execute(id);
            return response.status(200).json(result);
        }catch(err: any) {
            return response.status(400).json(err.message)
        }
    }
}