import { useContext } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaArrowRightLong, FaSquareXTwitter } from "react-icons/fa6";
import { LangContext } from "../context/LangContext";

const Footer = () => {
  const [lang] = useContext(LangContext);

  return (
    <footer>
      <div className="container">
        <div className="row footer-con">
          <ul className="col-md-3 col-sm-6 col-12 box">
            <li>{lang == "az" ? "Our Store" : "Mağazamız"}</li>
            <li>
              {lang == "az"
                ? "Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups."
                : "Miniature ən böyük beynəlxalq moda şirkətlərindən biridir, dünyanın ən böyük distribütor qruplarından biridir."}
            </li>
            <li className="social-icons-li dp-align gap-2 ">
              <div>
                <FaFacebookSquare />
              </div>
              <div>
                <FaSquareXTwitter />
              </div>
              <div>
                <FaInstagramSquare />
              </div>
              <div>
                <FaLinkedin />
              </div>
            </li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-12 box">
            <li>{lang == "az" ? "Our Store" : "Mağazamız"}</li>
            <li>{lang == "az" ? "My account" : "Mənim Hesabım"}</li>
            <li>{lang == "az" ? "Shoping Cart" : "Alış-veriş sebeti"}</li>
            <li>{lang == "az" ? "Wishlist" : "İstək siyahısı"}</li>
            <li>{lang == "az" ? "Product Compare" : "Mağazamız"}</li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-12 box">
            <li>{lang == "az" ? "Our Store" : "Mağazamız"}</li>
            <li>{lang == "az" ? "My account" : "Mənim Hesabım"}</li>
            <li>{lang == "az" ? "Shoping Cart" : "Alış-veriş sebeti"}</li>
            <li>{lang == "az" ? "Wishlist" : "İstək siyahısı"}</li>
            <li>{lang == "az" ? "Product Compare" : "Mağazamız"}</li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-12 box">
            <li>{lang == "az" ? "Let's get in touch" : "Gəlin əlaqə saxlayaq"}</li>
            <li>{lang == "az" ? "Sign up for our newsletter and receive 10% off your" : "Bülletenimizə abunə olun və 10% endirim əldə edin"}</li>
            <li>
              <div className="input-con dp-between">
                <input type="email" placeholder={lang=="az"?"Enter your email adress...":"E-poçt ünvanınızı daxil edin..."} />
                <FaArrowRightLong className="icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
