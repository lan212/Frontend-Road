// null 和 undefind的字面量可以赋值给
// let num: number = null;
// let str: string = undefined;

let num: unknown;
console.log((num as number).toFixed());
