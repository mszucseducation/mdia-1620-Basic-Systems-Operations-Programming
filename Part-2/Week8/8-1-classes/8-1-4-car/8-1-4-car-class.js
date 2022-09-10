// Parent Class
class Car{
    constructor(name) {
        this.setName(name);
    }

    setName(name){
        this.name = name[0].toUpperCase() + name.slice(1);
    }

    startEngine(){
        console.log('Engine started for ' + this.name);
    }

    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }

    topSpeed() {
        console.log('Top speed for ' + this.name + ' is 20km/hour');
    }
}

// extends is what we use for inheritance
// Child Class
class Toyota extends Car{
    topSpeed(speed){
        if(speed === undefined) {
            super.topSpeed();
        } else {
            console.log('Top speed for ' + this.name + ' is ' + speed);
        }
        
    }
}

let myCar = new Toyota("hybrid");

myCar.startEngine();
myCar.topSpeed(200);
myCar.topSpeed();
myCar.stopEngine();
