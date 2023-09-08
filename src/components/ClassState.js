import React, { Component } from 'react'
import bell1 from "./bell1.png"
import bell2 from "./bell2.png"

export class ClassState extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        msg : "Welcome",
         desc:"Subscribe",
         imageURL :bell1
      };
    }
    Buttonchange=()=>{
        this.setState({msg : "Please click on the bell icon",desc:"Subscribed"});
    }
    Imagechange=()=>{
        this.setState({imageURL : bell2,msg:"Thank you"});
    }
    render() {
    return (
      <div>
        <h3>Hey here is my youtube channel</h3>
        <button onClick={this.Buttonchange}>{this.state.desc}</button>
        <img style={{width:"40px" ,height:"40px"}} src={this.state.imageURL}
        onClick={this.Imagechange} alt="ok"/>
        <h4>{this.state.msg}</h4>
      </div>
    )
  }
}

export default ClassState