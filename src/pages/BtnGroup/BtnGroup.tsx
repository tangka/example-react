import * as React from 'react';

// d.ts 全局申明

// let aaa = ['aaa', 5];
// // 打印整个元祖不会报错
// console.log(aaa); // ['aaa',5,6];

// type Animal = {
//     name: string,
//     category: string,
//     age: number,
//     eat: () => number
// }

// interface Person {
//     name: string,
//     category: string,
//     age: number,
//     eat: () => number
// }

// // 变为可选链
// const anla: Partial<Person> = {
//     name: 'anla'
// }

// const sa:symbol = Symbol('a')
// const sb:symbol = Symbol('b')
// // 生成对象
// const bob: Record<1223|'x', string> = {
//     1223 : '1',
//     'x': 'x'
// }
// //pick 特定的对象
// const make:Pick<Animal, 'name'|'age'>= {
//     name: 'x',
//     age: 1,
// }
// // Readonly 只读
// const read: Partial<Readonly<Animal>> = {
//     age: 1,
// }
// // read.age = 2;
// // Exclude 不包含
// type T2 = Exclude<string | number | (() => void), Function>; // string | number
// // Required 必填
// const red: Required<Partial<Readonly<Pick<Animal, 'name'|'age'>>>> = {
//     age: 1,
//     name: 'x',
// }

// let dylun = {
   
// };
// dylun[sb] = 'a';

// console.log(bob,dylun,make);
// /* 



// */

// const a: EdgeApi.Department = {
//     description: '',
//     gmt_create: '',
//     gmt_modify: '',
//     id: 1,
//     name: '',
// }

// const b: Ainter = 0;

// console.log(a);

const BtnGroup = (quotation: any) => {
    return <a>aa</a>
}
export default BtnGroup