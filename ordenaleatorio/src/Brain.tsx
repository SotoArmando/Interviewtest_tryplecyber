export default function Randomnnumbers(n: number): number[] {
    let result: number[] = [];
 
    while (result.length < n) {
        result.push(Math.round(Math.random() * n))
    }
    return result;
}