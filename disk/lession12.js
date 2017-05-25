"use strict";
var displayColorsSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = 'hello';
var colors = ['red', 'green', 'blue'];
displayColorsSpread.apply(void 0, [message].concat(colors));
//# sourceMappingURL=lession12.js.map