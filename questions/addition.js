const addition = (...numbers) => {
  if (numbers.length) {
    return numbers.reduce((sum, currentNumber) => {
      if (typeof currentNumber == "number" && isFinite(currentNumber)) {
        return sum + currentNumber;
      } else {
        throw new Error("Invalid Input");
      }
    });
  } else {
    throw new Error("Invalid Input");
  }
};

module.exports = addition;
