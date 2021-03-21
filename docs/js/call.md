```js
Function.prototype.__call = function() {
    var arg = Array.prototype.shift.call(arguments);
    var params = Array.prototype.slice.call(arguments);
    arg.fn = this;
    var callFn = arg.fn(...params);
    delete arg.fn;
    return callFn;
}

// test
var obj = {
    name: 'call obj ok'
}

function fn(a) {
    console.log(this.name, a);
}

fn.call(obj, 'params ok');
fn.__call(obj, 'params ok');
```