
import React, {useEffect, useState} from 'react'
import SearchFeature from './SearchFeature'
import './Main.css'
import dataJSON from '../../constants/hackernews.json'
import FetchData from '../News/FetchData'




const Main = () => {


function displayData(){

    return <div data={dataJSON.hits}></div>

}



   /* if(loading) {

        return <h1>insert spinner here ... </h1>
    }*/



  return (

    <div id="main">
    
    <h1 id="hackernews">Neues aus der IT-Welt</h1>
    <FetchData/>


    </div>

  )
}

export default Main