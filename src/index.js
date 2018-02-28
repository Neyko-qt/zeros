module.exports = function getZerosCount(number) {

  var zerosCount = 0;
  var divider = 5;

  while (number >= 1 && number <= 10e8) {
    number = Math.floor(number / divider);
    zerosCount += number;
  }

    return zerosCount; 
}