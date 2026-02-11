// dummy data
const categories = [
    {id:1, name:"clothes"},
    {id:2, name:"shoes"},
    {id:3, name:"electronics"},
    {id:4, name:"cap"},
    {id:5, name:"food"}
]

const CategoryList = () => {
  return (
    <div className="category-list">
        {
            categories.map(cat =>(
                <div key={cat.id} className="category-name">
                    {cat.name}
                </div>
            ))
        }
    </div>
  )
}
export default CategoryList