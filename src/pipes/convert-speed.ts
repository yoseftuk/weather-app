// convert m/s to km/h
export const KMPerHour: (x: number) => number = (x: number) => Math.round(x * 60 * 60 / 1000);
