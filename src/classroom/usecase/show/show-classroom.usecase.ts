import { Classroom } from "../../domain/entity/classroom";
import { ClassroomRepository } from "../../repository/classroom.repository";


export class ShowClassroomUsecase {
    async execute(id: string):Promise<Classroom> {
        const repo = new ClassroomRepository();
        const result = await repo.show(id);
        return result;
    }
}