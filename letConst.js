//ES6 provides a new way of declaring a constant by using the const keyword. The const keyword creates a read-only reference to a value

const name = "Mahadi";
console.log(name);

const numbers = [12, 23];
numbers[1] = 88;
//push
numbers.push(12);
//pop
numbers.pop(12);
//cant do that
// numbers = ["mahadi", "hadan", "jahid", "shaid"]
console.log(numbers);

//let
// let patientName = "rahim";
// patientName = "karim";
// patientName = "fahim";
// console.log(patientName);


//its work
// let sum = 0;
// for (var i = 0; i < 10; i++){
//     sum = sum + i;
// }
// console.log(i);


//its not work
// let sum = 0;
// for (let i = 0; i < 10; i++){
//     sum = sum + i;
// }
// console.log(i);


//scoping issue

var age = 26;
if(age > 18){
    var canVote = "I can vote";
    console.log(canVote);
}

//var
function prinbtNumber() {
    for (var i = 0; i <= 10; i++){
        console.log(i);
    }
    console.log(i);
}

prinbtNumber();

//let
function prinbtNumber() {
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
    //not needed
    console.log(i);
}

prinbtNumber();