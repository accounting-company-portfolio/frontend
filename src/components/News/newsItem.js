import React, { Component } from "react";
import "./newsItem.css";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: null,
    };
  }

  componentDidMount() {
    // Fetch data from the backend API
    fetch("http://localhost:5000/news")
      .then((response) => response.json())
      .then((newsData) => {
        this.setState({ newsData });
        console.log(newsData);
      });
  }

  render() {
    return (
      <div>
        <h1>News</h1>
        <div className="news-section">
          {this.state.newsData ? (
            this.state.newsData.response.map((news) => (
              <div key={news._id} className="news-card">
                <h2>{news.mediaTitle}</h2>
                <img src={news.mediaUrl} alt={news.mediaTitle} />
                <p>{news.description}</p>
                <p className="date">
                  {new Date(news.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <h1>No News</h1>
          )}
        </div>
      </div>
    );
  }
}

export default NewsItem;
