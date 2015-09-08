/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

//(°C × 9/5) + 32 = °F
//(°F − 32) x 5/9 = °C

var cels = 10;
var cels2 = (cels*(9/5))+32;
console.log(cels+"°C is "+cels2+"°F");

var far = 10;
var far2 = (far-32)*(5/9);
console.log(far+"°F"+far2+"°C");
