// 1. create empty object
// 2. bind object __proto__ function
// 3. return new object 

function Fn() {
    this.name = 'ok';
}

function __new(Fn) {
    var newObj = {};
    newObj.__proto__ = Fn.prototype;
    return newObj;
}


// test
var instance = new Fn();
var instance2 = __new(Fn);


console.log(instance);
console.log(instance2);