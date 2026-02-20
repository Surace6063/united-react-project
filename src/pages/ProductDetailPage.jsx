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
    <div className="container product_detail_section">
      <img src={product.images[0]} alt={product.title} className="product_image"  />

      {/* product info */}
      <div className="product_info">
         <p className="cat_name">
          {product.category.name}
         </p>
         <h2 className="p_title">
          {product.title}
         </h2>
         <p className="p_price">
          ${product.price}
         </p>

         <div>
            <h4 className="desc_title">Description</h4>
            <p className="p_desc">{product.description}</p>
         </div>

         {/* add to cart */}
         <div className="add_to_cart">
           <button>+</button>
           <span className="qty">0</span>
           <button>-</button>
           <button className="btn-primary">Add to cart</button>
         </div>

      </div> 
    </div>
  )
}
export default ProductDetailPage