import React from 'react'
import { connect } from 'react-redux'

const mappingState = (state) => {
  return state
}

export class Message extends React.Component {
  render() {
    return (
      <p>
        {this.props.message}: {this.props.counter}
      </p>
    )
  }
}

// connectで渡されるステートはthis.propsに組み込まれる
Message = connect(mappingState)(Message)
