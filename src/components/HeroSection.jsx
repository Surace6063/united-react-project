import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section'>
       {/* left */}
       <div className='hero-info'>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates, itaque facilis sunt neque quidem mollitia delectus dolorum quae laudantium!
        </p>
        <button>Explore More</button>
       </div>

       {/* right */}
       <div className='hero-img'>
          <img src="feature-img.jpg" alt="feature"  />
       </div>
    </div>
  )
}
export default HeroSection