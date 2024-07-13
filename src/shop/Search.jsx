import React, { useState } from 'react'

const Search = ({ products, GridList }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((products) => products.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
      <div className="widget widget-search">
          <form className='search-wrapper mb-3'>
              <input type="text" name="search" id="search" placeholder="Search Here..." defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button type="submit">
                  <i className="icofont-search-2"></i>
              </button>
          </form>

          {/* showing search result */}
          <div>
              {
                  
              }
          </div>
    </div>
  )
}

export default Search