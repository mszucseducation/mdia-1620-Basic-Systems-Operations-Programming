/**
 * 
 * We want to calculate the average number of pies that the groups have. 
 * The first variable will be groupOne which will have 2 pies. 
 * The second variable will be groupTwo which will have 5 pies. 
 * The third variable will be groupThree which will have 9 pies. 
 * Calculate the average between the three groups with the variable averagePies.
 * 
 */

var groupOne = 2;
var groupTwo = 5;
var groupThree = 9;

var averagePies = (groupOne + groupTwo + groupThree) / 3

console.log(averagePies);


// To remove magic nubers

var DIVIDED_NUMBER_BY = 3;

averagePies = (groupOne + groupTwo + groupThree) / DIVIDED_NUMBER_BY

console.log(averagePies);


// Nicer way to write this but more advanced

const groups = {
    groupOne: 2,
    groupTwo: 5,
    groupThree: 9
}

averagePies = (groups.groupOne + groups.groupTwo + groups.groupThree) / Object.keys(groups).length;

console.log(averagePies);


// -----


/**
 * 
 * We want to calculate the average number of alexas we have per house.
 * houseOneAlexa equals 2
 * houseTwoAlexa equals 5
 * houseThreeAlexa equals 3
 * houseFourAlexa equals 7
 * houseFiveAlexa equals 4
 * Calculate the average number of alexas we have using the variable averageAlexasPerHouse.
 *
 */

var houseOneAlexa = 2;
var houseTwoAlexa = 5;
var houseThreeAlexa = 2;
var houseFourAlexa = 7;
var houseFiveAlexa = 4;

var averageAlexasPerHouse = (houseOneAlexa + houseTwoAlexa + houseThreeAlexa + houseFourAlexa + houseFiveAlexa) / 5;

console.log(averageAlexasPerHouse);






