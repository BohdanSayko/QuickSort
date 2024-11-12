function quickSort(array) {
    if (array.length <= 1) { return array; }

    let pivot = array[Math.floor(array.length / 2)];

    let lowArray = array.filter((num) => num < pivot);
    let highArray = array.filter((num) => num > pivot);
    let middleArray = array.filter((num) => num === pivot);

    return [...quickSort(lowArray), ...middleArray, ...quickSort(highArray)];
}

console.log(quickSort([34, 35, 23, 25, 642, 111, 12, 4532, 11, 35, 5264, 1]));
