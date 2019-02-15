const fs = require('fs');

// const readStream = fs.createReadStream('readme4.txt');

const readStream = fs.copyFile('./readme4.txt', './writeme4.txt', (err) => {
    console.log(err);
})

const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);

/*
스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 버퍼가 흘러가게 할 수 있습니다.
 그것을 pipe라고 한다.
 전에는 스트림을 연결해서 사용을 했는데 최근에는 fs.copyFile()을 사용한다.
 */