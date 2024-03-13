/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { AddClassroomUsecase } from "./add-classroom.usecase";


export class AddClassroomClontroller {
    async handle(request: Request, response: Response):Promise<Response>{
        const {name, group, shift, year} = request.body;
        const usecase = new AddClassroomUsecase();

        try {
            const classroom = await usecase.execute({name, group, shift, year});
            return response.status(201).json(classroom);
        }catch (err: any) {
            return response.status(400).json(err.message);
        }
    }
}