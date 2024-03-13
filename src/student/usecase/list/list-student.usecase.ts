import { Student } from "../../domain/entity/student";
import { StudentRepository } from "../../repository/student.repository";


export class ListStudentUsacase {
    async execute(classroom: string): Promise<Student[]> {
        const repo = new StudentRepository();
        return await repo.List(classroom);
    }
}