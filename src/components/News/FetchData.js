import React, {useState, useEffect} from 'react'
import hackernews from '../../constants/hackernews.json'
import News from './News'

const FetchData = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    const newsarray = hackernews.hits

    

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

        console.log(news)

     
         

  return (
     <News news={news} setNews={setNews} /> 
  )
}

export default FetchData