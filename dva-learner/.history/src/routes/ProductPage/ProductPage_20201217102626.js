import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

// @connect(({ product: { productList, innerText }, loading }) => ({
//     productList,
//     innerText,
// }))

// @connect((state) => ({ product: state.product, loading: state.loading }))
class ProductPage extends Component {
    componentDidMount () {

        let generator = function* () {
            yield 1;
            yield* [2, 3, 4];
            yield 5;
        }
        var iterator = generator()
        iterator.next() // {vale:1,done:false}
        iterator.next() // {vale:2,done:false}
        iterator.next() // {vale:3,done:false}
        iterator.next() // {vale:4,done:false}
        iterator.next() // {vale:5,done:false}
        iterator.next() // {vale:undefined,done:true}
    }

    render () {
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
        productList: state.product
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


