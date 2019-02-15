function add(a,b) {
    console.dir(arguments);
    return a + b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2, 3));
console.log("====")

function sum() {
    let result = 0;
    for (i = 0; i < arguments.length; i++)
        result += arguments[i];
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7));