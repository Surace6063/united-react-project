import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const CategoryList = () => {

  const {data:categories,isLoading,error} = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories')
        return response.data
    }
  })
 
  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>
  
  return (
    <div className="category-list">
      {categories?.slice(0,5)?.map((cat) => (
        <div key={cat.id} className="category-name">
          <img src={cat.image} alt={cat.name} className="cat-img" /> 
          <h3>{cat.name}</h3>
        </div>
      ))}
    </div>
  )
}
export default CategoryList



// import { useEffect, useState } from "react"

// const CategoryList = () => {
//     const [categories,setCategories] = useState(null)
//     const [isLoading,setIsLoading] = useState(false)
//     const [error,setError] = useState(null)

//   useEffect(() => {
//     // function to fetch categories from api
//     const getCategories = async () => {
//         setIsLoading(true)
//         setError('')
//       try {
//         const response = await fetch(
//           "https://api.escuelajs.co/api/v1/categories"
//         )
//         const data = await response.json()
//         console.log(data)
//         setCategories(data)
//       } catch (error) {
//         console.log(error)
//         setError('Error fetching data!')
//       }finally{
//         // set isLoading state false regardless of data is fetched or not
//         setIsLoading(false) 
//       }
//     }

//     getCategories()
//   }, [])

//   if(isLoading){
//     return <p>loading...</p>
//   }

//   if(error){
//     return <p>{error}</p>
//   }

//   return (
//     <div className="category-list">
//       {categories?.slice(0,5)?.map((cat) => (
//         <div key={cat.id} className="category-name">
//           <img src={cat.image} alt={cat.name} className="cat-img" /> 
//           <h3>{cat.name}</h3>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default CategoryList
