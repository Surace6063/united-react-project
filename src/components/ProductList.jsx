import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const ProductList = () => {
  const {data:products,isLoading,error} = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        return response.data
    }
  })
 
  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  console.log(products)

  return (
    <div className="product-list">
       {
        products.slice(0,4).map(item => (
          <div className="product-card">
            <img src={item.images[0]} alt={item.title} 
            className="product-img" />
            <h3 className="product-title">{item.title}</h3>
            <p className="price">${item.price}</p>
            <button className="btn-primary">Add to cart</button>
          </div>
        ))
       }
    </div>
  )
}
export default ProductList