import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilter } from './action.js';

const { SHOW_ALL } = VisibilityFilter;

//切换页签的reducer,根据状态值来过滤todolist展示的值
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

//处理todo事项的reducer
function todos(state = [], action) {
    console.log(action);
    console.log(action.type);
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false }];
        case 'COMPLETE_TODO':
            console.log('completed');
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], { completed: true }),
                ...state.slice(action.index + 1)
            ];
        default:
            console.log('no');
            return state;
    }
}

//将碎片的reducer合并成一个整体的reducer
//碎片的reducer将整个state对象分成两个部分，一个是state.visibilityFilter;一个是state.todos。两个reducer分别来控制
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;