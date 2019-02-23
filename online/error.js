// 예외가 발생하면 노드 프로그램이 죽어버리기때문에 예외처리를 잘해야된다. 멀티쓰레드의 경우 쓰레드가 죽으면 다른쓰레드가 일을 하기때문에 괜찮은데, 노드는 싱글쓰레드가 어렵다.

process.on('uncaughtException', (error) => {
    console.error('예기치 못한 에러', error);
});
// uncaughtException에 의존하지 말고 근본적인 에러의 원인을 해결하자
setInterval(() => {
    throw new Error('서버를 고장내주마');
}), 1000);

setTimeout(() => {
    console.log('실행됩니다.');
}, 2000);


/*
setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마');
    } catch (e) {
        console.error(e);
    }

}, 1000);

const fs = require('fs');

setInterval(() => {
    fs.unlink('./asdf.js', (err) => {
        console.log('start');
        console.log(err);
        console.log('end');
    });
}, 1000);
*/

/*
 되도록이면 try-catch를 쓰지말자. 하지만 async/await처럼 어쩔 수 없이 try/catch를 써야하는 경우도 있다.

 node 내장 모듈에서 발생하는 에러는 에러가 나더라도 프로세스를 멈추지 않는다.
 */