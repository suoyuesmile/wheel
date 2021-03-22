```js
function sleep(milliseconds) {
    return new Promise((resolve => setTimeout(resolve, milliseconds)));
}

// test: only browser
(async function test() {
    console.log('start!');
    await sleep(2000);
    console.log('end!');
})();
```