const http = require('http');
const fs = require('fs');

const users = {
  // memory선언. DB대신 이걸 사용한다.
};

http.createServer((req, res) => {
    // 여기부터가 실제 로직
    if (req.method === 'GET') {
        if (req.url === '/') {
            return fs.readFile('./restFront.html', (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        } else if (req.url === '/users') {
            return res.end(JSON.stringify(users));
        }
        return fs.readFile(`.${req.url}`, (err, data) => {
            return res.end(data);
        });
        } else if (req.method === 'POST') {

    } else if (req.url === '/users') {
        if (req.url === '/') {
            // 요청에 본문(body)가 있을경우 받고, 파싱하고
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
                });
                req.on('end', () => {
                    console.log('POST 본문(body)', body);
                    const { name } = JSON.parse(body).name;
                    const id = +new Date(); // currnet Time;
                    users[id] = name; // name은 body
                    res.writeHead(201);
                    res.end('사용자 등록 성공');
                });
        }
    } else if (req.method === 'PATCH') {
        if (req.url === '/') {

        } else if (req.url === '/users') {

        }

    } else if (req.method === 'PUT') {
        if (req.url === '/') {

        } else if (req.url === '/users') {

        }

    } else if (req.method === 'DELETE') {
        if (req.url === '/') {

        } else if (req.url === '/users') {

        }
    }
}).listen(8005, () => {
    console.log('8085번 포트에서 서버 대기 중입니다.');
});