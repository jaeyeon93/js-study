const fs = require('fs');

fs.writeFile('./writeme.txt', '여기다 글을 적어주세요.',(err, data) => {
    if (err) throw err;
    // 파일을 직접확인하기 보다는 코드로 확인을 해보자

    fs.readFile('./writeme.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    });

});