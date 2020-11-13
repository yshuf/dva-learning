// 引用mock文件下的数据 展示
// export default {
//     ...require("./mock/product")
// };
import fs from 'fs';
import path from 'path';

const mock = {}
// fs.readdirSync(path.join(__dirname + '/mock')).forEach(function (file) {
//     if (file.match(/\.js$/)) {
//         Object.assign(mock, require('./mock/' + file))
//     }
// })

export default mock
