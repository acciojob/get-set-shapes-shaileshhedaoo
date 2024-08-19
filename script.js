// Define the Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate the area
  getArea() {
    return this._width * this._height;
  }
}

// Define the Square class that extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the parent class constructor with width and height set to side
    super(side, side);
  }

  // Method to calculate the perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
