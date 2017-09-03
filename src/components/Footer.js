import React from 'react';
import ReactDom from 'react-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(filter,e){
        console.log(filter);
        console.log(e);
        e.stopPropagation();
        e.preventDefault();
        this.props.onFilterChange(filter);
    }

    renderFilter(filter,name){
        console.log(filter);
        if(filter===this.props.filter){
            return name;
        }

        return (<a href='#' onClick={this.handleClick.bind(this,filter)}>{name}</a>);
    }

    render(){
        return(
            <p>
                Show:{' '}
                {this.renderFilter('SHOW_ALL','ALL')}{', '}
                {this.renderFilter('SHOW_COMPLETED','Completed')}{', '}
                {this.renderFilter('SHOW_ACTIVE','Active')}   
            </p>
        );
    }
}

export default Footer;