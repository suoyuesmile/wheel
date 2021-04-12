/**
 * example (add 2 (subtract 4 2))
 * ===>
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 * @param {*} input 
 * @returns 
 */

module.exports = function(input) {
    let current = 0;
    let tokens = [];

    while (current < input.length) {
        let char = input[current];

        if (char === '(') {
            tokens.push({ type: 'paren', value: '(' });

            current++;
            continue;
        }

        if (char === ')') {
            tokens.push({ type: 'paren', value: ')' });
            current++;
            continue;
        }

        if (/\s/.test(char)) {
            current++;
            continue;
        }

        const NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';

            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: 'number', value: value });
            continue;
        }

        const LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
            let value = '';

            while(LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: 'name', value });
            continue;
        }

        throw new TypeError()
    }

    return tokens;
}