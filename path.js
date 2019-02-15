const path = require('path');

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log(path.parse(__filename));


console.log(path.format({ root: '/',
    dir: '/Users/jaeyeonkim/Desktop/nodelecture',
    base: 'path.js',
    ext: '.js',
    name: 'path' }
))

// 경로가 절대경로인지 아닌지를 확인
console.log(path.isAbsolute('/Users/jaeyeonkim/Desktop/nodelecture'));

// 뒤의 경로에서 앞의경로까지의 상대경로
console.log(path.relative('/Users/jaeyeonkim/Desktop/nodelecture', '/Users/jaeyeonkim/'));

// path.join : 절대경로 무시하고 합침
// path.resolve 절대 경로 고려하고 합침