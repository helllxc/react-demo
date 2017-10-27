import React, { Component } from 'react';
class RepeatArray  extends Component{
    constructor() {
        super();
    }
    render(){
        var arr = [
            <h1>Hello world!</h1>,
            <h2>React is awesome</h2>,
        ];
        var names = ['Alice', 'Emily', 'Kate'];
        return (
            <div>
                {arr}
                {
                    names.map((name,idx) =>{return <div key={idx}>Hello, {name}!</div>;} )
                }
            </div>
        );
    }
}
export default RepeatArray;