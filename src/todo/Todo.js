import React, { Component } from 'react'

class Todo extends Component {

    render(){
        let active = this.props.status === 'done' ? 'done' : 'new';
        return (
            <li>
                <div className={`Todo ${active}`}>
                    <input type="checkbox" onClick={this.props.onTodoClick}></input>
                    <span className="Todo-text">{this.props.description}</span>
                </div>
            </li>
        );
    }
}

export default Todo;