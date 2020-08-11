export function takeSample<G>(arr: G[], n: number, max: number = Infinity): G[] {
    return arr.slice(0,n*max).filter((t, i) => i%n === 0);
}
