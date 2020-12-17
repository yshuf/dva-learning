/* 
    1. 创建文件，导出一个对象
    2.入口文件index.js文件中注册 model
*/
import * as api from '../services/example'
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
        ],
        innerText: 'hello'
    },

    subscriptions: {
        // 这里的函数名随意，可以有多个函数
        setup ({ dispatch, history }) {
            // const currentProduct = {
            //     name: '玉米1'
            // }
            window.onresize = () => {
                // dispatch({
                //     type: 'updateList',
                //     payload: currentProduct
                // })
            }
        },

        setupHistory ({ dispatch, history }) {
            history.listen((location) => {
                console.log(location);
            })
        },

        hello ({ dispatch, history }) { }
    },

    // 异步操作
    effects: {
        // * ES6新语法，generators提供，返回迭代器，通过yield关键字实现暂停功能。官网 API, https://dvajs.com/knowledgemap/#generators
        *updateListAsync ({ params }, { call, put }) { // eslint-disable-line
            console.log(props)
            // payload 为组件传递过来的参数
            yield put({
                type: 'updateList',
                params
            });
        },

        *updateListHttp ({ payload }, { call, put }) {
            // 网络请求
            const result = yield call(api.gerProduct, payload);
            const data = result.data;
            if (data) {
                yield put({
                    type: 'updateList',
                    payload: data
                })
            }
        }
    },

    reducers: {
        // 更新数据
        updateList (state, action) {
            console.log(state)
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