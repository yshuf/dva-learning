import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

class ProductPage extends Component {

    render () {
        let { productList, dispatch } = this.props;
        console.log(productList)
        return (
            <div><Product dispatch={dispatch} title='hahah' productList={productList} /></div>
        )
    }
}

const mapStateToProps = ({ product }) => ({
    // return {
    // 找到其命名空间 为product 的productList
    productList: product.productList
    // }
})

// connect 高阶函数
export default connect(({ product }) => ({
    // return {
    // 找到其命名空间 为product 的productList
    productList: product.productList
    // }
}))(ProductPage)


