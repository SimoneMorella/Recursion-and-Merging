// more elegant merge

function mergeSort(array) {
    if (array.length === 0) return "It is an empty array!";
    if (array.length === 1) return array;

    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle, array.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}


function merge(leftArray, rightArray) {
    let sortedArray = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
        let firstArray = (leftArray[0] < rightArray[0]) ? leftArray : rightArray;
        let firstEle = firstArray.shift();
        sortedArray.push(firstEle);
    }

    return sortedArray.concat(leftArray, rightArray);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
