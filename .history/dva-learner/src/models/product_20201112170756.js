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