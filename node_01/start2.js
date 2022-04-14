/*
변수의 선언 키워드 : var, const, let
var : java에서 static 변수 선언하기 (가급적사용하지않도록)
const : 불변 변수 java에서 final 변수 선언하기(블럭벗어나면소멸)
let :  일반적인 변수, JS 에서는 변수의 type을 지정하지 않는다
= 변수에 대한 문제가 발생할 수 있다
= 동적 type 변수(자바 정적 type 변수)
*/
var num = 10;
num = "대한민국";

let num1 = 10;
num1 = "우리나라";

var num = "Korea";
//let num1 = "Republic of Korea";

console.log(num1);

intNum = 100;
console.log(intNum);
for (let i = 0; i < 10; i++) {}
// let 키워드로 선언된 변수는 선언{}을 벗어나면 소멸된다
// console.log(i);

// var 키워드로 선언된 변수는 public static 이면서
// 성질이 매우 사납다 가급적 사용을 피하고 사용할때는 용도에 맞게 사용하라
for (var j = 0; j < 10; j++) {}
console.log(j);

// 변수값을 이후에 변경해야하는 경우 const를 사용해서는 안된다
//for (const i = 0; i < 10; i++) {}