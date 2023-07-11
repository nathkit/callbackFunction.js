const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updateNumber = [];

function manipulateNumber(array, callback) {
    updateNumber = [];
    for (let i = 0; i < array.length; i++) {
        updateNumber.push(callback(array[i]));
    }
    return updateNumber;
}

const addNumber10 = function (arr) {
    return arr + 10;
}

const double = (x) => {
    return x * 2;
}

console.log(manipulateNumber(numbers, addNumber10));
console.log(manipulateNumber(numbers, double));
