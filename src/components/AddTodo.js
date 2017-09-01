import React from 'react';
import ReactDom from 'react-dom';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e){
        e.stopPropagation();
        e.preventDefault();
        const node = ReactDom.findDOMNode(this.refs.input);
        const text=node.value.trim();
        this.props.onAddClick(text);
        node.value='';
    }

    render(){
        return(
            <div>
                <input type='text' ref='input' />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTodo;