import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead';
import delImgUrl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        //fetch cart Item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, [])

    // calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);
 
        // update localstorage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // handle quantity Decrease

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);

        // update localstorage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }   

    // handle Item Remove

    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

        //update new cart
        setCartItems(updatedCart);

        updatedLocalStorage(updatedCart);
    }

    const updatedLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    // Cart Subtotal

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    //order total

    const orderTotal = cartSubtotal;

  return (
      <div>
          <PageHead title={"Shop Cart"} curPage={"Cart Page"} />

          <div className="shop-cart padding-tb">
              <div className="container">
                  <div className="section-wrapper">
                      {/* Cart Top */}
                      <div className="cart-top">
                          <table>
                              <thead>
                                  <tr>
                                      <th className="cat-product">Product</th>
                                      <th className="cat-price">Price</th>
                                      <th className="cat-quantity">Quantity</th>
                                      <th className="cat-toprice">Total</th>
                                      <th className="cat-edit">Edit</th>
                                  </tr>
                              </thead>

                              <tbody>
                                  {
                                      cartItems.map((item, i) => (
                                          <tr key={i}>
                                              <td className="product-item cat-product">
                                                  <div className="p-thumb">
                                                      <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                  </div>
                                                  <div className="p-content">
                                                      <Link to="/shop">{item.name}</Link>
                                                  </div>
                                              </td>
                                              <td className="cat-price">{item.price} ₹</td>
                                              <td className="cat-quantity">
                                                  <div className="cart-plus-minus">
                                                  <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                      <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity} />
                                                      <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                      </div>
                                              </td>
                                              <td className="cat-toprice">{calculateTotalPrice(item)} ₹ </td>
                                              <td className="car-edit"><a href="#" onClick={() => handleRemoveItem(item)}><img src={delImgUrl} alt="" /></a></td>
                                          </tr>
                                      ))
                                  }
                              </tbody>
                          </table>
                      </div>
                      {/* cart top ends */}

                      
                      {/* Cart Bottom */}
                        <div className="cart-bottom">
                            {/* Checkout Box */}
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input className="cart-page-input-text" type="text" name="coupon" id="coupon" placeholder="Coupon Code..." />
                                    <input type="submit" value="Apply Coupon" />
                              </form>
                              <form className="cart-checkout">
                              <input type="submit" value="Update Cart" />
                              <div>
                                <CheckOutPage/>
                              </div>
                              </form>
                          </div>
                          {/* checkout box end */}
                          
                          {/* shopping box */}

                          <div className="shiping-box">
                              <div className="row">
                                  <div className="col-md-6 col-12">
                                      <div className="calculate-shiping">
                                          <h3>Calculate Shipping</h3>
                                          <div className="outline-select">
                                              <select>
                                                  <option value="ind">India</option>
                                              </select>
                                              <span className="select-icon">
                                                  <i className="icofont-rounded-down"></i>
                                              </span>
                                          </div>

                                          <div className="outline-select shipping-select">
                                            <select>
                                                <option value="ASA">Assam</option>
                                                <option value="CG">Chhattisgarh</option>
                                                <option value="ND">New Delhi</option>
                                                <option value="HYD">Hyderabad</option>
                                            </select>
                                            <span className="select-icon">
                                                <i className="icofont-rounded-down"></i>
                                              </span>
                                          </div>
                                          <input type="text" placeholder='POST / ZIP Code' name="postalcode" id="postalcode" className="cart-page-input-text" />
                                          
                                      </div> 
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="cart-overview">
                                        <h3>Cart Totals</h3> 
                                        <ul className="lab-ul">
                                            <li>
                                                <span className="pull-left">Cart Subtotal</span>
                                                <p className="pull-right">{cartSubtotal} ₹</p>
                                            </li>
                                            <li>
                                                <span className="pull-left">Shipping & Handling</span>
                                                <p className="pull-right">Free Shipping</p>
                                            </li>
                                            <li>
                                                <span className="pull-left">Order Total</span>
                                                <p className="pull-right">{orderTotal.toFixed(2)} ₹</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>

                      {/* cart bottom ends */}
                </div>
              </div>
          </div>
    </div>
  )
}

export default CartPage