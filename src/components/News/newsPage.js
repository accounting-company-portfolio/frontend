import React, { Component } from "react";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
    };
  }

  componentDidMount() {
    // Fetch data from the backend API
    fetch("http://localhost:5000/news")
      .then((response) => response.json())
      .then((newsData) => {
        this.setState({ newsData });
      });
  }

  render() {
    const { newsData } = this.state;
    return (
      
      <div className="news-section">
        {newsData.map((news) => (
          <div key={news._id} className="news-card">
            <h2>{news.mediaTitle}</h2>
            <img src={news.mediaUrl} alt={news.mediaTitle} />
            <p>{news.description}</p>
            <p>{news.createdAt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsPage;

// import React from "react";
// import './NewsPage/newsPage.css';

// class NewsPage extends React.Component {
//   render() {
//     return (

//       <main>
//         <section className="lp">
//           <section className="lp__header">
//             <h1>News</h1>
//             <p>All the latest news about your favorite artists and releases.</p>
//           </section>
//           <section className="lp__grid">
//             <div className="lp__gridItem lp__gridItem__image">
//             </div>
//             <div className="lp__gridItem lp__gridItem__text">
//               <p className="lp__gridItemText-sm">News</p>
//               <h2 className="lp__gridItemText-lg">Melody Moore, Artist in the Spotlight</h2>
//               <p className="lp__gridItemText-md">New DSD Release! "An American Song Album". This album is a fine collection of songs by America composers presented...</p>
//               <p className="lp__gridItemText-sm lp__gridItemText-sm-bw"><strong>Floor van der Holst</strong> on May 02, 2019</p>
//             </div>
//           </section>
//         </section></main>
//     );
//   }
// };

// export default NewsPage;

// import React, { Component } from 'react';
// import './NewsPage/newsPage.css';

// class NewsPage extends Component {
//   render() {
//     return (
//       <div className="news-container">
//         <h1 className="news-header">Latest News</h1>
//         <div className="news-item">
//           <img src="https://via.placeholder.com/150" alt="news" className="news-image" />
//           <div className="news-content">
//             <h2 className="news-title">News Title</h2>
//             <p className="news-description">News Description</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsPage;



// import React, { Component } from 'react';
// import "./NewsPage/newsPage.css";
// // import NewsItem from './NewsItem/newsItem';

// class NewsPage extends Component {
//   state = {
//     newsData: []
//   };

//   componentDidMount() {
// //     // Make a request to the backend to retrieve news data
//     fetch('/api/news')
//       .then(response => response.json())
//       .then(data => 
//         console.log(data);
//         this.setState({ newsData: data }))
//       .catch(error => console.error(error));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.newsData.map(newsItem => (
//           <div className="news-item" key={newsItem.id}>
//             <img src={newsItem.image} alt={newsItem.title} />
//             <h2 className="news-title">{newsItem.title}</h2>
//             <p  className="news-description">{newsItem.description}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default NewsPage;
