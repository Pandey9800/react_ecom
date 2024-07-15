import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead';

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
                                              <td className="cat-price">{item.price}</td>
                                              <td className="cat-quantity">
                                                  <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                      <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity} />
                                                  <div className="inc qtybutton" onClick={() => handleIncrease(item) }>+</div>
                                              </td>
                                          </tr>
                                      ))
                                  }
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CartPage