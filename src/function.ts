function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total: number = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
  console.log('I am just saying hello world');
}