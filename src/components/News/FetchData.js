import React, {useState, useEffect} from 'react'
import hackernews from '../../constants/hackernews.json'
import News from './News'
import Searchbar from '../Searchbar/Searchbar'
import SearchFeature from '../Main/SearchFeature'
import './News.css'
import CircularProgress from '@mui/material/CircularProgress';

const FetchData = () => {

    const DEFAULT_URL= "https://hn.algolia.com/api/v1/search?query=react";

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [searchdata, setSearchdata] = useState(DEFAULT_URL)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)


    // const newsarray = hackernews.hits
    

  

   function getData() {

      

        setIsLoading(true)
        setTimeout(() => {

             fetch(searchdata) //anfragen von API um JSON zu erhalten
                .then(response => response.json()) //JSON format in JS Object umwandeln
                .then(data => setNews(data.hits)) //JS Object verarbeiten z.B. console.log

        setIsLoading(false)
        } , 3000)
      }


    useEffect(() => {

        getData();
      //   setNews(hackernews.hits)

                
        }, [])

  

   useEffect(() => {
      getData(); 
     
   }, [searchdata])  

   if(isLoading){
      return(
         <>
         <SearchFeature searchdata={searchdata} setSearchdata={setSearchdata} />
        <CircularProgress style={{margin: "50px 0 100px 50%", color: "orange"}}/>
        </>
    )}
         
   return (
      <>
  
       <SearchFeature searchdata={searchdata} setSearchdata={setSearchdata} />
       
       {news == "" || news[1].title === null || news[1].title === ""  ? <div className='no-results'><h1>No Results</h1></div> 
       : <News news={news} setNews={setNews} /> }
      </> 
    )
  
}

export default FetchData