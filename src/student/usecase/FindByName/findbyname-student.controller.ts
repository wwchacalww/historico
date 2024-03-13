/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { FindByNameStudentUsacase } from "./findbyname-student.usecase";


export class FindByNameStudentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const usecase = new FindByNameStudentUsacase();
        try {
            const { name } = request.query;
            const result = await usecase.execute(String(name));
            return response.status(200).json(result);
        }catch(err: any) {
            return response.status(400).json(err.message)
        }
    }
}