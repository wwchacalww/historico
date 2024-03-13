/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ShowClassroomUsecase } from "./show-classroom.usecase";


export class ShowClassroomController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const usecase = new ShowClassroomUsecase();

        try {
            const result = await usecase.execute(id);
            return response.status(200).json(result);
        }catch(err: any) {
            return response.status(400).json(err.message);
        }
    }
}