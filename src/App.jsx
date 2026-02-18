import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import LoginPage from "./pages/LoginPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App











// import Counter from "./components/Counter"
// import Form from "./components/Form"
// import ReactHookForm from "./components/ReactHookForm"
// import UserProfile from "./components/UserProfile"

// const App = () => {
//   const username = "John Doe"
//   const num1 = 10
//   const num2 = 20

//   return (
//     <div>
//       {/* <h1>React JS</h1>
//       <p>The username is {username}.</p>
//       <p>
//         The sum of {num1} and {num2} is {num1 + num2}.
//       </p>

//       <UserProfile name="John Doe" age={24} address="ktm" />
//       <UserProfile name="Alice" age={25} address="btk" />
//       <UserProfile name="Ram Sharma" age={22} address="lalitpur" /> */}

//       {/* <Counter /> */}
//       {/* <Form /> */}
//       <ReactHookForm />
//     </div>
//   )
// }

// export default App