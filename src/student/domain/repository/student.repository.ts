import { InputStudent } from "../../../@shared/dto";
import { Student } from "../entity/student";


export interface StudentRepositoryInterface {
    save(input: InputStudent):Promise<Student>;
    show(id: string):Promise<Student>;
    FindByIeducar(ieducar: number):Promise<Student>;
    FindByEducaDF(educadf: string):Promise<Student>;
    FindByName(name: string):Promise<Student[]>;
    List(classroom: string):Promise<Student[]>;
}