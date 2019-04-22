import React,  {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {

   

    render(){
        return( 
            <div className="TodoListContainer">
                <small>Custom Todo List with React</small>
                <ul className="TodoList">
                    {
                        this.props.
                            todos.map((t, i) => 
                                <Todo key={i} 
                                      id={t.id} 
                                      description={t.description} 
                                      status={t.status} 
                                      onTodoClick={ () => { this.props.onChangeStatus(t.id, t.status)}}
                                />)
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;