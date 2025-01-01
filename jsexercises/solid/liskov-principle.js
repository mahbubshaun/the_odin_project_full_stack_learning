class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
  area() {
    return this.width * this.height;
  }
}

function increaseRectangeleWidth(ractangle) {
  ractangle.setWidth(ractangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5);

increaseRectangeleWidth(rectangle1);
increaseRectangeleWidth(rectangle2);

console.log(rectangle1.area());
console.log(rectangle2.area());
