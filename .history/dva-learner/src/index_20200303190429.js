import dva from 'dva';
import './index.css';
// import Router from './router'

// console.log(Router) ƒ RouterConfig(_ref) {
// var history = _ref.history;
// return _react.default.createElement(_router.Router, {
//   history: history
// }, _react.default.createElement(_router.Switch, null, _react.default.…

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
// app.router(Router)
// console.log(require('./router')) Object default: ƒ RouterConfig(_ref)arguments: (...)caller: (...)length: 1name: "RouterConfig"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: router.js:5[[Scopes]]: Scopes[2]__esModule: true__proto__: Object


// 5. Start (挂载)
app.start('#root');
