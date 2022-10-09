var salary = salaryCalculation(35, 8, 70, 2);
var calculated = 0;

function salaryCalculation(regularHourlyWage, regularHoursWorked, OverTimeHourlyWage, OverTimeHoursWorked) {
    calculated = (regularHourlyWage* regularHoursWorked) + (OverTimeHourlyWage*OverTimeHoursWorked);
    if(calculated > 1000) {
        return "You got paid a lot this time!";
    } else if(calculated > 500) {
        return "You got paid average this time.";
    } else {
        return "You did not get paid enough.";
    }
}

console.log(salary);
//