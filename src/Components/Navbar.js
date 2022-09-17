import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNewsData } from '../Context/DataProvider'


const Navbar = () => {

   const { news, setNews, fetchdata, setArticle } = useNewsData()

   const updateCategory = async (e) => {
      setNews(news => ({ ...news, 'categories': e.target.title }))
      console.log(news, 'updated')
   }




   return (

      <nav className="w-100 text-red-900 border shadow p-4 flex  overflow-hidden navbar ">

         <section className="main  flex items-center flex justify-between ">
            <Link to='/' >
               <div className="logo  ">
                  <img className="w-full" src="./Img/logo.png" alt="newsLogo" />
               </div>
            </Link>

            <div className="drowpdown">
               <button  type="button" className="ToggleCategory mr-5">
                  <div className="toggleCateIcon">
                     <img src="https://img.icons8.com/ios/50/000000/menu-squared-2--v1.png" />
                  </div>
               </button>
               <div className="categories">
                  <ul className="list relative flex font-bold w-3/6 justify-between  text-green-900">
                     <li className="catItem" title="business" onClick={updateCategory} >business</li>
                     <li className="catItem" title="entertainment" onClick={updateCategory} >entertainment</li>
                     <li className="catItem" title="general" onClick={updateCategory} >general</li>
                     <li className="catItem" title="health" onClick={updateCategory} >health</li>
                     <li className="catItem" title="science" onClick={updateCategory} >science</li >
                     <li className="catItem" title="sports" onClick={updateCategory} >sports</li >
                     <li className="catItem " title="technology" onClick={updateCategory} >technology</li>
                  </ul >
               </div >
            </div>

         </section >

      </nav >
   )
}

export default Navbar