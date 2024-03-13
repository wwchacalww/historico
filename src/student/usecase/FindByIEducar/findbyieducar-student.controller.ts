/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { FindByIEducarStudentUsacase } from "./findbyieducar-student.usecase";


export class FindByIEducarStudentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const usecase = new FindByIEducarStudentUsacase();
        try {
            const { ieducar } = request.params;
            const result = await usecase.execute(Number(ieducar));
            return response.status(200).json(result);
        }catch(err: any) {
            return response.status(400).json(err.message)
        }
    }
}