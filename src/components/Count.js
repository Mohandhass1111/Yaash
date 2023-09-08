import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
     Clickme=()=>{
        this.setState({count:this.state.count+1})
     }
  render() {
    return (
      <div>
        <button onClick={this.Clickme}>Touch me to add {this.state.count}</button>
      </div>
    )
  }
}

export default Count