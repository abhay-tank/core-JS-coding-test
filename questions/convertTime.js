const convertTime = (seconds) => {
  if (typeof seconds == "number") {
    let hr = 0;
    let min = 0;
    let sec = 0;
    while (seconds > 0) {
      seconds--;
      sec++;
      if (sec > 59) {
        min++;
        sec = 0;
      }
      if (min > 59) {
        hr++;
        min = 0;
      }
    }
    return { hours: hr, minutes: min, seconds: sec };
  } else {
    throw new Error("Invalid Input")
  }
};

module.exports = convertTime;
