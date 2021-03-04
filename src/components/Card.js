import React, { Component } from 'react'
import Item from './Item.js'
import Form from './Form.js'
import './card.css'

export default class Card extends Component {
    state = {
        data:[]
    }

    componentDidMount(){
        const d = ["Carlos","maria","Guerra"];
        this.setState({
            data:[...d]
        })
    }

    onSubmit = (e)=>{
        console.log(e)
        const d = [...this.state.data,e]
        this.setState({
            data:[...d]
        })
    }

    render() {
        return(
            <>
            <Form onSub={this.onSubmit}/>
            <div className="items">
                {this.state.data.map((e)=>{
                   return <Item name={e} key={e} />
                })}
            </div>
            </>
        
        )
    }
}
