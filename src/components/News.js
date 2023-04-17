import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles =  [
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Katharine Trendacosta on Two Cents, shared by Katharine Trendacosta to Lifehacker",
      "title": "How to Get a Free Credit Report",
      "description": "Your credit report is a snapshot of your financial life. It’s a record of your credit history, including your credit cards, loans, and other debts. It’s also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if you’re a…",
      "url": "https://twocents.lifehacker.com/how-to-get-a-free-credit-report-1846640001",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_5Z7Z7Zg--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1b0b0f5d0f1b0f1f.jpg",
      "publishedAt": "2021-01-04T19:00:00Z",
      "content": "Your credit report is a snapshot of your financial life. Its a record of your credit history, including your credit cards, loans, and other debts. Its also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if youre a… [+2507 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Katharine Trendacosta on Two Cents, shared by Katharine Trendacosta to Lifehacker",
      "title": "How to Get a Free Credit Report",
      "description": "Your credit report is a snapshot of your financial life. It’s a record of your credit history, including your credit cards, loans, and other debts. It’s also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if you’re a…",
      "url": "https://twocents.lifehacker.com/how-to-get-a-free-credit-report-1846640001",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_5Z7Z7Zg--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1b0b0f5d0f1b0f1f.jpg",
      "publishedAt": "2021-01-04T19:00:00Z",
      "content": "Your credit report is a snapshot of your financial life. Its a record of your credit history, including your credit cards, loans, and other debts. Its also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if youre a… [+2507 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Katharine Trendacosta on Two Cents, shared by Katharine Trendacosta to Lifehacker",
      "title": "How to Get a Free Credit Report",
      "description": "Your credit report is a snapshot of your financial life. It’s a record of your credit history, including your credit cards, loans, and other debts. It’s also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if you’re a…",
      "url": "https://twocents.lifehacker.com/how-to-get-a-free-credit-report-1846640001",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_5Z7Z7Zg--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1b0b0f5d0f1b0f1f.jpg",
      "publishedAt": "2021-01-04T19:00:00Z",
      "content": "Your credit report is a snapshot of your financial life. Its a record of your credit history, including your credit cards, loans, and other debts. Its also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if youre a… [+2507 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },

      "author": "Katharine Trendacosta on Two Cents, shared by Katharine Trendacosta to Lifehacker",
      "title": "How to Get a Free Credit Report",
      "description": "Your credit report is a snapshot of your financial life. It’s a record of your credit history, including your credit cards, loans, and other debts. It’s also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if you’re a…",
      "url": "https://twocents.lifehacker.com/how-to-get-a-free-credit-report-1846640001",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_5Z7Z7Zg--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1b0b0f5d0f1b0f1f.jpg",
      "publishedAt": "2021-01-04T19:00:00Z",
      "content": "Your credit report is a snapshot of your financial life. Its a record of your credit history, including your credit cards, loans, and other debts. Its also a record of your payment history, which is a big factor in your credit score. Your credit report is used by lenders to determine if youre a… [+2507 chars]"
    },
  ]
  constructor (){
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false
      
  }
}
  render() {
    return (
      <div>
        This is a news component
        <NewsItems title = "demo" description = "test" />
        <NewsItems title = "XYZ" description = "ABC" />
      </div>
    )
  }
}

export default News
