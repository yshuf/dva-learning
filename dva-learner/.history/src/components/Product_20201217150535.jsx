import React from 'react';
// 路由 routerRedux 官网 API https://dvajs.com/api/#dva-router ,withRouter源码中可以查阅到
import { withRouter, Link, routerRedux } from 'dva/router'
import { connect } from 'dva';
// import * as api from '../services/example'

@connect(({ loading }) => (
    {
        loading:loading.effects['product/updateListAsync']
    }
))
    
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
     
    componentDidMount () {
        // api.gerProduct()
        //     .then(res => {
        //     console.log(res.data)
        // })
        console.log(this.props,this.props.loading)
    }

    addProduct = () => {
        this.props.dispatch({
            // 空间命名
            type: 'product/updateList',
            payload: {
                name: '番薯',
            }
        })
    }

    clickGoToHandler = () => {
        this.props.history.push('./')
     }
    clickGoToRouterReduxHandler = () => {
        console.log(routerRedux)
        // return 
        //  routerRedux
         this.props.dispatch(routerRedux.push('/'))
     }
    clickProductListAsync = (event) => {
         console.log(this.props)
         const currentProductList = {
             name:'玉米2'
         }
         this.props.dispatch({
             type: 'product/updateListAsync',
             params:currentProductList
         })

    }
    clickProductListHttp = (event) => {
        this.props.dispatch({
            type: 'product/updateListHttp',
            payload: {
                id:1001
            }
        })
    }

    
    render () {
        let { productList } = this.props.productList
        console.log(this.props)

        return (
            <div>
                product商品:{this.props.title}
                <ul>    
                    {productList.map((ele, index) => {
                        // 实际汇总 key 给数据的唯一标志，不要给index。非常忌讳哦
                        return <li key={index}>{ele.name}</li>
                    })}
                </ul>
                <button onClick={this.addProduct}>添加商品</button>
                <button onClick={this.clickProductListAsync}>获取商品列表async</button>
                <button onClick={this.clickProductListHttp}>获取商品列表Http</button>
                <Link to='/'>去首页</Link>
                <button onClick={ this.clickGoToHandler}>去首页</button>
                <button onClick={ this.clickGoToRouterReduxHandler}>routerRedux去首页</button>
            </div>
        )
    }
}

// 使用 widthRouter 作用 把不是通过路由切换过来的组件中，将react-router的 history,location,match 三个对象传入 props 对象上
export default withRouter(Product)