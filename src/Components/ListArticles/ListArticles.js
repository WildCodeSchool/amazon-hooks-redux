import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cart from '../Cart/Cart';


function ListArticles() {

  const [articles, setArticles] = useState([]);
  const [filterPrice, setFilterPrice] = useState('none');
  // 0 - no filter
  // 1 - asc
  // 2 - desc

  const toggleFilterPrice = () => {
    if(filterPrice === 'none') {
      setFilterPrice('asc');
    } else if (filterPrice === 'asc') {
      setFilterPrice('desc');
    } else {
      setFilterPrice('asc');
    }
  }

  useEffect(() => {
    if(filterPrice !== 'none') {
      axios.get(`http://localhost:8000/articles/filter?price=${filterPrice}`)
      .then((result) => {
        setArticles(result.data);
      })
    }
  }, [filterPrice])

  useEffect(() => {
    axios.get('http://localhost:8000/articles')
    .then((result) => {
      setArticles(result.data);
    })
  }, [])

  return (
    <div className="row mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <p className="lead">Articles</p>
            </div>
            <table className="table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th onClick={toggleFilterPrice}>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                {articles.map((article, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} $</td>
                      <td width="10%">{article.quantity}</td>
                      <td width="20%">
                       <button className="btn btn-primary btn-sm float-right">Add to cart</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <div className="pagination">
              <li className="page-item">
                <a className="page-link" previous href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  )
} 

export default ListArticles;