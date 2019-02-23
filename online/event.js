const EventEmitter = require('events');
// Emitter이벤트를 발생시킬 수 있는 모듈.

const myEvent = new EventEmitter();

myEvent.addListener('방문', () => {
    console.log('방문해 주셔서 감사합니다.');
});

myEvent.on('종료', () => {
        console.log('안녕히가세요');
});

const callback = () => {
    console.log('제발 좀 가세요');
};

myEvent.on('종료', callback);

myEvent.once('특별이벤트', () => {
    console.log('한번만 실행됩니다.');
});

myEvent.emit('방문'); // emit은 이벤트를 호출하는 메서드이다. 인자로 이벤트 이름을 넣으면된다.
myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.emit('특별이벤트');

myEvent.on('계속', () => {
    console.log('계속 리스닝');
});

myEvent.removeAllListeners('계속'); // removeAllListners를 하면 다 해제하는것이다. 계속 이벤트와 같이 여러개가 등록이 됬기때문에.
myEvent.emit('계속');

myEvent.removeListener('종료', callback);

myEvent.emit('종료');

console.log(myEvent.listenerCount('종료')); // 이벤트가 몇개 달렸는지 알려주는 메서드
// on과 addListener는 같은 기능을 하는 별명(alias)입니다.
// 이벤트리스너는 여러개를 달 수도 있다.

/*
    미리 이벤트리스너를 만들어두고, (이벤트 리스너는 특정 이벤트가 발생했을 때 어떤 동작을 할지 정의하는 부분)
    예시) 사람이 서버에 방문(이벤시)하면 HTML 파일을 줄거야.
 */