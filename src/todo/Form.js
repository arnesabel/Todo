import React, { Component } from 'react'

class Form extends Component {

    state = { description: ''}

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.description){
            let todo = { description: this.state.description };
            this.props.onSubmit(todo);
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Go running..." value={this.state.description} 
                                                               onChange={(e)=>{this.setState({description: e.target.value})}}></input>
                <button>Add Todo</button>
            </form>
        );
    }
}

export default Form;