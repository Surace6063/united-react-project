import { useProducts } from "../api/productServices"
import ProductCard from "../components/ProductCard"

const ShopPage = () => {
  const {
    data: products,
    isLoading,
    error
  } = useProducts()

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="container shop-container">
      <h2 className="shop-title">Product List</h2>

      <div className="product-list">
        {products.slice(0, 10).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
export default ShopPage
