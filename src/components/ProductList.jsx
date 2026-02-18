import { useProducts } from "../api/productServices"
import ProductCard from "./ProductCard"

const ProductList = () => {
  const {data:products,isLoading,error} = useProducts()
 
  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div className="product-list">
       {
        products.slice(0,4).map(item => (
          <ProductCard key={item.id} item={item}  />
        ))
       }
    </div>
  )
}
export default ProductList