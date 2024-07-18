import { IoIosArrowForward } from "react-icons/io";
import Product from "../components/Product";
import { category, categoryAz, productDataAz } from "../data/data";
import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { LangContext } from "../context/LangContext";
const ShopBody = () => {
  const [productData] = useContext(ProductContext);
  const [filteredData, setFilteredData] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [lang] = useContext(LangContext);
  const filterClick = (category) => {
    const productFilter = (lang == "en" ? productDataAz : productData).filter(
      (x) => x.category == category
    );
    setFilteredData(productFilter);
  };
  return (
    <div className="shop-body row">
      <div className="left col-md-4">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <ul className="category">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <h5>{lang == "az" ? "Categories" : "Kateqoriyalar"}</h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  {(lang == "en" ? categoryAz : category).map((item) => (
                    <li
                      onClick={() => filterClick(item.category)}
                      key={item.id}
                      className="dp-between"
                    >
                      <div className="dp-align">
                        <IoIosArrowForward />
                        <p>{item.category}</p>
                      </div>
                      <span>(8)</span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </ul>
          <div className="price">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <h5>{lang == "az" ? "Price" : "Qiymət"} </h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <div>
                    <label
                      htmlFor="customRange3"
                      className="form-label"
                    ></label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                  </div>
                  <div className="dp-between">
                    <span>
                      Min {lang == "az" ? "Price" : "Qiymət"}:$
                      <label>Min Price: {minPrice}</label>
                    </span>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </div>
                  <span>Max {lang == "az" ? "Price" : "Qiymət"}:${maxPrice}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="color">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <h5>{lang == "az" ? "Color" : "Rəng"} </h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <ul>
                    <li className="dp-between">
                      <div className="dp-align">
                        <div className="cricle-color bg-danger "></div>
                        <span>{lang == "az" ? "Red" : "Qirmizi"}</span>
                      </div>
                      <span>(1)</span>
                    </li>
                    <li className="dp-between">
                      <div className="dp-align">
                        <div className="cricle-color bg-warning"></div>
                        <span>{lang == "az" ? "Orange" : "Narinci"}</span>
                      </div>
                      <span>(5)</span>
                    </li>
                    <li className="dp-between">
                      <div className="dp-align">
                        <div className="cricle-color bg-dark"></div>
                        <span>{lang == "az" ? "Black" : "Qara"}</span>
                      </div>
                      <span>(3)</span>
                    </li>
                    <li className="dp-between">
                      <div className="dp-align">
                        <div className="cricle-color bg-primary"></div>
                        <span>{lang == "az" ? "Blue" : "Mavi"}</span>
                      </div>
                      <span>(5)</span>
                    </li>
                    <li className="dp-between">
                      <div className="dp-align">
                        <div className="cricle-color bg-success"></div>
                        <span>{lang == "az" ? "Green" : "Yaşıl"}</span>
                      </div>
                      <span>(2)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left col-md-8">
        <div className="head"></div>
        <Product
          maxPrice={maxPrice}
          minPrice={minPrice}
          filter={filteredData}
          route={true}
          col={4}
        />
      </div>
    </div>
  );
};

export default ShopBody;
