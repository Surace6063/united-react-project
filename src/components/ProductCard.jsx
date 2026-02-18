import { Link } from "react-router-dom"

const ProductCard = ({item}) => {
  return (
    <Link to={`/product/${item.slug}`} className="link">
       <div className="product-card">
            <img src={item.images[0]} alt={item.title} 
            className="product-img" />
            <h3 className="product-title">{item.title}</h3>
            <p className="price">${item.price}</p>
            <button className="btn-primary">
                Add to cart
            </button>
        </div>
    </Link>
  )
}
export default ProductCard