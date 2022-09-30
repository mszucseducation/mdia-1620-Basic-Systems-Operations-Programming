function formFunction(){
    var grabbedFirstName = document.getElementById('firstName').value;
    var firstName = nameEdited(grabbedFirstName);

    var grabbedLastName = document.getElementById('lastName').value;
    var lastName = nameEdited(grabbedLastName);

    document.getElementById('message').innerHTML = `Hi my name is: ${firstName} ${lastName}`;
}

function nameEdited(name) {
    return name.substring(0,1).toUpperCase() + name.substring(1);
}
