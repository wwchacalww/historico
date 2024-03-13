/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, response } from "express";
import { AddStudentUsecase } from "./add-student.usecase";


export class AddStudentController {
    async handle(request: Request, reponse: Response): Promise<Response> {
        const { name, ieducar, educadf, anne, classroom, birth_day } = request.body;
        const usecase = new AddStudentUsecase();

        try {
            const std = await usecase.execute({name, ieducar, educadf, anne, classroom, birth_day});
            return reponse.status(201).json(std);
        }catch(err: any) {
            return response.status(400).json(err.message)
        }
    }
}