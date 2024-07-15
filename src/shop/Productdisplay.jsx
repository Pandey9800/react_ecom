import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Productdisplay = ({ item }) => {
    // console.log(item);
    const { name, desc, id, price, seller, ratingsCount, quantity, img } = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupan, setCoupan] = useState("");
    const [size, setSize] = useState("Select Size");
    const[color, setColor] = useState("Select Color");
    

    const handlesizeChange = (e) => {
        setSize(e.target.value); 
    }
    const handlecolorChange = (e) => {
        setColor(e.target.value); 
    }
    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }
    const handleDecrease = () => {
        if (prequantity > 0) {
            setQuantity(prequantity - 1)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupan: coupan,
        }
        // console.log(product);
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }

        // update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // reset form fields
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupan("");
    }
  return (
      <div>
          <div>
          <h4>{name}</h4>
          <p className="rating">
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <span>{ratingsCount} review</span>
          </p>
          <h4>{price} ₹</h4>
          <h6>{seller}</h6>
          <p>{desc}</p>
          </div>
          {/* Cart Components */}
          <div>
              <form onSubmit={handleSubmit}>
                  {/* Size Changing Stuff */}
                  <div className="select-product size">
                      <select value={size} onChange={handlesizeChange}>
                          <option>Select Size</option>
                          <option value="SM">SM</option>
                          <option value="MD">MD</option>
                          <option value="LG">LG</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                      </select>
                      <i className="icofont-rounded-down"></i>
                  </div>

                  {/* Color Changing Stuff */}
                  <div className="select-product color">
                      <select value={color} onChange={handlecolorChange}>
                          <option>Select Color</option>
                          <option value="RED">RED</option>
                          <option value="BLUE">BLUE</option>
                          <option value="PINK">PINK</option>
                          <option value="GREEN">GREEN</option>
                          <option value="YELLOW">YELLOW</option>
                      </select>
                      <i className="icofont-rounded-down"></i>
                  </div>
                  
                  {/* Cart + - */}

                  <div className="cart-plus-minus">
                      <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                      <input className='cart-plus-minus-box' type="text" name="qtybtn" id="qtybtn" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                      <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                  </div>

                  {/* Coupan */}

                  <div className="discount-code mb-2">
                      <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupan(e.target.value)} />
                  </div>

                  {/* btn Sections */}

                  <Link to='/cart-page' className='lab-btn'>
                      <span>Add to Cart</span>
                  </Link>
                  <button type="submit" className="lab-btn bg-primary">
                      <span>Check Out</span>
                  </button>
              </form>
          </div>
      </div>
  )
}

export default Productdisplay