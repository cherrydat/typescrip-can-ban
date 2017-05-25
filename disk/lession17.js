"use strict";
var Persion = (function () {
    function Persion() {
    }
    Persion.prototype.run = function () {
        console.log("persion is runing");
    };
    return Persion;
}());
var p1 = new Persion();
console.log(typeof (p1));
console.log(typeof (Persion));
p1.run();
Persion.prototype.run();
//# sourceMappingURL=lession17.js.map