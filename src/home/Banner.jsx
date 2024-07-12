import React, { useState } from 'react'
import productData from "../products.json"

const title = (
    <h2>Search <span>Products</span></h2>
)
const desc = "We have the largest collection of Products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setfilterProducts] = useState(productData);
    // console.log(productData);

    // Search Functionality

    const handleSearch = e => {
        console.log(e.target.value);
    }

  return (
      <div className="banner-section style-4">
          <div className="container">
              <div className="banner-content">
                  {title}
                  <form>
                      <input type="text" name="search" id="search" placeholder="Search Your Product" value={searchInput} onChange={handleSearch} />
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Banner