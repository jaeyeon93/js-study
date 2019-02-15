var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

var otherObject = {
    name:'bar'
};

// otherObject.sayName()메서드
otherObject.sayName = myObject.sayName;

// sayName()메서드 호출
myObject.sayName();
otherObject.sayName();