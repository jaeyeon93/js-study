// Person()생성자함수

var Person = function (name) {
    // 함수 코드 실행전
    this.name =name;
    // function return
};

// foo object generated
var foo = new Person('foo');
console.log(foo.name);

/// 다른예제

var foo2 = {
    name:'foo',
    age: 35,
    gender: 'man'
};
console.dir(foo2);

// 생성자함수
function Human(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.position = position;
}

var bar = new Human('bar',33, 'woman');
console.dir(bar);

var baz = new Human('baz',25, 'woman');
console.dir(baz);
