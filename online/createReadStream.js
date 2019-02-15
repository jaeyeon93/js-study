const fs = require('fs');

const readStream = fs.createReadStream('./readme2.txt', { highWaterMark : 16});
// highWaterMark는 몇 바이트씩 읽을꺼냐.. 현재는 16바이트씩 읽는다.

const data = []; // 배열에 chunk들이 쌓인다.

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end', Buffer.concat(data).toString());
    // data배열에 쌓인 chunk들을 하나로 합친다.
});

readStream.on('error', (err) => {
    console.log('error', err);
});

/*
스트림은 이벤트 기반으로 동작한다. data, end, error... 버퍼(청크)들이 들어올 때마다 이벤트가 발생한다.
 */