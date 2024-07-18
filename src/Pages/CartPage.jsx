import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import swal from "sweetalert";
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
const CartPage = () => {
  const { items, removeItem, updateItemQuantity, isEmpty ,cartTotal,emptyCart} = useCart();
  const [lang] = useContext(LangContext);
  const [mode] = useContext(ModeContext);
  return (
    <div className="cart">
     
      {isEmpty ? (
        <div className="empty">
          <h1>{lang=="en"?"Səbətiniz boşdur":"Your cart is empty"}</h1>
          <img
            style={{ width: "30rem" }}
            src={mode=="light"
              ?"https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif"
              :"https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif"}
            alt=""
          />
          <Link to="/">
          <button className={mode=="dark"?"btn btn-outline-dark mb-4 px-5 py-3 mt-4":"btn btn-outline-light mb-4 px-5 py-3 mt-4" }>{lang=="en"?"Əsas səhifəyə qayıt":"Go Back Home"}</button>
          </Link>
        </div>
      ) : (
        <>
        <div className="text-end">
       <button onClick={()=>{
         window.history.back()
       }} className="btn btn-outline-dark mb-5 ">Back</button>
     </div>
        
         <div className="cart-con dp-align ">
           <table className="table">
             <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">Product</th>
                 <th scope="col">Price</th>
                 <th scope="col">Count</th>
                 <th scope="col">Remove</th>
               </tr>
             </thead>
             <tbody>
               {items.map((item,index) => (
                 <tr key={item.id}>
                   <th scope="row">{index+1}</th>
                   <td className="dp-align">
                     <img style={{ width: "60px" }} src={item.image} alt="" />
                     <div className="dp-cloumn mx-2">
                     <p >{item.title}</p>
                     <span>{item.price}</span>
                     </div>
                   </td>
                   <td>
                     <p>{((item.quantity)*(item.price)).toFixed(2) }</p>
                   </td>
                   <td>
                     <button
                       className="btn btn-danger"
                       onClick={() => {
                         if ((item.id, item.quantity < 2)) {
                           swal({
                             title: "Are you sure?",
                             text: "Once deleted, you will not be able to recover this imaginary file!",
                             icon: "warning",
                             buttons: true,
                             dangerMode: true,
                           }).then((willDelete) => {
                             if (willDelete) {
                               updateItemQuantity(item.id, item.quantity - 1);
                               swal(
                                 "Poof! Your imaginary file has been deleted!",
                                 {
                                   icon: "success",
                                 }
                               );
                             } else {
                               swal("Your imaginary file is safe!");
                             }
                           });
                         } else {
                           updateItemQuantity(item.id, item.quantity - 1);
                         }
                       }}
                     >
                       -
                     </button>
                     <span className="mx-2">{item.quantity}</span>
                     <button
                       className="btn btn-success"
                       onClick={() =>
                         updateItemQuantity(item.id, item.quantity + 1)
                       }
                     >
                       +
                     </button>
                   </td>
                   <td>
                     <span
                       onClick={() => {
                         swal({
                           title: "Are you sure?",
                           text: "Once deleted, you will not be able to recover this imaginary file!",
                           icon: "warning",
                           buttons: true,
                           dangerMode: true,
                         }).then((willDelete) => {
                           if (willDelete) {
                             removeItem(item.id, item);
                             swal(
                               "Poof! Your imaginary file has been deleted!",
                               {
                                 icon: "success",
                               }
                             );
                           } else {
                             swal("Your imaginary file is safe!");
                           }
                         });
                       }}
                       className="btn btn-danger"
                     >
                       X
                     </span>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
           <div className="total-con">
             <h2>Total</h2>
             <div className="dp-between">
              <p>Total Price</p> 
              <span>{cartTotal}</span>
              </div>
             <div className="dp-between">
              <p>Product Count</p> 
              <span>{items.length}</span>
              </div>
              <div className="dp-align dp-center gap-2 ">
              <button className="btn btn-success mt-3">Checkout</button>
              <button className='btn btn-danger mt-3' onClick={()=>{
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this product!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your product has been deleted!", {
                            icon: "success",
                          });
                          emptyCart()
                        } else {
                          swal("Your product file is safe!");
                        }
                      });
                    }
                
            }>Clear All</button>

              </div>
           </div>
         </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
