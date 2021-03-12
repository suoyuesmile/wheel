function __instanceof(leftHand, rightHand) {
    if (leftHand === null || leftHand === undefined) {
        return false;
    }
    // todo
    if (typeof rightHand !== 'object' || rightHand === null) {
        throw new Error('Right-hand is not a Object!')
    }
    var pList = leftHand.__proto__;
    var target = rightHand.prototype;
    while(pList) {
        if (pList === target) {
            return true;
        }
        pList = pList.__proto__;
    }
    return false;
}


// test
var obj = {};
var obj2 = new Object();
var arr = [];
function Fn() {}
var obj3 = new Fn();

console.log(null instanceof Object);
console.log(undefined instanceof Object);
// console.log(obj instanceof null);
// console.log(obj instanceof undefined);
console.log(obj instanceof Object);
console.log(obj2 instanceof Object);
console.log(obj3 instanceof Object);
console.log(arr instanceof Object);
console.log(arr instanceof Array);
console.log(Fn instanceof Object);
console.log(Fn instanceof Function);

console.log(__instanceof(null, Object));
console.log(__instanceof(undefined, Object));
// console.log(__instanceof(obj, null));
// console.log(__instanceof(obj, undefined));
console.log(__instanceof(obj, Object));
console.log(__instanceof(obj2, Object));
console.log(__instanceof(obj3, Object));
console.log(__instanceof(arr, Object));
console.log(__instanceof(arr, Array));
console.log(__instanceof(Fn, Object));
console.log(__instanceof(Fn, Function));