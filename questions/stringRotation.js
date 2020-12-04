
const validateString = (str) => {
  return ((typeof str == "string" || typeof str == "String") && str.length) ? true : false
}

const validateShiftNumber = (n) => {
  return (typeof n == "number" && n >= 0) ? true : false;
}

const validateDirection = (direction) => {
  return ((direction == "left" || direction == "right") && (typeof direction == "string" || typeof direction == "String") && direction.length) ? true : false;
}

const rotateString = (str, n, direction) => {
  if (validateString(str) && validateShiftNumber(n)) {
    if (validateDirection(direction)) {
      let stringArr = str.split("");
      let letter;
      for (let i = 0; i < n; i++) {
        if (direction == "left") {
          letter = stringArr.shift();
          stringArr.push(letter);
        } else {
          letter = stringArr.pop();
          stringArr.unshift(letter);
        }
      }
      return stringArr.join("");
    } else {
      throw new Error("Invalid Direction");
    }
  } else {
    throw new Error("Invalid Input");
  }
};

module.exports = rotateString;
