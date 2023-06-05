import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div>
        This is new components
        <NewsItems/>
      </div>
    )
  }
}

export default News
