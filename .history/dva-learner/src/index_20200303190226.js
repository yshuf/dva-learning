import dva from 'dva';
import './index.css';
import Router from './router'
console.log(Router)

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
// app.router(require('./router').default);
app.router(Router)
console.log(require('./router'))

// 5. Start (挂载)
app.start('#root');
