interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor (private width: number,private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width); width는 private 이므로 에러발생

// * 일반 객체를 interface 로 타입 설정
// 
// 

interface Person {
  name: string;
  age?: number; // 설정을 해도 되고 안해도 된다.
}

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }
// -> Person과 commonality가 있으므로 Person을 상속 받아 사용 가능하다.

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];
