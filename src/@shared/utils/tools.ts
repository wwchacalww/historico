
export function stringToDate(dt: string): Date {
    const x = dt.split("/")
    if (x.length != 3) {
        throw new Error("Error date");
    }
    const result = new Date(x[1]+"-"+x[0]+"-"+x[2]+" 12:00:00")
    return result;
}