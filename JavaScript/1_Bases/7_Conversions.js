// CONVERSIONS IMPLICITES
let a = "3";
let b = 5;

a + b;              // => "35"
a + true;           // => "3true"
b + true;           // => 6
b + false;          // => 5

23 / 0;             // => Infinity
-14 / 0;            // => -Infinity
0 / 0;              // => NaN


// CONVERSIONS EXPLICITES

// => a : number
parseInt(a);         
Number(a)

// => b : string 
b.toString();          