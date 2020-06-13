import { h } from 'preact';

/**
 * 示例组件
 * @param {object} props
 * {
 *  text: {string} 显示文字
 * }
 */
export default function Hello(props) {
    return (
        <div className="hello">
            <div className="logo" />
            <p className="title">恭喜你，使用 tl 初始化项目成功!</p>
            <p className="text">{props.text}</p>
        </div>
    );
}
