import React from 'react'



const News = ({ news, i }) => {
   return (
      <article key={i} className="border flex  rounded  h-fit   w-2/6 m-2  article">
         <a href={news.url} className="w-full">
            <div className=" relative items-stretch flex-cols ">

               <div className="badge absolute -top-2 -right-3 z-10 bg-red-600 py-1 px-3 rounded-xl font-normal text-white">
                  <span>
                     {news.source.name}
                  </span>
               </div>

               <div className={`justify-center flex  rounded-t-lg `}>
                  <img className={`w-full rounded-t-lg ${news.urlToImage ? ' ' : 'w-60 h-52'}`} src={news.urlToImage ? news.urlToImage : "./Img/noImage.png"} alt="" />
               </div>

               <div className="news p-3">
                  <div className="newsName">
                     <div className="font-bold">
                        <span>
                           {news.title}
                        </span>
                     </div>
                  </div>

                  <div className="my-2">
                     <span>
                        {news.description ? news.description : "Not Available"}..
                     </span>
                  </div>
                  <div className="btn">
                     <button type="button" className="btn border p-2 px-4 m-2 shadow-md rounded bg-black text-white font-medium">
                        Read More
                     </button>
                  </div>


                  <div className="text-gray-400  flex justify-between">
                     <span className="pl-1 mx-1">
                        By {news.author ? news.author.slice(0, 25) : 'unknown'}
                     </span>
                     <span className="pl-1 flex justify-end whitespace-nowrap">
                        {news.publishedAt ? new Date(news.publishedAt).toUTCString().slice(4, 22) : "Not Available"}
                     </span>
                  </div>

               </div>

            </div>
         </a>
      </article>
   )
}

export default News