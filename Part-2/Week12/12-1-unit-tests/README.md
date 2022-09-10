Install the package.json with the default values
npm init -y 

We need to install jest for testing
npm i --save-dev jest

Go into the package.json and replace the values after "test": Replace this
replace it with just "jest"

"test": "jest --coverage"

Then you can run 
npm test

