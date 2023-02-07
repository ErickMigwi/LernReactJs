import React, { Component } from 'react';
import { ReactDOM } from 'react';
export class  Counter1 extends React.Component {
//  constructor(props) {
//     super(props),
//     this.state={ count: 50}
//     this.handleIncrement.handleIncrement.bind(this)
//     this.handleDecrement.handleDecrement.bind(this)
// }
 state= {
    count:5
 }
 handleIncrement=()=>{
  this.setState({count:this.state.count+10});
 }
 handleDecrement=()=>{ 
  this.setState({count:this.state.count + 20});
  
}

        render() {
        return(
            <div className = 'counter'>
                <span className ='numbers'>{this.state.count}</span>
                <span className ='button'>
                    <button onClick={this.handleIncrement}> + </button>
                    <button onClick={this.handleDecrement} > - </button>
                </span>

            </div>
        )
    }
}
export default Counter1;