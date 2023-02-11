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
      <div className="news-section">
        <div className="section-content news">
          <div className="title">
            <h2>News</h2>
          </div>
          <div className="cards">
            {this.state.newsData ? (
              this.state.newsData.response.map((news) => (
                <div key={news._id} className="card">
                  <div className="image-section">
                    <img src={news.mediaUrl} alt={news.mediaTitle} />
                  </div>
                  <div className="article">
                    <h4>{news.mediaTitle}</h4>
                    <p>{news.description}</p>
                    <div className="posted-date">
                      <p>{news.createAt}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No News</h1>
            )}
            {/* <div className="news-view">
              <a href="" className="button">
                Read More
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
