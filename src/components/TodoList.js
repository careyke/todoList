import React from 'react';
import ReactDom from 'react-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        
    }

    completedClick(index){
        this.props.onTodoClick(index);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo,index)=>{
                        <Todo {...todo} key={index} onCompletedClick={this.completedClick(index)} />
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;