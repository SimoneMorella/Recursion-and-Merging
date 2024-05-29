// loop Fibonacci

function fibsLoop(n) {
    let array = [0, 1];
    if (n <= 0) return "Choose a valid number";
    if (n === 1) return [0];
    if (n === 2) return array;
    for (let i = 2; i < n; i++) {
        array.push(array.at(-1) + array.at(-2));
    }
    return array;
}

console.log(fibsLoop(10));

// recursive Fibonacci

function fibsRec(n) {
    if (n <= 0) return "Choose a valid number";
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    return [...fibsRec(n - 1), fibsRec(n - 1).at(-1) + fibsRec(n - 1).at(-2)];
}

console.log(fibsRec(10))