import React, {Component} from 'react';

 export default class Counter extends React.Component{
     state= {
         count: 0
     };
    render(){
        return (<div>
            <span>{}</span>
            <button>Increment</button>
        </div>);
    }
}

