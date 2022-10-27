import React, {useState, useEffect} from 'react'
import hackernews from '../../constants/hackernews.json'
import News from './News'
import Searchbar from '../Searchbar/Searchbar'
import SearchFeature from '../Main/SearchFeature'

const FetchData = () => {

    const DEFAULT_URL= "http://hn.algolia.com/api/v1/items/:id";

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [searchdata, setSearchdata] = useState(DEFAULT_URL)


    // const newsarray = hackernews.hits
    

  

    // function getData() {

    //     setIsLoading(true)

    //         fetch(url) //anfragen von API um JSON zu erhalten
    //             .then(response => response.json()) //JSON format in JS Object umwandeln
    //             .then(data => setNews(data)) //JS Object verarbeiten z.B. console.log

    //     setIsLoading(false)
    //     }


    useEffect(() => {

        // getData();
        setNews(hackernews.hits)

                
        }, [])

  

   useEffect(() => {
      // getData(); 
      return (
        <>
    
         <SearchFeature searchdata={searchdata} setSearchdata={setSearchdata} />
         <News news={news} setNews={setNews} /> 
        </> 
      )
   }, [searchdata])  
         

  
}

export default FetchData