import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title,description,urlToImage,newsUrl} = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href={newsUrl} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
