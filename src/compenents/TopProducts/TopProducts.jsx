import React from 'react';
import './TopProducts.css'


const TopProducts = () => {
  return (
    <div className='top-products-container'>
      <div className="comparisonchart-header-container">
        <h3 className="comparisonchart-header-title">Top Products</h3>
        <div className="comparisonchart-header-right-container">
          <span className="comparisonchart-header-right-text">Full results</span>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className='table-subtitle'>
              <th>Products</th>
              <th>Sold amount</th>
              <th>Unit price</th>
              <th>Revenue</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKab9FFYWoDCIRsc6WyoObfOpaINdTsJPGQk6EsqCFww&s" alt="Camera Mi 360" />
                </div>
                <span>Camera Mi 360</span>
              </td>
              <td className="table-text-data ">420</td>
              <td className="table-text-data ">$120</td>
              <td className="table-text-data ">$52,234</td>
              <td className="table-text-last-data ">⭐4</td>
            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtwmXZ9UMUbE449xv0_rcZbaqkdRiBp1ABg&s" alt="Massage Gun" />
                </div>
                <span>Massage Gun</span>
              </td>
              
              <td className="table-text-data ">367</td>
              <td className="table-text-data ">$643</td>
              <td className="table-text-data ">$34,234</td>
              <td className="table-text-last-data ">⭐4</td>

            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8C7TBFdAHfcVa4BwMlLD1HnkAT9cRgiipA&s" alt="Vacuum-Mop 2 Pro" />
                </div>
                <span>Vacuum-Mop 2 Pro</span>
              </td>
              
              <td className="table-text-data ">323</td>
              <td className="table-text-data ">$209</td>
              <td className="table-text-data ">$29346</td>
               
              <td className="table-text-last-data ">⭐4</td>

            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8C7TBFdAHfcVa4BwMlLD1HnkAT9cRgiipA&s" alt="Vacuum-Mop 2" />
                </div>
                <span>Vacuum-Mop 2 </span>
              </td>
              
              <td className="table-text-data ">123</td>
              <td className="table-text-data ">$329</td>
              <td className="table-text-data ">$12329</td>
               
              <td className="table-text-last-data ">⭐4</td>

            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default TopProducts
