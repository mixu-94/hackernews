import React, {useState, useEffect} from 'react'
import hackernews from '../../constants/hackernews.json'
import News from './News'
import Searchbar from '../Searchbar/Searchbar'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const FetchData = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    function async(){
      
      setIsLoading(true)

      setTimeout(() => {

      const newsarray =  hackernews.title

      setIsLoading(false)
    }, 2000)
    } 


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
        async();


                
        }, [])

        console.log(news)


        if(isLoading){
          return(
          <Box style={{}}>
            <CircularProgress style={{color:"orange", margin:"50%"}}/>
          </Box>



         /*    <h1>data loading ...</h1> 
        */



          )   

        }
        
         

  return (
    <>
     <Searchbar/>
    
     <News news={news} setNews={setNews} /> 
     </>
  )
}

export default FetchData