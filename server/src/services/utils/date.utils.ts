export function getDatesRange(d1: Date, d2: Date): Date[] {
    const dates: Date[] = [];
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    while (date1 <= date2) {
        dates.push(new Date(date1));
        date1.setDate(date1.getDate() + 1);
    }

    return dates;
}

export const getDaysDiff = (d1: Date, d2: Date): number => {
    const diff = Math.abs(d1.getTime() - d2.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
}

export const isDateInRange = (date: Date, d1: Date, d2: Date): boolean => {
    return date >= d1 && date <= d2;
}

export const areTwoDatesTheSameDay = (d1: Date, d2: Date): boolean => {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}