// 1. create empty object
// 2. bind object __proto__ function
// 3. return new object

function Fn() {
    this.name = 'ok';
}

function __new() {
    var constructor = Array.prototype.shift.call(arguments);
    var newObj = Object.create(constructor.prototype);
    var constructResult = constructor.apply(newObj, arguments);
    return constructResult instanceof Object ? constructResult: newObj;
}


// test
var instance = new Fn();
var instance2 = __new(Fn);


// console.log('new: ', instance);
console.log('__new: ', instance2);