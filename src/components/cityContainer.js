import React from 'react';

export default class CityDiv extends React.Component{
    render(){
        return (
                <div className='cityDiv'
                  style={{ background: `url('${this.props.background}') no-repeat center center` }}>
                    <h2>{this.props.title}</h2>
                </div>
              
        )
    }
}