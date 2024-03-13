import { v4 } from "uuid";
import { Classroom } from "../../../classroom/domain/entity/classroom";
import { stringToDate } from "../../../@shared/utils/tools";

type student_props = {
    id?: string;
    ieducar: number;
    educadf?: string;
    name: string;
    birth_day: string;
    anne?: string;
    status: boolean;
    classroom?: Classroom;
}

export class Student {
    id: string;
    ieducar: number;
    educadf?: string;
    name: string;
    birth_day: Date;
    anne?: string;
    status: boolean;
    classroom?: Classroom;

    constructor(props: student_props) {
        this.id = props.id || v4();
        this.name = props.name;
        this.ieducar = props.ieducar;
        this.educadf = props.educadf;
        this.birth_day = stringToDate(props.birth_day);
        this.anne = props.anne;
        this.status = true;
        this.classroom = props.classroom;
    }
    
}