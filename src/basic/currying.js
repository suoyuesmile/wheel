// why currying?

function __currying(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        if (!arguments.length) {
            return fn.apply(this, args);
        }
        [].push.apply(args, arguments);
        // todo: why
       return arguments.callee;
    }
}

// test
function mutiply(a, b, c) {
    return a * b * c;
}

console.log('mutiply: ', mutiply(1, 2, 3));

var single = __currying(mutiply);
console.log(single(1));
console.log(single(2));
console.log(single(3));
console.log(single());