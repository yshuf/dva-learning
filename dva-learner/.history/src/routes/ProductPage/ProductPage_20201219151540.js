import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

// @connect(({ product: { productList, innerText }, loading }) => ({
//     productList,
//     innerText,
// }))

// @connect((state) => ({ product: state.product, loading: state.loading }))
class ProductPage extends Component {

    render () {
        console.log()
        let { productList, dispatch, innerText } = this.props;
        return (
            <div>
                <Product dispatch={dispatch} title='hahah' productList={productList} />
                {innerText}
            </div>
        )
    }
}

const hhaah = (state) => {
    return {
        // 找到其命名空间 为 product 下的productList
        productList: state.product,
        innerText: state.innerText
    }
}

// connect 高阶函数
export default connect(
    // (state) => ({
    // 找到其命名空间 为 product 下的productList
    // productList: state.product
    // })
    hhaah
)(ProductPage)


