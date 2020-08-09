import React from 'react'
import { connect } from 'react-redux'

function mappingState(state) {
  return state
}

class Message extends React.Component {
  render() {
    return (
      <p>
        {this.props.message}: {this.props.counter}
      </p>
    )
  }
}

Message = connect(mappingState)(Message)

export default Message
