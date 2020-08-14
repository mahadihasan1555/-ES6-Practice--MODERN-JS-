//Inheritance, extends class, super, class method

class Parent {
    constructor(){
        this.fatherName = "sattar"
    }
}
class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
        

    }
    getFullName(){
        return this.name + " " + this.fatherName
    }
}

const baby = new Child("mahadi");
const baby2 = new Child("Hasan");
console.log(baby.getFullName());
console.log(baby2.getFullName());
