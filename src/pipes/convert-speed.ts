// convert m/s to km/h
export const KMPerHour: (x: number) => number = (x: number) => Math.round(x * 3.6); // * 60  60 / 1000
