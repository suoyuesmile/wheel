function __debounce(fn, timeInstance) {
    var timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, timeInstance);
    }
}

// test => practice/debounce
// preview => yarn debounce