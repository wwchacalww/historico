import { Student } from "../../domain/entity/student";
import { StudentRepository } from "../../repository/student.repository";


export class FindByIEducarStudentUsacase {
    async execute(ieducar: number): Promise<Student> {
        const repo = new StudentRepository();
        return await repo.FindByIeducar(ieducar);
    }
}