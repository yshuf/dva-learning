import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

class ProductPage extends Component {

    render () {
        let { productList, dispatch, history } = this.props;
        return (
            <div><Product history={history} dispatch={dispatch} title='hahah' productList={productList} /></div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // 找到其命名空间
        productList: state.product
    }
}

// connect 高阶函数
export default connect(mapStateToProps)(ProductPage)


