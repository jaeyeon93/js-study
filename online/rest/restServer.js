const http = require('online/http');
const fs = require('fs');

const users = {
  // memory선언. DB대신 이걸 사용한다.
};

const router = {
    get: {
        '/': (req, res) => {
            fs.readFile('./restFront.html', (err, data) => {
                if (err) throw err;
                res.end(data);
            })
        },
        '/users': (req, res) => {
            res.end(JSON.stringify(users));
        },
        '*': (req, res) => { // wildcar
            fs.readFile(`.${req.url}`, (err, data) => {
                return res.end(data);
            });
        },
    },
    post: {
        '/users/': (req, res) => {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return req.on('end', () => {
                console.log('POST 본문(body)', body);
                const { name } = JSON.parse(body);
                const id = +new Date(); //current time;
                users[id] = name;
                res.writeHead(201, {'Contnet-Type:': 'text/html; charset=utf-8'});
                res.end('사용자등록 성공');
            })
        }

    },
    patch: {

    },
    put: {
        '/users': (req, res) => {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return on('end', () => {
                console.log('delete', body);
                delete users[id];
                return res.end(JSON.stringify(users));
            });
        }
    },
    delete: {
        '/users': (req, res) => {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return on('end', () => {
                console.log('delete', body);
                delete users[id];
                return res.end(JSON.stringify(users));
            });
        }
    }
}


http.createServer((req, res) => {
    const matchedUrl = router[req.method.toLowerCase()][req.url];
    (matchedUrl || router[req.method.toLowerCase()]['*'])(req, res);
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
        if (req.url === '/users') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('POST 본문(Body):', body);
                const { name } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201);
                res.end('등록 성공');
            });
        }
    }  else if (req.method === 'PUT') {
        if (req.url === '/') {

        } else if (req.url.startsWith('/users/')) {
            const key = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return req.on('end', () => {
                console.log('put', body);
                users[id] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        }

    } else if (req.method === 'PATCH') {
        if (req.url === '/') {

        } else if (req.url === '/users') {

        }

    } else if (req.method === 'DELETE') {
        if (req.url === '/') {

        } else if (req.url.startsWith('/users/')) {

        }
    }
}).listen(8005, () => {
    console.log('8085번 포트에서 서버 대기 중입니다.');
});