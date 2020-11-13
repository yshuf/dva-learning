import React from 'react';


export default class Product extends React.Component {
    const { productList}=this.props.productList
    render () {
        return (
            <div>product商品:{this.props.title}</div>

            <ul>    
                {productList.map((ele,index)=>{
                    return <li>{ele.name}</li>
                })}
            </ul>
        )
    }
}