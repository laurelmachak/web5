import React, { Component } from 'react'
import inventory from './inventory'



class Products extends Component {
    
    constructor(props){
        super(props)
    }
    
    render(){
        const items = inventory.map((item) =>{
            return <div key={item.id}>{item.name} {item.price} {item.category}</div>
        });
        return (
            <div>{items}</div>
        )
    }
}

export default Products