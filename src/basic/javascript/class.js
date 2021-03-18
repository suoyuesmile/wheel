function __Class(arg) {
    this._init(arg);
}

__Class.prototype = {
    _init(arg) {
        console.log(arg);
    },
    protoFn(arg) {
        console.log('prototype function', arg);
    }
}


// test
var obj = new __Class('constructor init');
obj.protoFn('ok');
console.log(obj.__proto__ === __Class.prototype);

// example Vue
function Vue(options) {
    this._init(options);
}

Vue.prototype = {
    _init(options) {
        this.$options = options;
        this._initData();
    },
    _initData() {
        console.log('initData:', this.$options.data)
    }
}

var vm = new Vue({
    data: {
        message: 'ok',
    }
});