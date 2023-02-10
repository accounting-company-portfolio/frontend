// import React, { Component } from "react";

// class NewsPage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="news-section">
//         <div className="section-content news">
//           <div className="title">
//             <h2>News</h2>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <div className="image-section">
//                 <img src=""></img>
//               </div>
//               <div className="article">
//                 <h4>Title one</h4>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Obcaecati debitis quos nemo voluptate autem pariatur fugiat,
//                   explicabo atque enim voluptatum ducimus sequi harum alias?
//                   Voluptatum praesentium minus recusandae dolores dicta!
//                 </p>
//               </div>
//               <div className="news-view">
//                 <a href="" className=""
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
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
