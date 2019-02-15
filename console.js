const string = 'abc';
const number = 1;
const boolean = true;

const obj = {
    outside: {
        indside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있다');
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요');

console.dir(obj, { colors:false, depth: 2});
console.dir(obj, { colors:true, depth: 1});
// console.dir는 객체전용 로깅이고 두번째는 옵션이다. dir은 많이 사용한다

function b() {
    console.trace('에러 위치 추적');
}

function a() {
    b();
}
a();


console.timeEnd('전체 시간');

/*
console.time('인자');
console.timeEnd('인자'):
 인자가 같아야 그 사이의 시간을 잽니다
 */