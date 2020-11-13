import React, { Component } from 'react';
import Product from '../../components/Product';
import { connect } from 'dva';

class ProductPage extends Component {

    console.log (this.props)
    render () {
        return (
            <div><Product title='hahah' /></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product
    }
}

export default connect(mapStateToProps)(ProductPage)


