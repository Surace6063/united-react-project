import { useEffect, useState } from "react"

const CategoryList = () => {
    const [categories,setCategories] = useState(null)

  useEffect(() => {
    // function to fetch categories from api
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        )
        const data = await response.json()
        console.log(data)
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories()
  }, [])

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
