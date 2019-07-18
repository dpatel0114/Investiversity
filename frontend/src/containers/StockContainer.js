import React, { Component } from 'react'

export class StockContainer extends Component {
  render() {
    return (
      <div>
        {this.props.stocks}
      </div>
    )
  }
}

export default StockContainer
