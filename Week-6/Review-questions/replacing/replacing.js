var day = "sunny";
day = "rainy";
day = "snowy";

var sentence = `The day today was ${day}.`;

console.log(sentence.replace(/snowy/i, "windy"));