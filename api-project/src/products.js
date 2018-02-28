import React, { Component } from 'react'
import inventory from './inventory'

const productStyles = {
    width: "200px",
    border: "1px solid black"
}

class Products extends Component {
    
    constructor(props){
        super(props)
    }
    
    render(){
        const items = inventory.map((item) =>{
            return <div key={item.id} style={productStyles}>{item.name} {item.price} {item.category}</div>
        });
        return (
            <div>{items}</div>
        )
    }
}

export default Products