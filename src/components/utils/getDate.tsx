export default function getDate(oldDate: any): number {
    // вместо any должен быть Timestamp,но его  тс находить не хочет :(
    const currentDay: number = new Date().getTime();
    return +((currentDay - new Date(oldDate).getTime()) / 1000 / 60 / 60 / 24).toFixed(0);
}
