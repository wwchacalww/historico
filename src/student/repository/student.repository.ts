import { InputStudent } from "../../@shared/dto";
import { prisma } from "../../@shared/infra/db/prisma.client";
import { Classroom } from "../../classroom/domain/entity/classroom";
import { Student } from "../domain/entity/student";
import { StudentRepositoryInterface } from "../domain/repository/student.repository";


export class StudentRepository implements StudentRepositoryInterface {
    async save(input: InputStudent): Promise<Student> {
        const find = await prisma.student.findFirst({
            where: {
                OR:[
                    {ieducar: input.ieducar},
                    {educadf: input.educadf ? input.educadf : "asdflaksdf"}
                ]
            }
        });

        const classroom = await prisma.classroom.findFirst({where: {id: input.classroom}});
        if (!classroom) {
            throw new Error("Turmas não encontradas");
        }
        const { name, group, shift, year  } = classroom;
        const clEntity = new Classroom({ id: classroom.id, name, group, shift, year});
        
        const student = new Student({
            name: input.name,
            birth_day: input.birth_day,
            ieducar: input.ieducar,
            status: true,
            anne: input.anne || "",
            classroom: clEntity,
            educadf: input.educadf || "",
        });

        if (find) {
            await prisma.student.update({
                where: {
                    id: find.id,
                },
                data: {
                    name: student.name,
                    ieducar: student.ieducar,
                    educadf: student.educadf,
                    birth_day: student.birth_day,
                    anne: student.anne,
                    status: student.status,
                    classroom_id: classroom.id,
                }
            })
        }else {
            await prisma.student.create({
                data: {
                    id: student.id,
                    name: student.name,
                    ieducar: student.ieducar,
                    educadf: student.educadf,
                    birth_day: student.birth_day,
                    anne: student.anne,
                    status: student.status,
                    classroom_id: classroom.id,
                }
            });
        }

        return student;
    }

    async show(id: string): Promise<Student> {
        const std = await prisma.student.findFirst({ where: {id}});
        if(!std) {
            throw new Error("Method not implemented.");
        }
        const dn = new Intl.DateTimeFormat('pt-BR').format(std.birth_day);

        if(std.classroom_id) {
            const classroom = await prisma.classroom.findFirst({where: {id: std.classroom_id}});
            if (!classroom) {
                throw new Error("Turmas não encontradas");
            }
            const { name, group, year, shift } = classroom;
            const clEntity = new Classroom({ id: classroom.id, name, group, shift, year});
            return new Student({
                id,
                name: std.name,
                ieducar: std.ieducar,
                educadf: std.educadf || undefined,
                status: std.status,
                anne: std.anne || undefined,
                birth_day: dn,
                classroom: clEntity,
            });
        }

        return new Student({
            id,
            name: std.name,
            ieducar: std.ieducar,
            educadf: std.educadf || undefined,
            status: std.status,
            anne: std.anne || undefined,
            birth_day: dn,
        })
    }

    async FindByIeducar(ieducar: number): Promise<Student> {
        const std = await prisma.student.findFirst({ where: {ieducar}});
        if(!std) {
            throw new Error("Method not implemented.");
        }
        const dn = new Intl.DateTimeFormat('pt-BR').format(std.birth_day);

        if(std.classroom_id) {
            const classroom = await prisma.classroom.findFirst({where: {id: std.classroom_id}});
            if (!classroom) {
                throw new Error("Turmas não encontradas");
            }
            const { name, group, year, shift } = classroom;
            const clEntity = new Classroom({ id: classroom.id, name, group, shift, year});
            return new Student({
                id: std.id,
                name: std.name,
                ieducar: std.ieducar,
                educadf: std.educadf || undefined,
                status: std.status,
                anne: std.anne || undefined,
                birth_day: dn,
                classroom: clEntity,
            });
        }

        return new Student({
            id: std.id,
            name: std.name,
            ieducar: std.ieducar,
            educadf: std.educadf || undefined,
            status: std.status,
            anne: std.anne || undefined,
            birth_day: dn,
        });
    }

