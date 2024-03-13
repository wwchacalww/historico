import { Classroom } from "../entity/classroom"

export interface ClassroomRepositoryInterface {
    add(classroom: Classroom): Promise<void>
    list(year: number): Promise<Classroom[]>
    show(id: string): Promise<Classroom>
}