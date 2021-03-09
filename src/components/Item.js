import React, { Component } from 'react'
import './item.css';

export default class Item extends Component {
    state = {
        done:false
    }

    onDeleteHand = (e)=>{
        e.preventDefault();
        this.props.onDelete(this.props.id);
        console.log("Se borra el elemento");
    }
    
    onCheck = (e)=>{
        e.preventDefault();
        this.setState({done:!this.state.done});
        console.log("Realizada la tarea");
    }

    render() {
        return (
            <div className="item">
                <div className={this.state.done?"name done":"name"}>
                    {this.props.name}
                </div>
                <div className="button">
                    <button className="btn" onClick={this.onDeleteHand}>X</button>
                    <button className="btn" onClick={this.onCheck}>✓</button>
                </div>
            </div>
        )
    }
}
