/**
 *  Create a function called find grade and have it take the parameters: name and mark.
    Inside the function then check to see: 

    if the marks are between and equal to 85 and 100. If so then console log out this sentence:
    _name_ you have received A grade.
    If the marks are greater and equal to 70 and less than 85. Then console log out:
    _name_ you have received B grade.
    If the marks are greater than or equal to 50 and less than 70. Then console log out:
    _name_ you have received C grade.
    If the marks are greater then ar equal to 0 and less then 50. Then console logout:
    _name_ you have failed.
    Else console log out:
    Invalid mark of _mark_.

    Call the function find grade with the values and use single line comments to show what i would display:
    Sarah, 91
    George, 85
    Sam, 73
    Emily, 53
    Tom, 20
    Wilson, 120
 */

    function job(position, hoursWorked) {

        if(position == "Marketing Manager"){
          console.log(`I am a ${position} and work an average amount of hours. I worked ${hoursWorked} hours this week.`)
        }
        else if(position == "Engineer"){
          console.log(`I am a ${position} and I work too much. I worked ${hoursWorked} hours this week.`)
        }
        else{
          console.log(`I am a student.`)
        }
      }
      
      var sentence = 

      job("Marketing Manager", 40) 
      job("Engineer", 70) 
    