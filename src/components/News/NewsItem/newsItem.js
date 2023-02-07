// import React, { Component } from "react";

// class NewsPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newsData: [],
//     };
//   }

//   componentDidMount() {
//     // Fetch data from the backend API
//     fetch("<API_END_POINT>")
//       .then((response) => response.json())
//       .then((newsData) => {
//         this.setState({ newsData });
//       });
//   }

//   render() {
//     const { newsData } = this.state;
//     return (
//       <div className="news-section">
//         {this.state.news.map((news) => (
//           <div key={news._id} className="news-card">
//             <h2>{news.mediaTitle}</h2>
//             <img src={news.mediaUrl} alt={news.mediaTitle} />
//             <p>{news.description}</p>
//             <p>{news.createdAt}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default NewsPage;

// import React, { Component } from "react";

// class NewsItem extends Component {
//   render() {
//     const { image, title, description } = this.props;
//     return (
//       <div>
//         <img src={image} alt={title} />
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </div>
//     );
//   }
// }

// export default NewsItem;
