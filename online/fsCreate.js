const fs = require('fs');

fs.access('./folder', fs.constants.F_OK || fs.constants.R_OK || fs.constants.W_OK, (err => {
    if (err) {
        if (err.code == 'ENONET') {
            console.log('폴더없음');
            fs.mkdir('./folder', (err) => {
                if (err) throw err;
            }
            console.log('폴더만들기 성공');
            fs.open('./folder/file.js', 'w', (err, fd) => {
                if (err) throw err;
            }
            console.log('빈 파일 만들기 성공', fd);
            fs.rename('./folder/file.js', './folder/newFile.js', (err) => {
                if (err) throw err;
            }) 
            )
        }
    }
}))