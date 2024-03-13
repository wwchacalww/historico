import { prisma } from "../../@shared/infra/db/prisma.client";
import { Classroom } from "../domain/entity/classroom";
import { ClassroomRepositoryInterface } from "../domain/repository/classroom.repository";


export class ClassroomRepository implements ClassroomRepositoryInterface {
    async add(classroom: Classroom): Promise<void> {
        const find = await prisma.classroom.findFirst({
            where: {
                name: classroom.name,
                year: classroom.year,
            }
        });

        if(!find) {
            await prisma.classroom.create({
                data: {
                    id: classroom.id,
                    name: classroom.name,
                    group: classroom.group,
                    shift: classroom.shift,
                    year: classroom.year,
                }
            });
        }
    }
    
    async list(year: number): Promise<Classroom[]> {
        const classrooms = await prisma.classroom.findMany({
            where: {
                year: year
            },
            orderBy: {
                name: "asc"
            }
        });

        if (!classrooms) {
            throw new Error("Turmas não encontradas");
        }

        return classrooms.map( c => {
            const { id, name, group, year, shift } = c;
            return new Classroom({ id, name, group, shift, year});
        })

    }

    async show(id: string): Promise<Classroom> {
        const result = await prisma.classroom.findFirst({ where: { id }})
        if (!result) {
            throw new Error("Turmas não encontradas");
        }
        const { name, group, year, shift } = result;
        return new Classroom({ id, name, group, shift, year});
    }

}