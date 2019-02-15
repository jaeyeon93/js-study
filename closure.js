function getClosure() {
    let text = 'varibale1';
    return function () {
        return text;
    };
}

let closure = getClosure();
console.log(closure);
console.log(closure())


let base = 'Hello, ';

function sayHelloTo(name) {
    let text = base + name;
    return function () {
        console.log(text);
    };
}

let hello1 = sayHelloTo("승민");
let hello2 = sayHelloTo("지미");
let hello3 = sayHelloTo("재영");
hello1();
hello2();
hello3();
