const fs = require('fs');

console.log('start');

fs.readFile('./readme.txt', (err, data) => {
    if (err) throw err;
    console.log('1번 : ', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if (err) throw err;
    console.log('2번 : ', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if (err) throw err;
    console.log('3번 : ', data.toString());
});

console.log("끝");

// 처음 실행했을때는 2-1-3의 순서대로 시작이 됬다. 두번째는 1-2-3 결국은 규칙이 없다

/*
readFile()이 비동기 메서드이다.
fs.readFile에서는 비동기로 실행이 되기때문에 랜덤으로 실행이 된다.
동기방식으로 바꿔야한다.
 */