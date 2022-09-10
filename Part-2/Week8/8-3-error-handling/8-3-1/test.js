class Bcit{
    department;

    constructor(department) {
        this.department = department;
    }

    set setName(department){
        this.department = department;
    }

    get sentence() {
        if(this.department == "finance") {
            return "The department " + this.department + " deals with money";
        } else if (this.department == "human resources"){
            return "This department " + this.department + " deals with people";
        } else if (this.department == "marketing"){
            return "This department " + this.department + " deals with advertisements";
        }
    }

}

var departmentOne = new Bcit("finance");
var departmentTwo = new Bcit("human resources");
var departmentThree = new Bcit("marketing");

console.log(departmentOne.sentence);
console.log(departmentTwo.sentence);
console.log(departmentThree.sentence);
