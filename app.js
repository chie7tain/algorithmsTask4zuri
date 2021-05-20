// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

// Note:

//     - Round up your answers to 4 decimal places (hint: use the toFixed method)
//     - C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
//     - if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
//         `${parameter} is not a valid number but a/an ${parameter's type}.`

// You can use the following cases as guides:

//     - convertFahrToCelsius(0) should return `-17.7778`
//     - convertFahrToCelsius("0") should return `-17.7778`
//     - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
//     - convertFahrToCelsius({temp: 0}) should return `{temp: 0} is not a valid number but a/an object.`

function convertFahrToCelsius(temperature) {
  // we first create an array using the function arguments object which contains the list of arguments passed into the function
  let args = Array.prototype.slice.call(arguments);
  // we check that the function is given a parameter and its not empty
  if (args.length == 0) {
    console.log(`Please Enter a valid number, no intno conversion`);
    return `Please Enter a valid number, no intno conversion`;
  }
  // we check that he parameter is not an empty string
  if (temperature === "") {
    console.log(`${JSON.stringify(temperature)} is not a valid number but a/an <empty string>`);
    return `${JSON.stringify(
      temperature
    )}is not a valid number but a/an <empty string>`;
  }
  // helper function for checking whether a value is a boolean

  // we check if the parameter is a boolean
  if (checkIfBoolean(temperature)) {
    console.log(checkIfBoolean(temperature));
    return checkIfBoolean(temperature);
  }
  // we check if the parameter is null the object or wrapped in string
  if (temperature === null || temperature == "null") {
    console.log(
      `${temperature} is a not a valid number but a/an ${typeof temperature}`
    );
    return `${temperature} is a not a valid number but a/an ${typeof temperature}`;
  }
  // then we check if the arguments passed is an array and if so we return a message to the user
  if (checkIfArray(temperature, args)) {
    console.log(checkIfArray(temperature, args));
    return checkIfArray(temperature, args);
  }

  // we check if the arguments passed is an object and if so we return a message to the user
  // now in order to this we use the Object.prototype.toString() method to check the if the temperature(argument) passed into the function is equal to [object Object] which returns true for objects

  // we then use the function to check the argument passed into the function is not an object

  if (checkForOject(temperature, args) ) {
    console.log(checkForOject(temperature, args));
    return checkForOject(temperature, args);
  }

  // checks for numbers wrapped in string "1,2,3,4" that is if the strings can be converted into numbers
  if (typeof temperature === "string" && temperature !== "") {
    let str = typeof temperature;
    // we check if the string can be converted to a number by using the modulus operator depending on the return value we return the appropriate error message
    let test = temperature % 2;

    if (!Number.isInteger(test) && typeof str === "string") {
      console.log(
        `${temperature} is not a valid number but a/an ${typeof temperature}`
      );
      return `${temperature} is not a valid number but a/an ${typeof temperature}`;
    } else {
      temperature = Number(temperature);
    }
    // this line checks if after converting the string and its not a number we check and return the correct error message
    if (Number.isNaN(temperature)) {
      console.log(`${temperature} is a not a valid Number but a/an NaN`);
      return `${temperature} is a not a valid Number but a/an NaN`;
      // but if the number is a number after converting the string then we go ahead to convert the temperature to celsius
    } else if (typeof temperature === "number" && temperature !== "") {
      temperature = ((temperature - 32) * 5) / 9;
      temperature = Number(temperature.toFixed(4));
      console.log(temperature);
      return temperature;
    }
  }
  // if the number is just a number we just do the temperature conversion and return the values
  if (typeof temperature === "number") {
    temperature = ((temperature - 32) * 5) / 9;
    temperature = Number(temperature.toFixed(4));
    console.log(temperature);
    return temperature;
  }

  return temperature;
}

let obj = convertFahrToCelsius("0");
//  obj = convertFahrToCelsius('')
// obj = convertFahrToCelsius("true")
// obj = convertFahrToCelsius(true)
// obj = convertFahrToCelsius([1,2,4])
//  obj = convertFahrToCelsius({ temp: 0 });
//  obj = convertFahrToCelsius({ temp: 0 },{value:7});
console.log(obj);

// ==========================
// =================
// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

// Note:

//     - for numbers that have multiple factors, use hyphens as separators
//     e.g 10 === "yu-oh", 30 === "yu-gi-oh"
//     - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed.

// Use the following cases as guides:

//     - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
//     - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
//     - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`

