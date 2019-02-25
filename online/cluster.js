// Node가 싱글스레드라는거라는것은 변화가 없다. 이것은 1코어를 사용하는것이다.
// cluster를 사용하면 노는 코어들을 활용한다.
// cluster는 master(관리자) 프로세스와 worker(일꾼) 프로세스가 있다. cluster.fork()가 워커를 만든다.

const cluster = require('cluster');
const os = require('os');
const numCPU = os.cpus().length;
const http = require('http');

if (cluster.isMaster) {
    console.log('마스터 프로세스 아이디', process.pid);
    for (let i = 0; i < numCPU; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(process.pid, '워커가 종료되었습니다.');
        cluster.fork(); // 하나의 프로세스가 쓰러졌기때문에 하나를 다시 만든다.
    });
} else {
    // worker인 경우 진짜 서버를 만든다.
    http.createServer((req, res) => {
        res.end('http server');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8080);
    console.log(process.pid, '워커 실행');
}
