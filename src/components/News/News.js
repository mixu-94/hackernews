import React from 'react'
import FetchData from './FetchData'
import Single from './Single'
import './News.css'
import { v4 as uuidv4 } from 'uuid';
import './Single.css'


const News = ({news, setNews}) => {



  const generateNewsList = 
    
    news.map((item) => {
    
      const uid = uuidv4()
      
      if ( item.title ==="" || item.url === "" || item.title === null || item.url === null) {
        return
      } 
      return ( 
      
      <div key={uid}>
      <Single id={uuidv4()}  title={item.title} url={item.url} createdat={item.created_at} author={item.author} />
      </div>
      
      )
    })
 
  

  return (
    <>
    <div className='news-list'> 
    
    {generateNewsList} 
    
    </div>
    </>
  )
}

export default News