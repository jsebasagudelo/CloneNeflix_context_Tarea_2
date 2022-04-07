import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../Api/Requests'

// design pattern: Stateless
const Home = () => {
  return (
    <div>
      <Header/>
    <Banner/>
    <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchTopRated} isLargeRow/>
    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
    </div>
   
  )
}

export default Home