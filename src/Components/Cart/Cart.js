import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { countTotalPrice } from '../../Utils/countTotalPrice';
import { removeArticle } from '../../Actions/cartActions';

function Cart(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <p className="lead">Cart</p>
          <table className="table-striped">
            <tbody>
              {props.articles.map((article, index) => {
                return (
                  <tr className="py-2 tr-height" key={index}>
                    <th className="px-2" scope="row" width="50%">{article.name}</th>
                    <td width="30%">{article.price} $</td>
                    <td width="20%">
                      <button className="btn btn-warning btn-sm float-right mr-2" onClick={() => props.dispatch(removeArticle(index))}>remove</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <h3>Total price : <span className="float-right">{countTotalPrice(props.articles)} $</span></h3>
        </div>
      </div>
      {props.articles.length === 0 ? null : <Link to="/checkout"><button className="btn btn-success mt-3">Checkout</button></Link>}
    </div>
  )
}

const mapStateToProps = store => ({
  articles: store
});

export default connect(mapStateToProps)(Cart);
