class Pet{
    pet;

    constructor(pet) {
        this.pet = pet;
    }

    set setName(pet){
        this.pet = pet;
    }

    get sentence() {
        if(this.pet == "bird") {
            return "This pet " + this.pet + " cherps";
        } else if (this.pet == "dog"){
            return "This pet " + this.pet + " barks";
        }
    }
}

var petOne = new Pet("dog");

console.log(petOne.sentence);