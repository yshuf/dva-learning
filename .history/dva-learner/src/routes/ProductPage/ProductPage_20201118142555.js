import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

class ProductPage extends Component {

    render () {
        let { productList, dispatch } = this.props;
        return (
            <div><Product dispatch={dispatch} title='hahah' productList={productList} /></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // 找到其命名空间 为 product 下的productList
        productList: state.product
    }
}

// connect 高阶函数
export default connect(mapStateToProps)(ProductPage)


