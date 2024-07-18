import { Link } from "react-router-dom"
import Hero from "../components/HeroHome"
import Product from "../components/Product"
import Video from "../components/VideoHome"
import { useContext } from "react"
import { LangContext } from "../context/LangContext"
import Practice from "../components/Practice"

const Home = () => {
  const [lang]=useContext(LangContext);
  return (
    <div>
      <Hero/>
      <p className="text-center h3">{lang=="az"?"You are in Kitchen":"Siz Mətbəxdəsiniz"}</p>
      <Product col={3} />
      <div className="w-100 text-center">
      <Link  to="/shop" >
      <button className="all-product-btn mt-5 ">{lang=="az"?"Shop all products":"Bütün məhsullar"}</button>
      </Link>
      </div>
      <Video/>
      <Practice/>
    </div>
  )
}

export default Home