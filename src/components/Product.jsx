import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import { LangContext } from "../context/LangContext";
import { productDataAz } from "../data/data";
import { BsBagCheck } from "react-icons/bs";


const Product = ({maxPrice,minPrice, col, filter }) => {
  const [lang] = useContext(LangContext); 
  const [productData] = useContext(ProductContext); 
  const { addItem } = useCart(); 
  const [wishItems, setWishItems] = useState([]);
 
  const filteredProductPrice = (lang=="en"?productData:productDataAz).filter(product => product.price >= minPrice && product.price <= maxPrice);
  console.log(filteredProductPrice);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    setWishItems(items);
    
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(wishItems));
  }, [wishItems]);
  const udateWislist = (item) => {
    const findIndex = wishItems.findIndex((f) => f.id === item.id);
    console.log(findIndex);
    if (findIndex == -1) {
      const findWishProduct = (
        lang === "en" ? productDataAz : productData
      ).find((f) => f.id === item.id);
      setWishItems((prevItems) => [...prevItems, findWishProduct]);
      swal((lang=="en"?"İstək siyahısına əlavə edildi":"Added to wish list") , "","success")
    } else {
      const updatedWishlist = wishItems.filter((f) => f.id !== item.id);
      setWishItems(updatedWishlist);
      swal((lang=="en"?"Favorilerden Çıkarıldı!":"Removed from Wishlist") ,"", "info")
    }
  };
  const isWishList=(item)=>{
    const heartFill=wishItems.some(s=>s.id===item.id)
    return heartFill
  }
  return (
    <section data-aos="fade-up" className="row product mt-5">
      {!filter? (lang === "en" ? productDataAz : productData).map((item) => (
            <div key={item.id} className={`col-md-${col} col-sm-6 col-12 box`}>
              <div className="img-block">
                {item.imageCount > 1 ? (
                  <img src={item.image[0]} alt="" />
                ) : (
                  <img src={item.image} alt="" />
                )}

                <div className={item.sale === true ? "sale" : "dp-none"}>
                  <span>Sale!</span>
                </div>

                <div className="top-icons">
                  <div onClick={() => udateWislist(item)}>
                    <div className="link text-dark">
                    {isWishList(item)? (<FaHeart style={{color:"red"}} className="icon"/>):( <FaRegHeart className="icon" />)}
                   
                    </div>
                  </div>
                  <div>
                    <Link to={`/product/${item.id}`} className="link text-dark">
                      <IoSearchSharp className="icon" />
                    </Link>
                  </div>
                </div>
                <div
                  onClick={() => {
                    addItem(item);
                    swal("Ürün sepete eklendi!", "", "success");
                  }}
                  className="add-cart cursor"
                >
                  <div>
                  <BsBagCheck />
                  </div>
                </div>
              </div>
              <div className="text-btn dp-between">
                <div className="text-con">
                  <p>{item.title}</p>
                  <span>${item.price}</span>
                </div>
              </div>
            </div>
          ))
        : filter.map((item) => (
            <div key={item.id} className={`col-md-${col} col-sm-6 col-12 box`}>
              <div className="img-block">
                {item.imageCount > 1 ? (
                  <img src={item.image[0]} alt="" />
                ) : (
                  <img src={item.image} alt="" />
                )}

                <div className={item.sale === true ? "sale" : "dp-none"}>
                  <span>Sale!</span>
                </div>
                <div className="top-icons">
                  <div>
                    <div className="link text-dark">
                      <IoSearchSharp className="icon" />
                    </div>
                  </div>
                  <div>
                    <Link to={`/product/${item.id}`} className="link text-dark">
                      <IoSearchSharp className="icon" />
                    </Link>
                  </div>
                </div>

                {/* Sepete ekleme simgesi */}
                <div
                  onClick={() => {
                    addItem(item);
                    swal("Ürün sepete eklendi!", "", "success");
                  }}
                  className="add-cart cursor"
                >
                  <div>
                    <IoBagOutline className="icon" />
                  </div>
                </div>
              </div>

              {/* Ürün başlığı ve fiyatı */}
              <div className="text-btn dp-between">
                <div className="text-con">
                  <p>{item.title}</p>
                  <span>${item.price}</span>
                </div>
              </div>
            </div>
          ))}
    </section>
  );
};

export default Product;
