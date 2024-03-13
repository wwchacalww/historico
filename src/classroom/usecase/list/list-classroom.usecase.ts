import { Classroom } from "../../domain/entity/classroom";
import { ClassroomRepository } from "../../repository/classroom.repository";


export class ListClassroomUsecase {
    async execute(year: number):Promise<Classroom[]> {
        const repo = new ClassroomRepository();
        const result = await repo.list(year);
        return result;
    }
}