function checkYuGiOh(int) {
  var result = [];
  let err;
  let args = Array.prototype.slice.call(arguments);
  // we check that the function is given a parameter and its not empty
  if (args.length == 0) {
    console.log(`Please Enter a valid number, no val no conversion`);
    return `Please Enter a valid number, no val no conversion`;
  }
  // we check that he parameter is not an empty string
  if (int === "") {
    console.log(
      `${JSON.stringify(
        int
      )} is not a valid number but a/an <empty string>`
    );
    return `${JSON.stringify(
      int
    )} is not a valid number but a/an <empty string>`;
  }
if (Number.isNaN(int)) {
      console.log(`${int} is a not a valid Number but a/an NaN`);
      return `${int} is a not a valid Number but a/an NaN`;
      // but if the number is a number after converting the string then we go ahead to convert the val to celsius
    }
  // we check if the parameter is null the object or wrapped in string
  if (int === null || int == "null") {
    console.log(`${int} is a not a valid number but a/an ${typeof int}`);
    return `${int} is a not a valid number but a/an ${typeof int}`;
  }

  // we check if the parameter is a boolean
  if (checkIfBoolean(int)) {
    console.log(checkIfBoolean(int));
    return checkIfBoolean(int);
  }
  // this line checks the argument if it is a number or if it is a string that can be converted to a number
  if (checkStringToNumber(int)) {
    return checkStringToNumber(int);
  }

  // then we check if the arguments passed is an array and if so we return a message to the user
  if (checkIfArray(int)) {
    console.log(checkIfArray(int));
    return checkIfArray(int);
  }
    // if (Array.isArray(int)) {
    //   return ` ${JSON.stringify(int)} is not a valid number but a/an array.`;
    // }
  if (checkForOject(int, args)) {
    console.log(checkForOject(int, args));
    return checkForOject(int, args);
  }
  if(int == "0" || int == "1"){
    console.log(`${JSON.stringify(int)} is not enough for magic`);
    return `${JSON.stringify(int)} is not enough for magic`
  }
  // using a for loop we loop and push the numbers from 1 to the given integer into an empty array
  for (let i = 1; i <= int; i++) {
    result.push(i);
    // using the findIndex method of arrays we find the exact numbers that fit the conditions for replacement
    // i.e divisible by 2,3,5 all or not divisible by them

    // this first line checks if the values in the array fits the condition of divisible by 2,3,5 and so on down the code.

    var newRes1 = result.findIndex((val) => {
      if (val % 2 == 0 && val % 3 == 0 && val % 5 == 0) {
        result.splice(newRes1, 1, `yu-gi-oh`);
      }
    });
    var newRes2 = result.findIndex((val) => {
      if (val % 2 == 0 && val % 3 == 0) {
        result.splice(newRes2, 1, "yu-gi");
      }
    });
    var newRes3 = result.findIndex((val) => {
      if (val % 2 == 0 && val % 5 == 0) {
        result.splice(newRes3, 1, "yu-oh");
      }
    });
    var newRes4 = result.findIndex((val) => {
      if (val % 3 == 0 && val % 5 == 0) {
        result.splice(newRes4, 1, "gi-oh");
      }
    });
    var newRes5 = result.findIndex((val) => {
      if (val % 2 == 0) {
        result.splice(newRes5, 1, "yu");
      }
    });
    var newRes6 = result.findIndex((val) => {
      if (val % 3 == 0) {
        result.splice(newRes6, 1, "gi");
      }
    });
    var newRes7 = result.findIndex((val) => {
      if (val % 5 == 0) {
        result.splice(newRes7, 1, "0h");
      }
    });
  }
  console.log(result);
  return result;
}

let res = checkYuGiOh("2");
console.log(res);

// the following are helper functions to check the various errors
function checkStringToNumber(val) {
  if (typeof val === "string" && val !== "") {
    let str = typeof val;

    // we check if the string can be converted to a number by using the modulus operator depending on the return value we return the appropriate error message
    let test = val % 2;

    if (!Number.isInteger(test)) {
      console.log(
        `${val} is not a valid number but a/an ${typeof val}`
      );
      return `${JSON.stringify(val)} is not a valid number but a/an ${typeof val}`;
    } else {
      val = Number(val);
    }
    // this line checks if after converting the string and its not a number we check and return the correct error message
    if (Number.isNaN(val)) {
      console.log(`${JSON.stringify(val)} is a not a valid Number but a/an NaN`);
      return `${val} is a not a valid Number but a/an NaN`;
      // but if the number is a number after converting the string then we go ahead to convert the val to celsius
    }
  }else if (typeof val === "number") {
    // val = ((val - 32) * 5) / 9;
    // val = Number(val.toFixed(4));
    // console.log(val);
    return "is Number";
  }
}
// console.log(checkStringToNumber("0"))

function checkForOject(val, args) {
  if (
    isObject(val) == "object" &&
    typeof val != "number" &&
    typeof val != "string"
  ) {
    let res = "";
    if (args.length == 1) {
      res = `${JSON.stringify(
        args[0]
      )} is not a valid number but a/an ${typeof val}`;
      return res;
    }
    // we create a for loop to run through the arguments passed into the function just in case the objects are more than one
    for (let i = 0; i < args.length; i++) {
      let key = Object.keys(args[i]);
      let values = Object.values(args[i]);
      res += `{${key} : ${values}} is not a valid number but a/an object.`;
    }
    return res;
  }
  // return "number";
}

function isObject(obj) {
  if (
    (Object.prototype.toString(obj) === "[object Object]" && obj != null) ||
    obj != "null"
  ) {
    return `object`;
  }
}

function checkIfArray(val) {
  if (Array.isArray(val)) {
    return ` ${JSON.stringify(val)} is not a valid number but a/an array.`;
  }
}
function checkIfBoolean(val) {
  if (isBoolean(val) === "boolean" && val != "0") {
    return `${JSON.stringify(
      val
    )} is not a valid number but a/an ${typeof val}`;
  }
  return false;
}
function isBoolean(val) {
  if (val == true || val == false) {
    return `boolean`;
  }
}