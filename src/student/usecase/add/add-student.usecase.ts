import { InputStudent } from "../../../@shared/dto";
import { Student } from "../../domain/entity/student";
import { StudentRepository } from "../../repository/student.repository";


export class AddStudentUsecase {
    async execute({name, ieducar, educadf, anne, classroom, birth_day}:InputStudent):Promise<Student> {
        const repo = new StudentRepository();
        const std = await repo.add({
            name,
            birth_day,
            classroom,
            ieducar,
            anne,
            educadf
        });

        return std;
    }
}