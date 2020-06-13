const packageInfo = require('./package.json');

module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-banner': {
            banner: `${packageInfo.name}@${packageInfo.version} author:${packageInfo.author}`
        },
        // 可配置项，参考 https://github.com/evrone/postcss-px-to-viewport
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/pc/gi] /** 忽略 名字中包含 pc 的文件 */,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
        }
    }
};
