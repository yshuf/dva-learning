import React from 'react';


export default class Product extends React.Component {
    render () {
        let { productList } = this.props.productList
        console.log(this.props)
        return (
            <div>
                product商品:{this.props.title}
                <ul>    
                    {productList.map((ele,index)=>{
                        return <li key={index}>{ele.name}</li>
                    })}
                </ul>
            </div>

            
        )
    }
}