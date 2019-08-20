const generateActivityCode = length => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";

  for (let i = 0; i < length / 2; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  for (let i = 0; i < length / 2; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
console.log("The result", result)
  return result;
};


module.exports = {
    generateActivityCode: generateActivityCode
}