/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ListStudentUsacase } from "./list-student.usecase";


export class ListStudentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const usecase = new ListStudentUsacase();
        try {
            const { classroom } = request.params;
            const result = await usecase.execute(classroom);
            return response.status(200).json(result);
        }catch(err: any) {
            return response.status(400).json(err.message)
        }
    }
}