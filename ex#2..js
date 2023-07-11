const ages = [15, 20, 60, 40, 34, 73, 24, 25, 26];

const filterAges = (array, callback) => {
    let filtedArray = []
    for (let i = 0; i < array.length; i++){
       if(callback(array[i])) {
        filtedArray.push(array[i]);
       }
    }
    return filtedArray;
}

const checkAgesOver18 = (ages) => {
    return ages >= 18;
}

const checkAgesBetween30To60 = function (ages) {
    return ages >= 30 && ages <= 60;
}

let agesOver18 = [];
let agesBetween30To60 = [];

agesOver18 = filterAges(ages, checkAgesOver18);
agesBetween30To60 = filterAges(ages, checkAgesBetween30To60);

console.log(agesOver18);
console.log(agesBetween30To60);


