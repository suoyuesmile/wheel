const chokidar = require('chokidar');
// One-liner for current directory
chokidar.watch('demo/chokidar').on('change', (path) => {
    console.log(path);
});