export const displayTemp = (x: number, isFahrenheit: boolean) => isFahrenheit ? Math.round(x * 9 / 5 + 41) : Math.round(x);
