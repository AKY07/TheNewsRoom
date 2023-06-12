// import React, { Component } from "react";
// import NewsItems from "./NewsItems";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };
//   static defaultProps = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   capitaizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   constructor(props) {
//     super(props);
//     state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${capitaizeFirstLetter(
//       props.category
//     )} - The NEWS ROOM`;
//   }

//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${page}&pageSize=${props.pageSize}`;
//     setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }
//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=1&pageSize=${props.pageSize}`;
//     // setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//     updateNews();
//   }
//   handlePreviousClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${
//     //   props.country
//     // }&category=${
//     //   props.category
//     // }&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${
//     //   page - 1
//     // }&pageSize=${props.pageSize}`;
//     // setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();

//     // setState({
//     //   page: page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false,
//     // });
//     await setState({
//       page: page - 1,
//     });
//     updateNews();
//   };

//   handleNextClick = async () => {
//     // if (
//     //   !(
//     //     page + 1 >
//     //     Math.ceil(totalResults / props.pageSize)
//     //   )
//     // ) {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${
//     //     props.country
//     //   }&category=${
//     //     props.category
//     //   }&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${
//     //     page + 1
//     //   }&pageSize=${props.pageSize}`;
//     //   setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();

//     //   setState({
//     //     page: page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false,
//     //   });
//     // }
//     await setState({
//       page: page + 1,
//     });
//     updateNews();
//   };
//   // fetchMoreData = async () => {
//   //   setState({
//   //     page: page + 1
//   //   });
//   //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${page}&pageSize=${props.pageSize}`;
//   //   // setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();
//   //  setState({
//   //     articles: articles.concat(parsedData.articles),
//   //     totalResults: parsedData.totalResults,
//   //     // loading: false,
//   //   });
//   // };

//   render() {
//     return (
//       <div>
//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//           The NEWS ROOM - Top {capitaizeFirstLetter(props.category)}{" "}
//           Headlines
//         </h1>
//         {loading && <Spinner />}
//         {/* <InfiniteScroll */}
//           {/* dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner />}
//         > */}
//           {/* <div className="container"> */}
//             <div className="row">
//               {!loading &&
//               articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItems
//                       title={element.title ? element.title.slice(0, 45) : ""}
//                       description={
//                         element.description
//                           ? element.description.slice(0, 88)
//                           : ""
//                       }
//                       newsUrl={element.url}
//                       imageUrl={element.urlToImage}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           {/* </div> */}
//         {/* </InfiniteScroll> */}
//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={handlePreviousClick}
//           >
//             &larr; Previous
//           </button>

//           <button
//             disabled={
//               page + 1 >
//               Math.ceil(totalResults / props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark"
//             onClick={handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       <div/>
//     );
//    }
  
// }

// export default News;


// CLASS BASED


// import React, { Component } from "react";
// import NewsItems from "./NewsItems";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };
//   static defaultProps = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   constructor(props) {
//     super(props);
//     state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//     document.title = `${capitaizeFirstLetter(
//             props.category
//           )} - The NEWS ROOM`;
//   }

//   async updateNews(){
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKeys}&page=${page}&pageSize=${props.pageSize}`;
//     setState({ loading: true });
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     props.setProgress(100);
//   }
//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=1&pageSize=${props.pageSize}`;
//     // setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//     updateNews();
//   }
//   handlePreviousClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${
//     //   props.country
//     // }&category=${
//     //   props.category
//     // }&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${
//     //   page - 1
//     // }&pageSize=${props.pageSize}`;
//     // setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();

//     // setState({
//     //   page: page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false,
//     // });
//    await setState({
//       page:page-1
//     });
//     updateNews();
//   };

//   handleNextClick = async () => {
//     // if (
//     //   !(
//     //     page + 1 >
//     //     Math.ceil(totalResults / props.pageSize)
//     //   )
//     // ) {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${
//     //     props.country
//     //   }&category=${
//     //     props.category
//     //   }&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${
//     //     page + 1
//     //   }&pageSize=${props.pageSize}`;
//     //   setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();

//     //   setState({
//     //     page: page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false,
//     //   });
//     // }
//     await setState({
//       page:page+1
//     });
//     updateNews();
//   };
//   capitaizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       };
//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//         The NEWS ROOM - Top {capitaizeFirstLetter(props.category)}{" "}Headlines
//         </h1>
//         {loading && <Spinner />}

//         <div className="row">
//           {!loading &&
//             articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItems
//                     title={element.title ? element.title.slice(0, 45) : ""}
//                     description={
//                       element.description
//                         ? element.description.slice(0, 88)
//                         : ""
//                     }
//                     newsUrl={element.url}
//                     imageUrl={element.urlToImage}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={handlePreviousClick}
//           >
//             &larr; Previous
//           </button>

//           <button
//             disabled={
//               page + 1 >
//               Math.ceil(totalResults / props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark"
//             onClick={handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }



import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitaizeFirstLetter(
            this.props.category
          )} - The NEWS ROOM`;
  }

  async updateNews(){
    this.props.setProgress(10);
    // const url="https://newsapi.org/v2/everything?q=tesla&from=2023-05-12&sortBy=publishedAt&apiKey=166ec698f7f94e30a8da2ead068c31b8"
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }
  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
  await  this.setState({
      page:this.state.page-1
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=166ec698f7f94e30a8da2ead068c31b8&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
  await this.setState({
      page:this.state.page+1
    });
    this.updateNews();
  };
  capitaizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
        The NEWS ROOM - Top {this.capitaizeFirstLetter(this.props.category)}{" "}Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;



