import React from 'react';
import ReactDom from 'react-dom';

require('../styles/footer.css');

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(filter,e){
        e.stopPropagation();
        e.preventDefault();
        this.props.onFilterChange(filter);
    }

    renderFilter(filter,name){
        if(filter===this.props.filter){
            return (<span className='navItem active'>{name}</span>);
        }

        return (<a className='navItem' onClick={this.handleClick.bind(this,filter)}>{name}</a>);
    }

    render(){
        return(
            <p className='navContainer'>
                {this.renderFilter('SHOW_ALL','ALL')}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {this.renderFilter('SHOW_ACTIVE','Active')}   
            </p>
        );
    }
}

export default Footer;