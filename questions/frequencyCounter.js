const frequencyCounter = (str) => {
   if ((typeof str == "string" || typeof str == "String") && str.length) {
      let string = str.toLowerCase();
      let vowelsResult = { a: 0, e: 0, i: 0, o: 0, u: 0 };
      let letter;
      for (let i = 0; i < string.length; i++) {
         letter = string[i];
         if ((Object.keys(vowelsResult)).includes(letter)) {
            vowelsResult[letter] = vowelsResult[letter] + 1;
         }
      }
      return vowelsResult;
   } else {
      throw new Error("Invalid Input");
   }
};

module.exports = frequencyCounter;
