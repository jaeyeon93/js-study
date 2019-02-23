const http = require('http');
const https = require('https');
const http2 = require('http2'); // 좀 실험적인 모듈이다.

http.createServer((req, res) => {
    res.end('http server');
}).listen(80);

// lets encrypt 무료 인증서를 발급.
https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),

    ]
},(req, res) => {
    res.end('https server');
}).listen(443);
