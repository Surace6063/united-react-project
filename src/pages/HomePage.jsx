import CategoryList from "../components/CategoryList"
import HeroSection from "../components/HeroSection"
import ProductList from "../components/ProductList"

const HomePage = () => {
  return (
    <div className="container">
       <HeroSection />

       {/* category list */}
       <div className="category-section">
          <h3 className="title">Category list</h3>
          <CategoryList />
       </div>

       {/* product list */}
       <div className="product-section">
        <h3 className="title">Product list</h3>
        <ProductList />
       </div>
    </div>
  )
}
export default HomePage