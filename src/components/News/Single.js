import React from 'react'
import { Navigate } from 'react-router-dom';
import './Single.css'


const Single = ({id, title, url, createdat, author}) => {


  function handleClick(e){
  
    window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes")


  }
  
  return (
    <div className='news-wrapper' onClick={handleClick} key={id}>

      <div className='news-url'>
      <a href={url} target="_blank"><button> Website </button></a>
      </div>
     <div className='news-title'>{title}</div> 
     
     <div className='news-author'>{author}</div>
     <div className='news-createdat'>{createdat}</div>
    </div>
  )
}

export default Single