    async FindByEducaDF(educadf: string): Promise<Student> {
        const std = await prisma.student.findFirst({ where: {educadf}});
        if(!std) {
            throw new Error("Method not implemented.");
        }
        const dn = new Intl.DateTimeFormat('pt-BR').format(std.birth_day);

        if(std.classroom_id) {
            const classroom = await prisma.classroom.findFirst({where: {id: std.classroom_id}});
            if (!classroom) {
                throw new Error("Turmas não encontradas");
            }
            const { name, group, year, shift } = classroom;
            const clEntity = new Classroom({ id: classroom.id, name, group, shift, year});
            return new Student({
                id: std.id,
                name: std.name,
                ieducar: std.ieducar,
                educadf: std.educadf || undefined,
                status: std.status,
                anne: std.anne || undefined,
                birth_day: dn,
                classroom: clEntity,
            });
        }

        return new Student({
            id: std.id,
            name: std.name,
            ieducar: std.ieducar,
            educadf: std.educadf || undefined,
            status: std.status,
            anne: std.anne || undefined,
            birth_day: dn,
        });
    }

    async FindByName(name: string): Promise<Student[]> {
        const stds = await prisma.student.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            include: { 
                Classroom: {
                    include: {
                        Students: true
                    }
                }
            },
            orderBy: { name: "asc"}
        });
        
        if (stds.length == 0) {
            throw new Error("Student not found");
        }

        const result: Student[] = stds.map( st => {
            const {id, name, ieducar,educadf, anne, birth_day, status, Classroom: clr} = st;
            const dn = new Intl.DateTimeFormat('pt-BR').format(birth_day);

            const entity = new Student({
                id, 
                name, 
                ieducar, 
                educadf: educadf || undefined, 
                anne: anne || undefined, 
                status, birth_day: dn
            });

            if(clr) {
                const classroom = new Classroom({
                    id: clr.id,
                    name: clr.name,
                    group: clr.group,
                    shift: clr.shift,
                    year: clr.year
                });

                entity.classroom = classroom;
            }

            return entity;
        })

        return result;
    }

    async List(classroom: string): Promise<Student[]> {
        if(classroom === "todos") {
            const allStds = await prisma.student.findMany({
                where: {
                    Classroom: {
                        year: 2024
                    }
                },
                include: { 
                    Classroom: {
                        include: {
                            Students: true
                        }
                    }
                },
                orderBy: { Classroom: { name: "asc"}}
            });

            const result: Student[] = allStds.map( st => {
                const {id, name, ieducar,educadf, anne, birth_day, status, Classroom: clr} = st;
                const dn = new Intl.DateTimeFormat('pt-BR').format(birth_day);
    
                const entity = new Student({
                    id, 
                    name, 
                    ieducar, 
                    educadf: educadf || undefined, 
                    anne: anne || undefined, 
                    status, birth_day: dn
                });
    
                if(clr) {
                    const classroom = new Classroom({
                        id: clr.id,
                        name: clr.name,
                        group: clr.group,
                        shift: clr.shift,
                        year: clr.year
                    });
    
                    entity.classroom = classroom;
                }
    
                return entity;
            })
    
            return result;
        }
        const stds = await prisma.student.findMany({
            where: {
                classroom_id: classroom,
            },
            include: { 
                Classroom: {
                    include: {
                        Students: true
                    }
                }
            },
            orderBy: { name: "asc"}
        });
        
        
        if (stds.length == 0) {
            throw new Error("Classroom not found");
        }

        const result: Student[] = stds.map( st => {
            const {id, name, ieducar,educadf, anne, birth_day, status, Classroom: clr} = st;
            const dn = new Intl.DateTimeFormat('pt-BR').format(birth_day);

            const entity = new Student({
                id, 
                name, 
                ieducar, 
                educadf: educadf || undefined, 
                anne: anne || undefined, 
                status, birth_day: dn
            });

            if(clr) {
                const classroom = new Classroom({
                    id: clr.id,
                    name: clr.name,
                    group: clr.group,
                    shift: clr.shift,
                    year: clr.year
                });

                entity.classroom = classroom;
            }

            return entity;
        })

        return result;
    }

}