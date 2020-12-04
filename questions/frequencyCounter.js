/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

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
