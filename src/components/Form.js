import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state = {value:''}
    }


    handler = (e)=>{
        this.setState({
            value:e.target.value
        })
    }

    onSubmitClick = (e)=>{
        e.preventDefault();
        this.props.onSub(this.state.value);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitClick}>
                    <input type="text" name="name" value={this.state.value} onChange={this.handler}/>
                    <button type="submit">Add item</button>
                </form>
            </div>
        )
    }
}
