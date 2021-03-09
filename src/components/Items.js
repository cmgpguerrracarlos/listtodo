import React, { Component } from 'react'
import Item from './Item.js'

export default class Items extends Component {
    

    render() {

        return (
            <div className="items">
                {this.props.data.map((el)=>{
                    return <Item name={el.val} id={el.id} key={el.id} onDelete={this.props.onDelete}/>
                })}
            </div>
        )
    }
}
