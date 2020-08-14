function add(num1, num2){
    return num1 + num2;
}

const total = add(15, 13);
console.log(total);

// ex-2 (backup value)
function add(num1, num2){
    num2 = num2 || 20;
    return num1 + num2;
}

const total = add(15);
console.log(total);

//es6 backup value
function add(num1, num2 = 20){
   
    return num1 + num2;
}

const total = add(15, 12);
console.log(total);