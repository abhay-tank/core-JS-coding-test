/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */

const validateRGB = (rgbValues) => {
  return rgbValues.every((color) => color <= 255 && color >= 0 && typeof color == "number") && rgbValues.length == 3;
}

const rgbToHexConversion = (...rgbValues) => {
  if (validateRGB(rgbValues)) {
    let hexCode = "#";
    let rgbHexMap = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
    let firstDigit;
    let secondDigit;
    rgbValues.forEach((color) => {
      firstDigit = color / 16;
      secondDigit = (firstDigit % 1) * 16;
      hexCode += rgbHexMap[parseInt(firstDigit)] + rgbHexMap[secondDigit];
    });
    return hexCode.toLowerCase();
  } else {
    throw new Error("Invalid Input");
  }
};

module.exports = rgbToHexConversion;
