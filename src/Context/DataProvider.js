import React, { createContext, useContext, useState, useEffect, useRef } from 'react'

const NewsData = createContext();

const DataProvider = ({ children }) => {

   const [loading, setLoading] = useState(false)
   const [article, setArticle] = useState([])
   const [news, setNews] = useState({
      type: 'top-headlines',
      country: 'in',
      categories: 'sports',
      q: '',
      from: '',
      to: '',
      sortBy: '',
      pageSize: '',
      page: 1,
   })



   const fetchdata = async (req, res) => {
      const { type, country, categories, q, from, to, sortBy, pageSize, page } = news
      let data = await (await fetch(`https://newsapi.org/v2/${type}?country=${country}&apiKey=9948b7c6b8794e318f7ff0b809d5294c`)).json()
      console.log(news, 'at fetchdata')
      setLoading(true)
      console.log(data, "this is data")
      setArticle(data.articles)
   }


   useEffect(() => {
      fetchdata();
      console.log('use Effect call')
      return () => {
         fetchdata();
      }
   }, [setArticle, setNews, news])


   return (
      <NewsData.Provider value={{ article, setArticle, news, setNews, fetchdata, loading, setLoading }}>
         {children}
      </NewsData.Provider>
   )
}

const useNewsData = () => {
   return useContext(NewsData)
}

export { DataProvider, useNewsData }