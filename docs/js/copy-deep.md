```js
function __copy_deep(origin) {
    const newObj = {};
    for (const key in origin) {
        newObj[key] = origin[key];
        if (typeof origin[key] === 'object') {
            return __copy_deep(origin[key])
        } else {
            return origin[key];
        }
    }
}

// test
var schoolObj = {
    middle: 'first middle school'
};
var workArr = ['ym', 'cfy'];
var obj = {
    name: {
        first: 'shao',
        last: 'suo'
    },
    age: 18,
    school: schoolObj,
    work: workArr,
}

var copyObj = __copy_deep(obj);
console.log(copyObj);
```