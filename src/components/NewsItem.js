import React, { Component } from 'react'

export class NewsItem extends Component {



  render() {
    let {title, desc, imageUrl, newsUrl, author, date, source} = this.props;
  
    return (
      <div>
        <div className="card" style={{width: "18 rem"}}>
          <div style={{position: "absolute", right: 0}}>
        <span 
        className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img src= {imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem