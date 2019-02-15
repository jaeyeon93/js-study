const plus = new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;
    if (a + b < 2) {
        resolve(a + b);
    } else {
        reject(a + b);
    }
});

plus
    .then((success) => {
        //resolve가 되면 then으로 넘어오고
        console.log(success);
    })
    .catch((fail) => {
        // reject가 되면 catch로 넘어온다.
        console.log(fail);
    })