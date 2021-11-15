function sum(x: number, y: number): number {
    return x + y;
}

// 함수의 반환 타입이 number 이므로 number 이외의 값을 반환하면 오류가 뜬다.
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total: number = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
    console.log("I am just saying hello world");
}
