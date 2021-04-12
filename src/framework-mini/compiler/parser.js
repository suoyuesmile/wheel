/**
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
 * 
 * ====>
 * 
  *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 *
 * @param {*} tokens
 */
module.exports = function(tokens) {
    const ast = {
        type: 'Program',
        body: []
    };

    let current = 0;

    function walk() {
        let token = tokens[current];

        if (token.type === 'number') {
            current++;
            return {
                type: 'NumberLiteral',
                value: token.value
            }
        }

        if (token.type === 'paren' && token.value === '(') {
            token = tokens[++current];

            let node = {
                type: 'CallExpression',
                name: token.name,
                params: []
            };

            token = tokens[++current];

            while (token.type !== 'paren' || (token.type === 'paren' && token.value !== ')')) {
                node.params.push(walk());
                token = tokens[current];
            }

            current++;
            return node;
        }

    }

    while(current < tokens.length) {
        ast.body.push(walk());
    }

    return ast;

}