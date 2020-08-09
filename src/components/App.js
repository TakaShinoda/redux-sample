import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from './Button'
import { Message } from './Message'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    )
  }
}

// コンポーネントにストアを接続するための関数
// 変数 = connect(設定する内容)(コンポーネント)
//App = connect()(App)

export default App
