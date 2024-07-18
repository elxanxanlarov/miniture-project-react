import ReactDOM from "react-dom";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "react-use-cart";
import { LangProvider } from "./context/LangContext.jsx";
import { ModeProvider } from "./context/ModeContext.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
ReactDOM.createRoot(document.getElementById("root")).render(
  <LangProvider>
    <ModeProvider>
      <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
      </ProductProvider>
    </ModeProvider>
  </LangProvider>
);
