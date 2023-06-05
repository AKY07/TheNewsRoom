import React, { Component } from 'react'

export class NewsItems extends Component {
 
  render() {
    let {title,description}=this.props;
    return (
      <div>
       <div className="card" style={{width: "18rem"}}>
  <img src="https://ichef.bbci.co.uk/news/1024/branded_news/E086/production/_129987475_e29d333f12437d7f8b5435d2cce83d0840d0497c0_0_2589_17111000x661.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
