import React, { Component } from "react";
import "./newsPage.css";

class NewsPage extends Component {
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
      <div className="news-section">
        {this.state.newsData ? (
          this.state.newsData.response.map((news) => (
            <div key={news._id} className="news-card">
              <h2>{news.mediaTitle}</h2>
              <img src={news.mediaUrl} alt={news.mediaTitle} />
              <p>{news.description}</p>
              <p>{news.createdAt}</p>
            </div>
          ))
        ) : (
          <h1>No News</h1>
        )}
      </div>
    );
  }
}

export default NewsPage;
