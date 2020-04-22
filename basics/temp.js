// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
// Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

// constant temp
const kelvin = 293;

// in celsius
const celsius = kelvin - 273;


// temp in fahrenheit
let fahrenheit = (celsius*9/5 + 32);
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * 33 /100;
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);