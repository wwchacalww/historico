/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { DiaryPDFUsecase } from "./diary-pdf.usecase";

export class DiaryPDFController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const usecase = new DiaryPDFUsecase()
            const result = await usecase.execute(response)
            return result
        }catch(err: any) {
            return response.status(400).json(err.message);
        }
    }
}