import React, { Component } from 'react'
import Form from './Form.js'
import Items from './Items.js'
import './Card.css'

export default class Card extends Component {
    state = {
        data:[],
        obj:{id:0,name:""}
    }


    onSubmit = (id,val)=>{
        console.log(val)
        if(val !== ""){
            const d = [...this.state.data,{id,val}]
        this.setState({
            data:[...d]
        })
        }
        
    }

    onDelete = (e)=>{
        console.log(e);
        const aux = [...this.state.data.filter((ele)=>{
            return ele.id !== e;
        })];
        this.setState({data:aux})
        
    } 
    

    render() {
        return(
            <>
            <h1>Welcome</h1>
            <Form onSub={this.onSubmit} obj={this.state.obj}/>
            <Items data={this.state.data} onDelete={this.onDelete}/>
            </>
        
        )
    }
}
