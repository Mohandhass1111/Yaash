import React, { Component } from 'react'

export class ClsProps extends Component {
  render() {
    return (
      <div>
        <p>{this.props.about}</p>
        <p>Hello , we are {this.props.place} and {this.props.name} learners </p>
      </div>
    )
  }
}

export default ClsProps
