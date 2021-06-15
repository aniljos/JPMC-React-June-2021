import React, {Component} from 'react';


export class Counter extends Component{

    render(){
        //return View(JSX)
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Count: 0</p>
            </div>
        )
    }
}

//export default Counter;