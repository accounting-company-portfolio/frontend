import React, { Component } from "react";
import './newsItem.css';

class NewsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news-section">
        <div className="section-content news">
          <div className="title">
            <h2>News</h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="image-section">
                <img src=""></img>
              </div>
              <div className="article">
                <h4>Title one</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati debitis quos nemo voluptate autem pariatur fugiat,
                  explicabo atque enim voluptatum ducimus sequi harum alias?
                  Voluptatum praesentium minus recusandae dolores dicta!
                </p>
              </div>
              <div className="news-view">
                <a href="" className="button">Read More</a>
              </div>
              <div className="posted-date">
                <p>Posted on jan 15 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}