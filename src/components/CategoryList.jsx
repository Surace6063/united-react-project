import { useEffect } from "react"

// dummy data
const categories = [
  { id: 1, name: "clothes" },
  { id: 2, name: "shoes" },
  { id: 3, name: "electronics" },
  { id: 4, name: "cap" },
  { id: 5, name: "food" }
]

const CategoryList = () => {
  useEffect(() => {
    // function to fetch categories from api
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        )
        const data = response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories()
  }, [])

  return (
    <div className="category-list">
      {categories.map((cat) => (
        <div key={cat.id} className="category-name">
          {cat.name}
        </div>
      ))}
    </div>
  )
}
export default CategoryList
