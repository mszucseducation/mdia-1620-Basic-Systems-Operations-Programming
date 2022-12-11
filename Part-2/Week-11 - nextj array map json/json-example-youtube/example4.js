var jsonItems = [
    {
        "id"        : 1,
        "message"   : "Hi there",
        "email"     : "ben@test.com"
    },
    {
        "id"        : 2,
        "message"   : "Goodbye",
        "email"     : "ken@test.com"
    }
]

for(var i = 0; i < jsonItems.length; i++) {
    var objectInfo = jsonItems[i];
    console.log(objectInfo.id);
    console.log(objectInfo.message);
}
