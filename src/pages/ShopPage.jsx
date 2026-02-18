import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const ShopPage = () => {
  const {
    data: products,
    isLoading,
    error
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      )
      return response.data
    }
  })

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="container shop-container">
      <h2 className="shop-title">Product List</h2>

      <div className="product-list">
        {products.slice(0, 10).map((item) => (
          <div className="product-card">
            <img
              src={item.images[0]}
              alt={item.title}
              className="product-img"
            />
            <h3 className="product-title">{item.title}</h3>
            <p className="price">${item.price}</p>
            <button className="btn-primary">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ShopPage
