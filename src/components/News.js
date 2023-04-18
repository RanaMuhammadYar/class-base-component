import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kyle Barr",
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
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "Cryptoverse: Bitcoin traders like their options - Reuters",
      description: "Cryptoverse: Bitcoin traders like their options  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtYml0Y29pbi10cmFkZXJzLWxpa2UtdGhlaXItb3B0aW9ucy0yMDIzLTA0LTA0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage:
        "https://i.guim.co.uk/img/media/557a4b7ba8d4a7ac4ffdc68894f2b3caa276f344/0_235_3551_2132/master/3551.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=56808976844276c471575e281886d474",
      publishedAt: "2023-04-04T05:18:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Carla Mozée",
      title:
        "Michael Saylor's MicroStrategy adds to its bitcoin trove, purchasing 1,045 coins for $24 million",
      description:
        "The business software maker now holds 140,000 bitcoin and the value of that stash was nearly $4 billion with bitcoin trading above $28,000.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-microstrategy-cryptocurrency-michael-saylor-coins-buys-holding-value-mstr-2023-4",
      urlToImage:
        "https://i.insider.com/631133643fe7c40019e4f2fd?width=1200&format=jpeg",
      publishedAt: "2023-04-05T16:47:03Z",
      content:
        "Michael Saylor is facing a $100 million lawsuit for tax evasionMarco Bello/Getty Images\r\n<ul>\n<li>MicroStrategy continued to build its bitcoin stash in early April, buying 1,045 coins. </li>\n<li>It b… [+1587 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Bitcoin near 9-month high as bank turmoil sparks rally - Reuters.com",
      description:
        "Bitcoin near 9-month high as bank turmoil sparks rally  Reuters.com",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9iaXRjb2luLW5lYXItOS1tb250aC1oaWdoLWJhbmstdHVybW9pbC1zcGFya3MtcmFsbHktMjAyMy0wMy0yMC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage:
        "https://i.insider.com/6430035a3007470019fe1513?width=1200&format=jpeg",
      publishedAt: "2023-03-20T06:52:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };




    
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Today News</h2>
        <div className="container py-2 row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 py-3" key ={element.url} >
                <NewsItems
                  title={element.title}
                  description={element.description}
                  urlToImage={element.urlToImage}
                  newsUrl = {element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
