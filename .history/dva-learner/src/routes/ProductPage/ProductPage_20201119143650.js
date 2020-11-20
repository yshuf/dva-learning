import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

@connect((state) => ({
    productList: state.product
}))
export default class ProductPage extends Component {

    render () {
        let { productList, dispatch, innerText } = this.props;
        console.log(this.props)
        return (
            <div><Product dispatch={dispatch} title='hahah' productList={productList} />{this.props.innerText}</div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         // 找到其命名空间 为 product 下的productList
//         productList: state.product
//     }
// }

// // connect 高阶函数
// export default connect((state) => ({
//     // 找到其命名空间 为 product 下的productList
//     productList: state.product
// }))(ProductPage)


