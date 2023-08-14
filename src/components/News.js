import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize:  8,
    category: "general"
  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading : false,
      page : 1,
      totalResults: 0
    }

    document.title = `${this.props.category} - NewsMonkey`
  }

  defaultImage = "https://www.livemint.com/lm-img/img/2023/08/02/600x338/Nitin_Chandrakant_Desai_1690958148634_1690958154402.jpg"


  async updateNews() {
    this.props.setProgress(10)
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({articles: parsedDate.articles, 
      totalResults: parsedDate.totalResults,
      loading: false})
    this.props.setProgress(100)

  }


  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updateNews()

    

  // }

  // handlePreviousClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews()


  // }


  async componentDidMount() {
    this.updateNews()
  }

  fetchMoreData = async () => {

    this.setState({page: this.state.page + 1})

    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`

    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({articles: this.state.articles.concat(parsedDate.articles), 
      totalResults: parsedDate.totalResults,
      })


  }

  
  render() {
    
    return (
      <>

        <h2 className='text-center'>News monkey - Top {this.props.category} headlines</h2>

        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
        >

          {console.log(this.state.articles.length)}

        <div className="container">
        <div className="row my-3">
        {this.state.articles.map((element) =>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title? element.title : ""} desc = {element.description? element.description : ""} imageUrl = {element.urlToImage ? element.urlToImage : this.defaultImage} newsUrl = {element.url} author= {element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
      
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News