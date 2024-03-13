/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ImportStudentsUsecase } from "./import-students.usecase";


export class ImportStudentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        if (!file) {
            throw new Error("File not found");
        }

        const usecase = new ImportStudentsUsecase();

        try {
            const result = await usecase.execute(file);
            return response.status(201).json(result);
        }catch(err: any) {
            console.log(err);
            return response.status(400).json(err.message)
        }
    }
}