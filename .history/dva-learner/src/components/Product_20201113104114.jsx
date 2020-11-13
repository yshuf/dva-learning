import React from 'react';
// 路由 routerRedux 官网 API https://dvajs.com/api/#dva-router ,withRouter源码中可以查阅到
import {withRouter, Link,routerRedux } from 'dva/router'


 class Product extends React.Component {

    addProduct = () => {
        console.log(this.props.dispatch)
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
        //  routerRedux
         this.props.dispatch(routerRedux.push('/'))
     }

    render () {
        let { productList } = this.props.productList
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
                <Link to='/'>去首页</Link>
                <button onClick={ this.clickGoToHandler}>去首页</button>
                <button onClick={ this.clickGoToRouterReduxHandler}>routerRedux去首页</button>
            </div>
        )
    }
}

export default withRouter(Product)