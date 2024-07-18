import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoClose, IoSearch, IoSearchSharp } from "react-icons/io5";
import {
  MdEmail,
  MdOutlinePassword,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { LangContext } from "../context/LangContext";
import { ModeContext } from "../context/ModeContext";
import { productDataAz } from "../data/data";
import { TiDeleteOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import swal from "sweetalert";
const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [productData] = useContext(ProductContext);
  const [lang, setLang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);
  const { totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [userIconClick, setUserIconClick] = useState(false);
  const [loginRegister, setLoginRegister] = useState(false);
  const [myAccountPage, setMyAccountPage] = useState(false);
  const [userBaseData, setUserBaseData] = useState([]);
  const loginedUser = [];

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [fillInput, setFillInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const savedState = localStorage.getItem("myAccountPage");
    if (savedState !== null) {
      setMyAccountPage(JSON.parse(savedState));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("myAccountPage", JSON.stringify(myAccountPage));
  }, [myAccountPage]);

  useEffect(() => {
    mode === "dark"
      ? (document.body.className = "")
      : document.body.classList.add("active");

    if (userIconClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
      document.body.style.overflowX = "hidden";
    }
  }, [mode, userIconClick]);
  useEffect(() => {
    const userBase = JSON.parse(localStorage.getItem("userBase"));
    setUserBaseData(userBase);
  }, []);
  useEffect(() => {
    if (
      userData.name != "" &&
      userData.email != "" &&
      userData.password != ""
    ) {
      localStorage.setItem("userBase", JSON.stringify(userBaseData));
    }
  }, [userBaseData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const isValidValue = (email, password, name) => {
    if (name == "") {
      setFillInput((fill) => ({
        ...fill,
        name: "Please Write Your Name",
      }));
    } else {
      setFillInput((fill) => ({
        ...fill,
        name: "",
      }));
    }
    if (email == "") {
      setFillInput((fill) => ({
        ...fill,
        email: "Please Write Your Email",
      }));
    } else {
      setFillInput((fill) => ({
        ...fill,
        email: "",
      }));
      if (email) {
        console.log("Salam");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Invalid email address",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "",
          }));
        }
      }
    }

    if (password == "") {
      setFillInput((fill) => ({
        ...fill,
        password: "Please Write Password",
      }));
    } else {
      setFillInput((fill) => ({
        ...fill,
        password: "",
      }));
      if (password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password:
              "Password must be at least 8 characters long and contain at least one letter and one number",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: "",
          }));
        }
      }
    }
  };
  const loginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isValidValue(userData.email, userData.password, userData.name);
    if (
      fillInput.name == "" &&
      errors.email === "" &&
      errors.password === "" &&
      userData.email != "" &&
      userData.password != ""
    ) {
      setUserBaseData((oldData) => [...oldData, userData]);
      setLoginRegister(true);
      swal("You are registered", "", "success");
    }
  };
  const loginSubmit = (e) => {
    e.preventDefault();

    isValidValue(loginUser.email, loginUser.password);
    if (
      errors.email == "" &&
      errors.password == "" &&
      loginUser.email != "" &&
      loginUser.password != ""
    ) {
      userBaseData.map((user) => {
        if (
          (setMyAccountPage(true),
          user.email == loginUser.email && user.password == loginUser.password)
        ) {
          swal("Success", "", "success");
          setUserIconClick(false);
        } else {
          setMyAccountPage(false);
          swal("Wrong", "", "warning");
        }
      });
    }
  };
  return (
    <nav className="dp-between">
      <a href="/" className="logo">
        <h2>Miniture</h2>
      </a>
      <ul className="dp-align">
        <li>
          <NavLink className="nav-link" to="/">
            {lang === "en" ? "Ana Sehife" : "Home"}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/shop">
            {lang === "en" ? "Magaza" : "Shop"}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            {lang === "en" ? "Haqqimizda" : "About Us"}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            {lang === "en" ? "Bizimle Elaqe" : "Contact Us"}
          </NavLink>
        </li>
      </ul>
      <div className="nav-right dp-align">
        <div className="user cursor">
          <div
            onClick={() => {
              userIconClick && setUserIconClick(false);
            }}
            className={userIconClick ? "bg-blur active" : "bg-blur"}
          ></div>
          <FaRegUser
            onClick={() => {
              setUserIconClick(true);
            }}
            className="icon"
          />
          <div className={myAccountPage == false ? "dp-none" : "my-account"}>
            <div className={userIconClick ? "my-account-con  row" : "dp-none"}>
              <div className="head text-center mt-4">
                <h1>My Account</h1>
              </div>
              <div className="body row">
                <div className="col-md-6 col-sm-12 col-12">
                  <div className="img-block">
                    <img
                      src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  {myAccountPage === true &&
                    console.log(
                      userBaseData.find(
                        (u) =>
                          u.email === loginUser.email &&
                          u.password === loginUser.password
                      )
                    )}
                  <button
                    onClick={() => {
                      swal({
                        title: "Are you sure?",
                        text: "Do you Log Out",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          setMyAccountPage(false);
                          swal("You Log Out", {
                            icon: "success",
                          });
                        } else {
                          swal("Your profil safe");
                        }
                      });
                    }}
                    className="btn btn-dark"
                  >
                    <h3>Log Out </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={myAccountPage == true ? "dp-none" : ""}>
            <div className={userIconClick ? "register-login" : "dp-none"}>
              <div className="register-login-con dp-center">
                <TiDeleteOutline
                  className="icon"
                  onClick={() => {
                    setUserIconClick(false);
                  }}
                />
                <div className="register row">
                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="register-left">
                      <img
                        src="https://portal.lumoshive.com/assets/icons/Register.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12">
                    {/* Register */}
                    <form action="#" onSubmit={handleSubmit}>
                      <div
                        className={loginRegister ? "dp-none" : "register-right"}
                      >
                        <h2 className="text-center">Register</h2>
                        <div className="input-con">
                          <p className="head-text">Name</p>
                          <label htmlFor="name" className="dp-align">
                            <FiUser className="icon" />
                            <input
                              name="name"
                              onChange={handleInputChange}
                              id="name"
                              type="text"
                              placeholder="User"
                            />
                          </label>
                          <p>{fillInput.name}</p>
                        </div>
                        <div className="input-con">
                          <p className="head-text">Email</p>
                          <label htmlFor="email" className="dp-align">
                            <MdEmail className="icon" />
                            <input
                              name="email"
                              onChange={handleInputChange}
                              id="email"
                              type="text"
                              placeholder="example@gmail.com"
                            />
                          </label>

                          <p>{errors.email}</p>
                          <p>{fillInput.email}</p>
                        </div>
                        <div className="input-con">
                          <p className="head-text">Password</p>
                          <label htmlFor="password" className="dp-align">
                            <MdOutlinePassword className="icon" />
                            <input
                              name="password"
                              onChange={handleInputChange}
                              id="password"
                              type="password"
                              placeholder="Password"
                            />
                          </label>
                          <p>{errors.password}</p>
                          <p>{fillInput.password}</p>
                        </div>
                        <div className="dp-center mt-5 ">
                          <button className="submit-btn btn btn-success py-3">
                            Sign Up
                          </button>
                        </div>
                        <p
                          onClick={() => {
                            setLoginRegister(true);
                          }}
                          className="have-account mt-2 text-center"
                        >
                          Do you have account? <span>Login</span>
                        </p>
                      </div>
                    </form>
                    {/* Login */}
                    <div
                      className={loginRegister ? "register-right" : "dp-none"}
                    >
                      <form action="#" onSubmit={loginSubmit}>
                        <h2 className="text-center">Login</h2>
                        <div className="input-con mt-5">
                          <p className="head-text">Email</p>
                          <label htmlFor="email-login" className="dp-align">
                            <MdEmail className="icon" />
                            <input
                              name="email"
                              onChange={loginInputChange}
                              id="email-login"
                              type="text"
                              placeholder="example@gmail.com"
                            />
                          </label>
                          <p>{errors.email}</p>
                          <p>{fillInput.email}</p>
                        </div>
                        <div className="input-con mt-4">
                          <p className="head-text">Password</p>
                          <label htmlFor="password-login" className="dp-align">
                            <MdOutlinePassword className="icon" />
                            <input
                              name="password"
                              onChange={loginInputChange}
                              id="password-login"
                              type="password"
                              placeholder="Password"
                            />
                          </label>
                          <p>{errors.password}</p>
                          <p>{fillInput.password}</p>
                        </div>
                        <div className="dp-center mt-5 ">
                          <button className="submit-btn btn btn-success py-3">
                            Login
                          </button>
                        </div>
                        <p
                          onClick={() => {
                            setLoginRegister(false);
                          }}
                          className="have-account mt-2 text-center"
                        >
                          Do you not have an account? <span>Register</span>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div onClick={() => setSearchOpen(true)} className="search cursor">
          <IoSearchSharp className="icon" />
        </div>
        <div
          className={searchOpen ? "active search-section" : "search-section"}
        >
          <div className="search-con">
            <div className="input-con dp-center">
              <div className="input">
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                />
                <IoSearch className="icon" />
              </div>
              <div>
                <div>
                  {!inputValue
                    ? ""
                    : (lang === "en" ? productDataAz : productData)
                        .filter((p) =>
                          p.title
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        )
                        .map((item) => (
                          <div key={item.id} className="dp-align gap-2 mt-3">
                            <div className="img-block">
                              <img
                                style={{ width: "50px" }}
                                src={item.image}
                                alt=""
                              />
                            </div>
                            <div className="dp-between w-100">
                              <div className="title">{item.title}</div>
                              <Link
                                onClick={() => {
                                  setSearchOpen(false);
                                }}
                                to={`/product/${item.id}`}
                                className="btn btn-light"
                              >
                                {lang === "en" ? "Product" : "Məhsul"}
                              </Link>
                            </div>
                          </div>
                        ))}
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setSearchOpen(false);
            }}
            className="close-icon dp-center cursor"
          >
            <span>
              <IoClose />
            </span>
          </div>
        </div>
        <Link to="/wishlist" className="heart cursor">
          <FaRegHeart className="icon" />
        </Link>
        <Link
          to="/cart"
          className={userIconClick == true ? "bag active" : "bag"}
        >
          <MdOutlineShoppingBag className="icon" />
          <span>{totalItems}</span>
        </Link>
        <button
          className="btn btn-light"
          onClick={() => {
            const newLang = lang === "az" ? "en" : "az";
            setLang(newLang);
            localStorage.setItem("lang", newLang);
          }}
        >
          {lang === "az" ? "AZ" : "EN"}
        </button>
        <button
          onClick={() => {
            const newMode = mode === "dark" ? "light" : "dark";
            setMode(newMode);
            localStorage.setItem("mode", newMode);
          }}
          className="btn btn-light"
        >
          {mode}
        </button>
      </div>
    </nav>
  );
};

export default Header;
