import './App.css';


import React, { Component } from 'react'
import NavBar from './components/NavBar'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"



export default class App extends Component {
  pagenum = 5

  apiKey = process.env.REACT_APP_API_KEY

  state = {
    progress: 0
  }
  
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      {console.log(process.env.REACT_APP_API_KEY)}
        <Routes>
        <Route exact path='/Science' element= {<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pagesize = {this.pagenum} country="in" category="science"/>} />
        <Route exact path='/Business' element= {<News  apiKey={this.apiKey}setProgress={this.setProgress} key="business" pagesize = {this.pagenum} country="in" category="business"/>} />
        <Route exact path='/General' element= {<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pagesize = {this.pagenum} country="in" category="general"/>} />
        <Route exact path='/Health' element= {<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pagesize = {this.pagenum} country="in" category="health"/>} />
        <Route exact path='/Technology' element= {<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pagesize = {this.pagenum} country="in" category="technology"/>} />
        <Route exact path='/Sports' element= {<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pagesize = {this.pagenum} country="in" category="sports"/>} />
        <Route exact path='/Entertainment' element= {<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize = {this.pagenum} country="in" category="entertainment"/>} />
        </Routes>
        </Router>
      </>
    )
  }
}



