// 사용할 변수들을 불러오기
const { odd, even} = require('./var'); // 비구조화 할당을 사용해서

function checkOddOrEven(num) {
    if (num % 2) {
        // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// checkOddOrEven(); 주의해야한
// module.exports === exports에서 exports는 객체속성만 담을 수 있다
// module.exports를 쓰던가 exports... 을 쓰던가