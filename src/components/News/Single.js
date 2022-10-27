import React from 'react'
import './Single.css'

const Single = ({key, title, url, createdat, author}) => {

  console.log(title)

  function handleClick(){

  }
  
  return (
    <div className='news-wrapper' key={key}>

      <div className='news-url'>
      <a href={url} target="_blank"><button> Original </button></a>
      </div>
     <div className='news-title'>{title}</div> 
     
     <div className='news-author'>{author}</div>
     <div className='news-createdat'>{createdat}</div>
    </div>
  )
}

export default Single


// import React from 'react'

// export default function Single({key, title, url, createdat, author})  {

//   console.log(title)
  
//   return (
//     <div key={key}>
//       {title}
//     </div>
//   )
// }

