import React from 'react';
import ReactDom from 'react-dom';
import Todo from './Todo.js';
console.log(Todo);

class TodoList extends React.Component{
    constructor(props){
        super(props);
        // this.handleClick=this.handleClick.bind(this);
    }

    // handleClick(){
        
    // }

    // completedClick(index){
    //     this.props.onTodoClick(index);
    // }

    render(){
        console.log(this.props.todos);
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo,index)=>{
                        //要有返回值，要返回一个组件数组，之后才可以被渲染
                        return <Todo {...todo} key={index} onClick={()=>this.props.onTodoClick(index)} />
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;