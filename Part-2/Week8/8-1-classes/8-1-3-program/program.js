class Program{
    pet;

    constructor(program) {
        this.program = program;
    }

    set setProgram(program){
        this.program = program;
    }

    get computerProgram() {
        return "The computer program that was selected was " + this.program;
    }

}

var arr = ["Game Development", "Database"];

for(var i = 0; i < 2; i++) {
    var programSelected = new Program(arr[i]);
    console.log(programSelected.computerProgram);
}
