/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ListClassroomUsecase } from "./list-classroom.usecase";


export class ListClassroomController {
    async handle(request: Request, response: Response):Promise<Response> {
        const { year } = request.params;
        const usecase = new ListClassroomUsecase();

        try {
            const result = await usecase.execute(Number(year));
            return response.status(200).json(result);
        }catch(err: any) {
            return response.status(400).json(err.message);
        }
    }
}