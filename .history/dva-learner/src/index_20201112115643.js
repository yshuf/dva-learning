import dva from 'dva';
import './index.css';
// import Router from './router'
// import creatHistory from 'history/createBrowserHistory';
import { createBrowserHistory as creatHistory } from 'history'

// console.log(Router) ƒ RouterConfig(_ref) {
// var history = _ref.history;
// return _react.default.createElement(_router.Router, {
//   history: history
// }, _react.default.createElement(_router.Switch, null, _react.default.…

// 1. Initialize (安裝history，除去#，这个时候会有两个警告，为了除去后面引起的警告，重新引用createBrowserHistory)
const app = dva({
    history: creatHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/product').default)

// 4. Router
app.router(require('./router').default);
// app.router(Router)
// console.log(require('./router')) Object default: ƒ RouterConfig(_ref)arguments: (...)caller: (...)length: 1name: "RouterConfig"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: router.js:5[[Scopes]]: Scopes[2]__esModule: true__proto__: Object


// 5. Start (挂载)
app.start('#root');

/**
 * 1.有 # 锚点形式 a标签
 * 2.H5 的 history API （https://developer.mozilla.org/zh-CN/docs/Web/API/History_API）
 *
 */
