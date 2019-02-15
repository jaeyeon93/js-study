
const curry = fun => arg => fun(arg);

console.log(curry(parseInt('11')));
console.log(curry(parseInt('11',2)));

let arr = ['11','11','11','11'].map(curry(parseInt));
console.log(arr);


function volume(l, w, h) {
    return l * h * w;
}

var curried = curry(volume);

curried(1)(2)(3);

function curry(fn) {
    var arity = fn.length;
}