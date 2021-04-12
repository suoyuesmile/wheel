const tokenizer = require('./tokenize');
const parser = require('./parser');
const log = require('./log');

const input = '(add 2 (sub(25 10)))';

const tokens = tokenizer(input);
const ast = parser(tokens);

log(travser(ast));