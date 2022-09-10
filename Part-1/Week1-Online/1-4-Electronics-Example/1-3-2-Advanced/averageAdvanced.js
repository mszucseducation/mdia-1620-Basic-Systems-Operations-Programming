// use node averageAdvanced.js to run the file

var electronics = {laptop: 3, desktop: 5};

var electronicsAverage = (electronics.laptop + electronics.desktop) / Object.keys(electronics).length;

console.log(electronicsAverage);