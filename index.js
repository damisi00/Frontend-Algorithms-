//1. Function to convertFahrToCelsius with a single parameter
function convertFahrToCelsius (F) {
  var type = Array.isArray(F)?
      `array`:
  typeof F
  if(isNaN(F))
  return `${JSON.stringify(F)} is not a valid number but a/an ${type}.`
  f = parseFloat(F)
  return `${((F-32) * (5/9)).toFixed(4)}`
}
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp:0}))



//2. Function that takes a number, n as an argument
const checkYuGiOh = (n) => {
  let number = n-0;
  if (isNaN(number) == false && number != null) {
    //aray of numbers from 1 to n
    let items = [];
    for (let i = 1; i < number+1; i++) {
     items.push(i); 
    }// replacing multiples of 2, 3 and 5 with "yu", "gi" and "oh"
    items.forEach((parameter) => {
       if (parameter%2 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "yu";
      } 
    } else if (parameter%3 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "gi";
      }
    } else if (parameter%5 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "oh";
      }
    } else if (parameter%6 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "yu-gi";
      }
    } else if (parameter%10 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "yu-oh";
      }
    } else if (parameter%15 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "gi-oh";
      }
    } else if (parameter%30 == 0) {
        let index = items.indexOf(parameter)
        if (index !== -1) {
        items[index] = "yu-gi-oh";
      }
    } 
  }) //returning the resulting array
    return items;
  } else {
    return `invalid parameter: ${JSON.stringify (n)}`;
  }
}
console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("Fizzbuzz is meh"))




