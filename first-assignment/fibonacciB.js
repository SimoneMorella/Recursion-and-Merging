// better recursive Fibonacci

function betterFibonacci(n, array = [0, 1]) {
    if (n <= 0) return "Insert a valid number";
    if (array.length >= n) {
        return array.slice(0, n);
    }
    let newEle = array.at(-1) + array.at(-2);
    array.push(newEle);
    return betterFibonacci(n, array);
}

console.log(betterFibonacci(77));