Function.prototype.__bind = function() {
    that = this;
    thatArgument = arguments[0];
    var thatArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
        var args = thatArgs.concat(Array.prototype.slice.call(arguments));
        that.apply(thatArgument, args);
    }
}

// test
var obj = {
    name: 'this bind obj ok!'
}

function fn(apple, banana) {
    console.log('this.name 的值:', this.name, apple, banana);
}

fn();
fn.bind(obj, 'like apple')('like banana')
fn.__bind(obj, 'like apple')('like banana');

// todo new