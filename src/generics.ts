// generic은 타입스크립트에서 function, class, interace, type을 사용하게 될 때 여러 종류의
// 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법이다.


// * function 에서 generic 사용
// 
// 

// 객체 A와 객체 B를 합쳐주는 함수를 만들때 A와 B가 어떤 타입이 올지 모르기 때문에 any 타입을 쓴다.
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged: any = merge({ foo: 1 }, { bar: 2 });

// 하지만 이런식으로 사용할 경우 타입 추론이 깨진 것과 다름 없다.
// 따라서 generic은 다음과 같이 사용해야 한다.
function newMerge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

//const newMerged = newMerge<object, string >({ foo: 1 }, { bar: 2 });
// -> 에러 발생한다, 지정한 타입과 { bar: 2 }의 타입이 다르기 때문

const newnewMerged = newMerge<object, object >({ foo: 1 }, { bar: 2 });
// -> 정상적으로 할당 된다.

// <A, B> 처럼 꺽쇠 안에 타입의 이름을 넣어서 사용하며, 이렇게 설정을 해주면
// 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 되면서도, 사용 할 때 타입이 깨지지 않게 된다.


// * interface 에서 generic 사용
// 
// 

interface Items<T> {
  list: T[]
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
}


// * class 에서 generic 사용
// 
// 

class Queue<T> {
  list: T[] = [];
  
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
