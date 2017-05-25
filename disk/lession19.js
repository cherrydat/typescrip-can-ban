"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persion2 = (function () {
    function Persion2(name) {
        console.log(name + ' persion contructor');
    }
    Persion2.prototype.getID = function () {
        return 10;
    };
    return Persion2;
}());
var Employee2 = (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + 'Employee contructor');
        return _this;
    }
    return Employee2;
}(Persion2));
var emp3 = new Employee2('abc');
//# sourceMappingURL=lession19.js.map