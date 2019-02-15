const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
// 첫번째 인자는 경로
    if (err) throw err;

    console.log(data);
    // result
    // <Buffer 72 65 61 64 6d 65 20 74 78 74 20 66 69 6c 65 0a ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 0a 0a eb b8 8c eb 9d bc ec 9a b0 ec ... >
    // 버퍼가 나왔다.
    console.log(data.toString());
});