import React from 'react'
import FetchData from './FetchData'

const News = ({news, setNews}) => {

  console.log(news)

  const generateNewsList = 
    
    news.map((item) => {
      console.log(item.title)
    })
 
  

  return (
    <>
    {generateNewsList} 
    <h1> Hallo </h1>
    </>
  )
}

export default News