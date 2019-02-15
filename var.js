const odd = '홀수입니다';
const even = '짝수입니다';

// modue.exports 내보내는 키워드
module.exports = {
    odd,
    even
    // 모듈이 될 파일은 module.exports = 값;을 마지막에 붙여주면된다.
};
/*
 // 위의 방법 아래방법 둘다 된다
exports.odd = odd;
exports.even = even;
*/


/*
module.exports = {
    odd: odd,
    even : even
    위와 같은 형태는 이전문법에서 사용
}
 */
