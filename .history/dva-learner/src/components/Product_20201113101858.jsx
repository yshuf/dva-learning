import React from 'react';
import { Link } from 'dva/router'


export default class Product extends React.Component {

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
        console.log(this.props)
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
                <Link to='/'>去首页</Link>
                <button onClick={ this.clickGoToHandler}>去首页</button>
            </div>

            
        )
    }
}