//Spread operator, concatenate multiple arrays, array max

const ages = [23, 12, 42, 21, 53, 23];
const ages2 = [41, 42, 52, 25, 63];
const ages3 = [44, 42, 52, 25, 63];

const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);

//
const business = 450;
const minister = 134;
const sochib = 311;
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum);

const money = [345, 534, 244];
const maximum = Math.max(...money);
console.log(maximum);
