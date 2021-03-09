import React, { Component } from 'react'
import './item.css'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state = {id:0,value:''}
    }


    handler = (e)=>{
        let id = Math.floor(Math.random()*10000);
        this.setState({
            id,
            value:e.target.value
        })
    }

    onSubmitClick = (e)=>{
        e.preventDefault();
        this.props.onSub(this.state.id,this.state.value);
        this.setState({
            value:""
        });
    }
    
    render() {
        return (
            <div className="form">
                <form onSubmit={this.onSubmitClick}>
                    <input type="text" name="name" value={this.state.value} onChange={this.handler}/>
                    <button type="submit">Add item</button>
                </form>
            </div>
        )
    }
}
