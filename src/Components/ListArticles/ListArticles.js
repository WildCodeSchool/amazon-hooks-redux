import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import { connect } from 'react-redux';

import Cart from '../Cart/Cart';
import { addArticle } from '../../Actions/cartActions';

import './ListArticles.css';

function ListArticles(props) {

  const [articles, setArticles] = useState([]);
  const [nameFilter, setNameFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/articles')
    .then((result) => {
      setArticles(result.data);
    })
  }, [])

  const filterArticle = (tag, [setFunc, param]) => {
    if(param) {
      setArticles(articles.reverse());
    } else {
      setArticles(_.sortBy(articles, tag));
    }
    setFunc(!param);
  }
  
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
                  <th className="filter-button" onClick={() => filterArticle('name', [setNameFilter, nameFilter])}>Name</th>
                  <th className="filter-button" onClick={() => filterArticle('price', [setPriceFilter, priceFilter])}>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => {
                  return (
                    <tr className="py-2 tr-height" key={index}>
                      <th className="px-2" scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} $</td>
                      <td width="10%">{article.quantity}</td>
                      <td width="20%">
                        <button onClick={() => props.dispatch(addArticle(article))} className="btn btn-primary btn-sm float-right mr-2">Add to cart</button>
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
                <a className="page-link" href="/#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">2</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  )
} 

export default connect()(ListArticles);
