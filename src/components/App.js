import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilter } from './action.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text))} />
                <TodoList todos={this.props.visibleTodos} onTodoClick={text => dispatch(completeTodo(index))} />
                <Footer filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
            </div>
        );
    }
}

//根据过滤条件来选择展示的todo项
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

//定制mapStsteToProps函数，来给ui组件传递这个时间片段的过滤条件和显示的todo项列表
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(App);