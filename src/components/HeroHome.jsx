import { RiSofaLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { LangContext } from "../context/LangContext";
import { useContext } from "react";

const Hero = () => {
  const [lang] = useContext(LangContext);
  return (
    <section className="hero-home">
      <div className="head">
       <div data-aos="fade-up" className="dp-align"><button className="sofa-btn"><RiSofaLine className="icon"/></button>
         <span 
         data-aos="fade-up"
         data-aos-delay="200"
         >{lang=="az"?"Elevate Your Lifestyle":"Həyat tərzinizi yüksəldin"}</span></div>
        <p 
        data-aos="fade-up"
        data-aos-delay="400"
        >{lang=="az"?"with Our Furniture":"Mebellərimizlə"} </p>
        <div 
        data-aos="fade-up" 
        data-aos-delay="600"
        className="dp-align"><span>{lang=="az"?"Creations":"Yaradıcılıqlar"}Creations</span>
        <Link to="/shop">
          <button className="shop-btn">{lang=="az"?"Shop Now":"Indi Al"}</button>
        </Link></div>
      </div>
      <div className="slider">
        <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/m1_slide_03.jpeg" alt="" />
      </div>
      <div className= "row bottom">
        <div data-aos="fade-up"
         data-aos-delay="200" className="col-md-4 col-sm-6 col-12 box">
          <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/m1_b_01.jpg" alt="" />
          <p>{lang=="az"?"LIVING ROOM":"QONAQ OTAGI"}</p>
        </div>
        <div data-aos="fade-up"
         data-aos-delay="400" className="col-md-4 col-sm-6 col-12 box">
          <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/m1_b_02.jpg" alt="" />
          <p>{lang=="az"?"BED ROOM":"YATAQ OTAGI"}</p>
        </div>
        <div data-aos="fade-up"
         data-aos-delay="600" className="col-md-4 col-sm-6 col-12 box">
          <div>
            <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/m1_b_03.jpg" alt="" />
          <p>{lang=="az"?"KITCHEN":"MƏTBƏX"}</p>
          </div>
          <div>
            <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/m1_b_04.jpg" alt="" />
          <p> {lang=="az"?"KIDS ROOM":"UŞAQ OTAQI"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero