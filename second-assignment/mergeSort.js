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
    let iL = 0;
    let iR = 0;

    while (iL < leftArray.length && iR < rightArray.length) {
        if (leftArray[iL] < rightArray[iR]) {
            sortedArray.push(leftArray[iL]);
            iL++;
        }
        else {
            sortedArray.push(rightArray[iR]);
            iR++;
        }
    }
    while (iL < leftArray.length) {
        sortedArray.push(leftArray[iL]);
        iL++;
    }
    while (iR < rightArray.length) {
        sortedArray.push(rightArray[iR]);
        iR++;
    }

    return sortedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))