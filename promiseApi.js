const promise = new Promise((res, rej) => {
    rej('실패');
});

const successPromise = Promise.resolve('성공')
    .then();
const failPromise = Promise.reject('실패')
    .then();

// Promise.all로 여러 프로미스를 동시에 실행 가능하다. 단, 하나라도 실패하면 catch로\
// Promise는 결과값을 가지고 있지만, then이나 .catch를 붙이기 전까지 반환하지 않는것