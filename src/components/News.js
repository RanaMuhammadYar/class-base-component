import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matt Novak",
      title: "Here’s How to Find the Original Bitcoin Manifesto in Your Mac",
      description:
        "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech company’s mainline operating system to everybody’s (least) favorite cryptographic digital currency. Read mor…",
      url: "https://gizmodo.com/bitcoin-apple-mac-bitcoin-white-paper-1850307069",
      urlToImage:
        "https://i.insider.com/6417b59ffa3bcb001907f1a8?width=1200&format=jpeg",
      publishedAt: "2023-04-06T15:30:00Z",
      content:
        "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech companys mainline operating system to everybodys… [+3865 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=716f5da955e944f4b326dcc6e485500b";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Today News</h2>
        <div className="container py-2 row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 py-3" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  urlToImage={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <a href="" className="btn btn-dark">
          &laquo; Previous
          </a>
          <a href="" className="btn btn-dark">
            Next &raquo;
          </a>
        </div>
      </div>
    );
  }
}

export default News;
