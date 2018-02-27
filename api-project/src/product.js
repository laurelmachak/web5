import React, { Component } from 'react'
import { categories } from './inventory'

class Product extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const items = inventory.map((item, index) =>{
            return <button key={index}>{item}</button>
        });
        return (
            <div>{items}</div>
        )
    }
}

export default Product