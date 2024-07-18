import { useParams } from "react-router-dom";
import { productData, productDataAz } from "../data/data";
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useCart } from "react-use-cart";
import swal from "sweetalert";
import Slider from "react-slick";
import { LangContext } from "../context/LangContext";
const ProductDetails = () => {
  const [lang] = useContext(LangContext);
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  useEffect(() => {
    setDetailsData(lang=="en"?productDataAz:productData);
  });
  const productFind = detailsData.find((i) => i.id == id);
  const {addItem} = useCart();
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {!productFind ? (
        <h1>Loading...</h1>
      ) : (
        <div className="product-details row">
          <div className="left col-md-6 col-sm-12 col-12 mb-5">
            <Slider {...settings}>
            <div className="img-con">
              <img src={productFind.image} alt="" />
            </div>
            <div className="img-con">
              <img src={productFind.image} alt="" />
            </div>
            </Slider>
            
          </div>
          <div className="right col-md-6 col-sm-12 col-12">
            <h3>{productFind.title}</h3>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="price">${productFind.price}</span>
            <hr />
            <p>
              {lang=="en"
              ?"Mebel insanların yaşayış yerlərində istifadə edilmək üçün nəzərdə tutulmuş mebel və bəzək məhsullarının ümumi adıdır. Mebel konsepti ümumiyyətlə qonaq otağı, yataq otağı, mətbəx, vanna otağı kimi daxili məkanları təşkil etmək üçün istifadə olunan bütün növ mebelləri əhatə edir. İnsanların rahatlığını və ehtiyaclarını ödəmək üçün nəzərdə tutulmuş Mebel növləri geniş çeşidə malikdir və funksionallığı, estetik xüsusiyyətləri və material keyfiyyəti baxımından fərqlənə bilər."
              :"Mebel is the general name of furniture and decoration products designed to be used in people's living spaces. The concept of Mebel generally includes all types of furniture used to organize interior spaces such as living room, bedroom, kitchen, bathroom. Mebel types designed to meet people's comfort and needs have a wide range and may differ in terms of their functionality, aesthetic features and material quality."
            }
            </p>
            <div className="dp-align gap-3">
              
            <button onClick={()=>{
              addItem(productFind)
              swal("Product added to cart", "", "success")   
            }} className="btn btn-success px-5 py-3">Add To Cart</button>  
              <button
                onClick={() => {
                  window.history.back();
                }}
                className="btn btn-warning px-5 py-3"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
