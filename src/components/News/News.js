import React from 'react'
import FetchData from './FetchData'
import Single from './Single'
import './News.css'

const News = ({news, setNews}) => {

  console.log(news)

  const generateNewsList = 
    
    news.map((item) => {
    

      return <Single key={item.objectID} title={item.title} url={item.url} createdat={item.created_at} author={item.author} />
    })
 
  

  return (
    <>
    <div className='news-list'> </div>
    {generateNewsList} 
    </>
  )
}

export default News