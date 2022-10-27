import React, {useEffect, useState} from 'react'
import SearchFeature from './SearchFeature'
import './Main.css'
import dataJSON from '../../constants/hackernews.json'




const Main = () => {

//test ob die Daten da sind
 console.table(dataJSON.hits);

function displayData(){

    return <div data={dataJSON.hits}></div>

}



   /* if(loading) {

        return <h1>insert spinner here ... </h1>
    }*/



  return (

    <div id="main">
    <SearchFeature />
    <h1 id="hackernews">Neues aus der IT-Welt</h1>


    <div id="container-data">



    </div>

    </div>

  )
}

export default Main