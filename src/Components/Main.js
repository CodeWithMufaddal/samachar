import React, { useState, useEffect } from 'react'
import './Main.css'
import News from './News'
import { useNewsData } from '../Context/DataProvider'
import Spinner from './Spinner'



const Main = () => {
   const { article, loading, setLoading } = useNewsData()
   return (
      <div className="main">
         {/* <Spinner /> */}
         <div className="my-4  flex flex-wrap justify-items-center justify-center w-full  ">
            {loading === true ? article.map((news, i) => { return <News news={news} key={i} /> }) : <Spinner />}
         </div>
      </div>
   )
}

export default Main