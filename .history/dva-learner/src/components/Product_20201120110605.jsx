import React from 'react';
// 路由 routerRedux 官网 API https://dvajs.com/api/#dva-router ,withRouter源码中可以查阅到
import { withRouter, Link, routerRedux } from 'dva/router'
// import * as api from '../services/example'


class Product extends React.Component {
     
    componentDidMount () {
        // api.gerProduct()
        //     .then(res => {
        //     console.log(res.data)
        // })
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
        return 
        //  routerRedux
         this.props.dispatch(routerRedux.push('/'))
     }
     clickProductListAsync = (event) => {
         const currentProductList = {
             name:'玉米2'
         }
         this.props.dispatch({
             type: 'product/updateListAsync',
             payload:currentProductList
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
        let { productList } = this.props
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

export default withRouter(Product)