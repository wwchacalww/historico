import { Student } from "../../domain/entity/student";
import { StudentRepository } from "../../repository/student.repository";


export class ShowStudentUsacase {
    async execute(id: string): Promise<Student> {
        const repo = new StudentRepository();
        return await repo.show(id);
    }
}