const fs = require('fs');

const writeSteam = fs.createWriteStream('./writeme2.txt');
writeSteam.on('finish', () => {
    console.log('파일 쓰기 완료');
});

writeSteam.write('이 글을 씁니다. \n');
writeSteam.write('한번 더 글을 씁니다. \n');
writeSteam.write('마지막에는 end()를 호출하면 됩니다. \n');
writeSteam.end();

/*
스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 버퍼가 흘러가게 할 수 있습니다.
 */