// import React, { useState, useEffect } from 'react'
// import NewsCard from './newspage'
// import Layout from '../shareholder'
// const news = () => {
// //   const [news, setNews] = useState(null)
// //   useEffect(() => {
// //     // console.log("data")
// //     async function fetchNews() {
// //       //const response = await fetch('http://localhost:5000/api/adminnews')
// //       const data = await response.json()
// //       if(response.ok){
// //         // console.log("data")
// //         setNews(data)
// //         console.log(data)
// //       }
// //       else{
// //         console.log("error")
// //       }
// //     }
// //  fetchNews()
// //   }, [])

//   return (
    
//     <shareholder>
//     <div className="container mx-auto px-4 py-8">
//       <div className="text-2xl font-bold mb-8">News</div>
//       <div className="flex flex-col md:flex-row">
//         {/* {news.map(item => (
//           <NewsCard
//             key={item.id}
//             title={item.title}
//             description={item.description}
//             type={item.type}
//             image={item.image}
//           />
//         ))} */}
//         {news && <NewsCard adminnews={news}/>} 
//       </div>
//     </div>
//     </shareholder>
//   )
// }
// export default news

import Layout from '../shareholder'
import React from 'react'

function news() {
  return (
    <Layout>
    <div>news</div>
    </Layout>
  )
}

export default news