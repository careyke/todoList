import React from 'react';
import ReactDom from 'react-dom';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        e.stopPropagation();
        e.preventDefault();
        this.props.onCompletedClick();
    }

    render(){
        return(
            <li onClick={this.handleClick} style={{
                textDecoration:this.props.completed?'line-through':'none',
                cursor:this.props.completed?'default':'pointer'
            }} >{this.props.text}</li>
        );
    }
}

export default Todo;