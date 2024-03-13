import { InputClassroom } from "../../../@shared/dto";
import { Classroom } from "../../domain/entity/classroom";
import { ClassroomRepository } from "../../repository/classroom.repository";


export class AddClassroomUsecase {
    async execute({name, group, shift, year}: InputClassroom) {
        const entity = new Classroom({name, group, shift, year});
        const repo = new ClassroomRepository();
        await repo.add(entity);
        return entity;
    }
}