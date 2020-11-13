/* 
    1. 创建文件，导出一个对象
    2.入口文件index.js文件中注册 model
*/
export default {
    namespace: 'product',
    state: {
        productList: [
            {
                name: '豆子'
            },
            {
                name: '玉米'
            }
        ]
    },

    // 异步操作
    effects: {
        // * ES6新语法，generators提供，返回迭代器，通过yield关键字实现暂停功能。官网 API, https://dvajs.com/knowledgemap/#generators
        * updateListAsync ({ payload }, { call, put }) { // eslint-disable-line
            yield put({
                type: 'updateList'
            });
        },
    },

    reducers: {
        // 更新数据
        updateList (state, action) {
            // action 参数
            let currentProductList = deepClone(state);
            currentProductList.productList.push(action.payload)
            return currentProductList;
        },
    }
}

// 深度拷贝
function deepClone (arr) {
    let _obj = JSON.stringify(arr),
        objClone = JSON.parse(_obj)
    return objClone

}