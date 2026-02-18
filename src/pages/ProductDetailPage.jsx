import { useParams } from "react-router-dom"
import { useProduct } from "../api/productServices"

const ProductDetailPage = () => {
  // accessing slug vlaue from url
  const {slug} = useParams()

  // fetching single product
  const {data:product,isPending,error} = useProduct(slug)

  if(isPending) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}
export default ProductDetailPage