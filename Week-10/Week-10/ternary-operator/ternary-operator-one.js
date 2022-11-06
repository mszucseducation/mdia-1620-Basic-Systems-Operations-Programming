function canDrive(age) {
    return (age >= 16 ? message="You can drive" : message="You cannot drive");
}

message = "";

console.log(canDrive(16));