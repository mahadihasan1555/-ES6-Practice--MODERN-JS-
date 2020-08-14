//Class, constructor, create object from class

class student{
    constructor(sId, sName){
        this.id = 1;
        this.name = "mahadi";
        this.school = "Hasan Ali Govt High school";
    }
}

const student1 = new student(12, "sahid");
const student2 = new student(23, "hasan");
console.log(student1.name, student2.name);