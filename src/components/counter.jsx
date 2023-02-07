import React, { Component} from 'react'
import { ReactDOM } from 'react';
class Counter extends Component {
 state ={
    count:0,
    heading: <h1>Hello world</h1>,
   // imageUrl: 'https://picsum.photos/200'
   tags: []
 }
//  constructor(){
//     super()
//     this.handleIncrement= this.handleIncrement.bind(this)
//  }
  handleIncrement =()=>{
  this.setState({count:this.state.count+1})
  console.log(this.state.count)
  }
  renderTags() {
    if(this.state.tags.length===0) return <p>This is an empty array</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
 }
    render(){
        let classes = "badge m-2 badge-";
        classes+= this.state.count=== 0 ? "warning" : "primary";
    return(
        <>
        {/* <img src={this.state.imageUrl} alt="" srcset="" /> */}
        <span className={classes}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
        {/* {this.renderTags()}
        {this.state.tags.length===0 && "Create a new tag"} */}
        </>
    )
  }
  formatCount(){
    // const {heading} = this.state
    const {count} = this.state
    return count === 0 ? <h1>Zero</h1>: count

    
  }
}
 
export default Counter;