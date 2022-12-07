var student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    gpa: 4.0
};

var sentence;
sentence = student.firstName + " " + student.lastName + " is " + student.age + " years old and has a " + student.gpa.toFixed(1) + " GPA.";

console.log(sentence);
console.dir(sentence);