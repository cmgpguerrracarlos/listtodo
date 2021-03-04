import React, { Component } from 'react'
import './item.css';

export default class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="button">
                    <button >delete</button>
                    <button>edit</button>
                    <button>done</button>
                </div>
            </div>
        )
    }
}
