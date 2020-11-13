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
    reducers: {
        // 更新数据
        updateList (state, action) {
            // action 参数
            let currentProductList = deepClone(state);
            currentProductList.productList.push(action.params)
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