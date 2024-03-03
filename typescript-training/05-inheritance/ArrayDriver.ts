import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectanle } from "./Rectangle";

let myShape = new Shape(10, 15);

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectanle(10, 20, 30, 40);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes) {
    console.log(shape.getInfo());
}
