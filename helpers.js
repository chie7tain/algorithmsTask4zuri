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

    }
  }else if (typeof val === "number") {
    return "is Number";
  }
}


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

export {checkForOject,checkIfBoolean,checkIfArray,checkStringToNumber,isBoolean,isObject};