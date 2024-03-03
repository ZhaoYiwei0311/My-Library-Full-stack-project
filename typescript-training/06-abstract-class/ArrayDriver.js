"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(10, 20, 30, 40);
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var shape = theShapes_1[_i];
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
