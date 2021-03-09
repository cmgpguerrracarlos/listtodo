import React, { Component } from 'react'
import './item.css';

export default class Item extends Component {
    onDeleteHand = (e)=>{
        e.preventDefault();
        this.props.onDelete(this.props.id);
        console.log("Se borra el elemento");
    }
    onEdit = (e)=>{
        e.preventDefault();
        console.log("Se se edita");
    }
    onCheck = (e)=>{
        e.preventDefault();
        console.log("Realizada la tarea");
    }

    render() {
        return (
            <div className="item">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="button">
                    <button onClick={this.onDeleteHand}>delete</button>
                    <button onClick={this.onEdit}>edit</button>
                    <button onClick={this.onCheck}>done</button>
                </div>
            </div>
        )
    }
}
