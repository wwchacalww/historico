import { Student } from "../../domain/entity/student";
import { StudentRepository } from "../../repository/student.repository";


export class FindByNameStudentUsacase {
    async execute(name: string): Promise<Student[]> {
        const repo = new StudentRepository();
        return await repo.FindByName(name);
    }
}