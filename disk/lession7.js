"use strict";
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = 'blue';
console.log(color);
var fullname = 'tedu';
var sentens = "ehheh\n    hello adccaw " + fullname + " . age " + (decimal + 1) + "\n'";
console.log(sentens);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
//# sourceMappingURL=lession7.js.map