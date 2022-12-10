var person = {
    firstName   : "Ken",
    lastName    : "Fred",
    id          : 12345,
    fullName    : function() {
                return this.firstName + " " + this.lastName;
    },
    work        : function() {
                return "My name is " + this.firstName + " and my id number is " + this.id;
    }
}

console.log(person.firstName);
console.log(person.fullName());
console.log(person.work());

