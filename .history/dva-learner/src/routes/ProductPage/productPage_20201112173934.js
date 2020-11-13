import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

class ProductPage extends Component {

    render () {
        return (
            <div><Product title='hahah' productList={this.props.productList} /></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product
    }
}

export default connect(mapStateToProps)(ProductPage)


