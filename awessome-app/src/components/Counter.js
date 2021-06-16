import React, {Component, PureComponent} from 'react';


export class Counter extends PureComponent{

    state = {
        count: 5,
        msg: "hello"
    
    }
    //reference to the input field
    inpRef = React.createRef();


    constructor(props){
        super(props);
        this.state.count1 = this.state.count + 1;
        console.log(this.state);
    }

    

    //event handler(arrow functions)
    inc = (evt) => {
        // setState is async
        // setState(slice_of_the_updatedState, callback_invoked_after_state_is_updated)
        // state to be considered as immutable (this.state.count++; will not work)
        console.log(evt);
        var updatedState = {
            count: this.state.count + 1
        }
        this.setState(updatedState, () => {
            console.log("count", this.state.count);
            this.setState({
                count1: this.state.count1 + 1
            })
        });
        
    }
    decr = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    change = (evt) => {

        this.setState({
            count : parseInt(evt.target.value)
        })
    }
    update = () => {

        this.setState({
            count: parseInt(this.inpRef.current.value)
        })
    }
    render(){
        //return View(JSX)
        console.log("Counter render")
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Count: {this.state.count}</p>
                <div>
                    {/* html <button onclick="inc();"></button> */}
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    {/* Controlled Input */}
                    Count: <input type="number" value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    Updated: <input type="number" ref={this.inpRef}/>
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log("Counter componentDidMount")
    }
    componentDidUpdate(){
        console.log("Counter componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("Counter componentWillUnmount")
    }
    // shouldComponentUpdate(nProps, nState){

    //     return true;
    // }
}

//export default Counter;