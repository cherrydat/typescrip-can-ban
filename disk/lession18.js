"use strict";
var Persion1 = (function () {
    function Persion1(name) {
        this.name = name;
        console.log(this.name + 'constructor');
    }
    Persion1.talk = function () {
        console.log('this is static method is talk');
    };
    Persion1.prototype.run = function () {
        console.log('running');
    };
    return Persion1;
}());
var p = new Persion1('tedu');
Persion1.talk();
//# sourceMappingURL=lession18.js.map