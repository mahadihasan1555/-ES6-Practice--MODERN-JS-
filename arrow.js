//Arrow function, multiple parameter, function body

//ex-1 (simple function)
function doubleIt(num){
    return num * 2;

}
const result = doubleIt(2);
console.log(result);

//ex-2 (alternative)
const tripleIt = function myFun(num){
    return num * 3;
}
const result1 = tripleIt(5);
console.log(result1);



// ex-3 short version 

//arrow function-(single para meter)
const doubleIt = num => num * 2;
const result3 = doubleIt(30);
console.log(result3);


//arrow function- (more than one para meter)
const add = (x, y) => x + y;
const result = add(23, 42);
console.log(result);

//arrow function- (no para meter)
const give = () => 5;
const result2 = give();
console.log(result2);

//big function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result22 = sum * diff;
    return result22;

}
const result22 = add(30, 32);
const result23 = give();
const result24 = doMath ( 8, 9);
console.log(result24);