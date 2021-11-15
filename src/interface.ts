// 클래스를 만들 때, 특정 조건을 준수해야 함을 명시하고 싶을 때 interface를 사용하여 클래스가 가지고 있어야 할 요구사항을 설정한다.
// 그리고 클래스를 선언할 때 implements 키워드를 사용하여 해당 클래스가 특정 interface의 요구사항을 구현한다는 것을 명시한다.
interface Shape {
    getArea(): number;
}
// Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 number 여야 한다.

class Circle implements Shape {
    // constructor의 파라미터에 public 또는 private를 사용하여, 직접 하나하나 설정해주는 작업을 생략할 수 있다.
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
    console.log(shape.getArea());
});

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width); => width는 private 이므로 에러발생

// * 일반 객체를 interface 로 타입 설정
//
//
interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 된다.
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
    name: "김사람",
    age: 20,
};

const expert: Developer = {
    name: "김개발",
    skills: ["javascript", "react"],
};

const people: Person[] = [person, expert];
