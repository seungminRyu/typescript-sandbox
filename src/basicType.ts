let count = 0;
count += 1;
// count = '갑자기 문자열은 안됑 ㅎ';

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// messages.push(1); // 숫자 push 하면 안된다.

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있고
let nullableNumber: number | null = null; // number 일 수도 있고 null일 수 도 있고

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 한개다.
color = 'yellow';
// color = 'green'; // 에러 발생
