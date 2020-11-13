import React from 'react';


export default class Product extends React.Component {

    addProduct = () => {
        this.props.dispatch({
            type: 'product/updateList',
            payload: {
                name: '番薯',
            }
        })
    }
    render () {
        let { productList } = this.props.productList
        return (
            <div>
                product商品:{this.props.title}
                <ul>    
                    {productList.map((ele,index)=>{
                        return <li key={index}>{ele.name}</li>
                    })}
                </ul>
                <button onClick={this.addProduct}>添加商品</button>
                
            </div>

            
        )
    }
}