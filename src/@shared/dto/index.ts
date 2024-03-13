export type InputClassroom = {
    name: string;
    group: string;
    shift: string;
    year: number;
}

export type InputStudent = {
    name: string;
    birth_day: string;
    ieducar: number;
    educadf?: string;
    anne?: string;
    classroom: string;
}