// 数据劫持
// 模版编译

let data = {
    message: 'hello',
    obj: {
        name: 'test'
    },
    arr: [],
}

// 重写
const arrExtend = Object.create(Array.prototype)

const arrExtends = ['push', 'pop']; //..

arrExtends.forEach(method => {
    const oldMethod = Array.prototype[method];
    const newMethod = function(...args) {
        oldMethod.apply(this, args);
        // trigger
        console.log(`${method} ${args}trigger`);
    }
    arrExtend[method] = newMethod;
});

Array.prototype = Object.assign(Array.prototype, arrExtend);

// console.log(Object.keys(data));/
const observer = (data) => {
    if (!data || typeof data !== 'object') {
        return;
    }

    Object.keys(data).forEach((key) => {
        let current = data[key];

        observer(current);

        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
    
            get() {
                console.log(`get ${current}`)
                return current;
            },
            set(newVal) {
                current = newVal;
                console.log(`set ${current} trigger`);
                // trigger
    
            }
        })
    })
}

observer(data);

data.message = 'world';
data.obj.name = 'test1';
// data.arr.push('byte'); 


