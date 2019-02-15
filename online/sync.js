const fs = require('fs');

console.log('start');
let data = fs.readFileSync('./readme.txt');
console.log('1번 : ', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번 : ', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번 : ', data.toString());
console.log("끝");

// 처음 실행했을때는 2-1-3의 순서대로 시작이 됬다. 두번째는 1-2-3 결국은 규칙이 없다

/*
fs메서드들은 뒤에 Sync를 붙이면 동기식으로 작동을 한다.
fs.writeFile((err,data) => {});
const data =f s.wrieFileSync();

readFile()이 비동기 메서드이다.
fs.readFile에서는 비동기로 실행이 되기때문에 랜덤으로 실행이 된다.
동기방식으로 바꿔야한다.

fs.readFileSync메서드의 경우 동기 메서드이기때문에 순서대로 실행이 된다.
 */