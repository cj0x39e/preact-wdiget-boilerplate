import { h, render } from 'preact';
import Hello from '@/components/Hello';

/**
 * 导入主题样式，如不需要样式可不添加
 * 否则不能删掉
 */
import '@/theme/index';

/**
 * 示例组件
 */
class TuliuHello {
    /**
     * 初始化可传参数
     * @param {object} options
     * {
     *   containerId：{string} 容器id, 如果不传使用 body 元素
     *   text: {string} 显示文字
     * }
     */
    constructor(options) {
        const { containerId } = options;

        let container = null;
        if (containerId) {
            container = document.getElementById(containerId);
        } else {
            container = document.body;
        }

        /**
         * 使用 preact render 方法渲染组件
         */
        render(<Hello {...options} />, container);
    }
}

/**
 * 挂载对象到 window 上
 */
window.TuliuHello = TuliuHello;
