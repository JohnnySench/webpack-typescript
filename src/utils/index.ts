const toReverse = <T>(array: T[]): T[]  => {
    return [...array].reverse();
}
const max = (array: number[]): number => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
export {toReverse, max};