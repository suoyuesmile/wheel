Function.prototype.__apply = function() {
    var arg = Array.prototype.shift.call(arguments);
    var params = Array.prototype.shift.call(arguments);
    arg.fn = this;
    var applyFn = arg.fn(...params);
    delete arg.fn;
    return applyFn;
}

// test
var obj = {
    name: 'apply obj ok'
}

function fn(a) {
    console.log(this.name, a);
}

fn.apply(obj, ['params ok']);
fn.__apply(obj, ['params ok']);

