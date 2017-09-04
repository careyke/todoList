import React from 'react';
import ReactDom from 'react-dom';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let todoClassName=this.props.completed?'completed':'noCompleted';
        return(
            <li onClick={this.props.onClick} className={todoClassName} >{this.props.text}</li>
        );
    }
}

export default Todo;