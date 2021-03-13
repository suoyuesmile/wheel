function __copy_shadow(origin) {
    var newObj = {};
    for (const key in origin) {
        newObj[key] = origin[key];
    }
    return newObj;
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

var copyObj = __copy_shadow(obj);
console.log(copyObj);