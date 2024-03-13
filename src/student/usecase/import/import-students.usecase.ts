/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputStudent } from "../../../@shared/dto";
import fs from "fs";
import { parse } from "csv-parse";
import { StudentRepository } from "../../repository/student.repository";

export class ImportStudentsUsecase {
    loadClassrooms(
        file: Express.Multer.File,
      ): Promise<InputStudent[]> {
    
        return new Promise((resolve, reject) => {
          const stream = fs.createReadStream(file.path);
          const input: InputStudent[] = [];
          let classroom_id = "";
    
          const parseFile = parse({
            delimiter: ";",
          });
    
          stream.pipe(parseFile);
          parseFile
            .on("data", async (line) => {
              const [ieducar, name, birth_day, anne] = line;
              
              if (ieducar === "Turma") {
                classroom_id = name;
              }else {
                const ip:InputStudent = {
                    name,
                    birth_day,
                    anne,
                    ieducar: Number(ieducar),
                    classroom: classroom_id,
                    educadf: undefined,
                };
                input.push(ip);
              }
            })
            .on("end", () => {
              fs.promises.unlink(file.path);
              resolve(input);
            })
            .on("error", (err) => {
              reject(err);
            });
        });
      }

    async execute(file: Express.Multer.File) {
        const input = await this.loadClassrooms(file);
        const repo = new StudentRepository();
        input.forEach( async ip => {
            await repo.save(ip)
        });
        return input;
    }
}