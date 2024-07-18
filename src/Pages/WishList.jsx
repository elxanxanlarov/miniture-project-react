import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import { TiDeleteOutline } from "react-icons/ti";
import swal from "sweetalert";
import { productData, productDataAz } from "../data/data";
const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [lang] = useContext(LangContext);
  // const [mode] = useContext(ModeContext);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    setWishList(items);
  }, []);

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishList.filter((item) => item.id !== itemId);
    setWishList(updatedWishlist);
    localStorage.setItem("items", JSON.stringify(updatedWishlist));
    swal(
      lang == "en" ? "İstək siyahısından silindi" : "Removed from Wishlist",
      "",
      "info"
    );
  };
  const getWishListData = () => {
    return wishList.map(item => {
      return (lang === "en" ? productDataAz : productData).find(product => product.id === item.id);
    }).filter(item => item !== undefined); // undefined ürünleri filtreleyin
  };
  return (
    <div className="wish-list">
      {getWishListData().length === 0 ? (
        <div className="wish-empty text-center">
          <h1>
            {lang == "en" ? "İstək Siyahısı Boşdur" : "Wish List is Empty"}
          </h1>
          <div className="img-block">
            <img
              style={{ width: "400px" }}
              className="ms-5"
              src="https://gifdb.com/images/high/transparent-heart-sticker-red-heart-recharging-l2lzp1rr8ydpgkeg.gif"
              alt=""
            />
          </div>
          <Link to="/" className="btn btn-outline-dark mb-4 px-5 py-3 ms-1">
            {lang == "en" ? "Əsas səhifəyə qayıt" : "Go To Home"}
          </Link>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{lang == "en" ? "Sil" : "Remove"}</th>
              <th scope="col">{lang == "en" ? "Məhsul" : "Product"}</th>
              <th scope="col">{lang == "en" ? "Qiymət" : "Price"}</th>
              <th scope="col">{lang == "en" ? "Daha çox məlumat" : "More Info"}</th>
            </tr>
          </thead>
          <tbody>
            {getWishListData().map((item) => (
              <tr key={item.id}>
                <td>
                  <div
                    onClick={() => removeFromWishlist(item.id)}
                    className="fs-3 "
                  >
                    <TiDeleteOutline className="cursor text-danger" />
                  </div>
                </td>
                <td className="dp-align gap-2">
                  <div>
                    <img style={{ width: "50px" }} src={item.image} alt="" />
                  </div>
                  <p>{item.title}</p>
                </td>
                <td>${item.price}</td>
                <td>
                <Link to={`/product/${item.id}`} className="link text-dark">
                <button className="btn btn-outline-success">{lang == "en" ? "Məhsul" : "Product"}</button>
                    </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WishList;
