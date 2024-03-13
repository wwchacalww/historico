import { v4 } from "uuid";

type classroom_props = {
    id?: string;
    name: string;
    shift: string;
    group: string;
    year: number;
}

export class Classroom {
    id: string;
    name: string;
    shift: string;
    group: string;
    year: number;

    constructor(props: classroom_props) {
        this.id = props.id || v4();
        this.name = props.name;
        this.group = props.group;
        this.shift = props.shift;
        this.year = props.year;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            shift: this.shift,
            group: this.group,
            year: this.year,
        }
    }
}