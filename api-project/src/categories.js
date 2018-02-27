import React, { Component } from 'react'
import { categories } from './inventory'

class Categories extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const items = categories.map((item, index) =>{
            return <button key={index}>{item}</button>
        });
        return (
            <div>{items}</div>
        )
    }
}

export default Categories