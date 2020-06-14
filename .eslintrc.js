module.exports = {
    extends: ['alloy', 'alloy/react'],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    },
    rules: {
        // 自定义你的规则
        'react/sort-comp': [0],
        'no-invalid-this': [0]
    },
    settings: {
        react: {
            pragma: 'h',
            // 参考 eslint-config-preact https://github.com/preactjs/eslint-config-preact/blob/6687c4931b3df7d52cdf6fca98a20d2093eb81de/index.js#L55
            version: '16.0'
        }
    }
};
