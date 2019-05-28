import React from 'react';

function Cart() {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <p className="lead">Cart</p>
          <table className="table-striped">
            <tbody>
                <tr>
                    <th scope="row" width="50%">article 3343</th>
                    <td width="20%">20.67 $</td>
                    <td width="20%">
                      <button className="btn btn-warning btn-sm float-right">remove</button>
                    </td>
                </tr>
            {/* {this.props.cart.map((article, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" width="50%">{article.name}</th>
                    <td width="20%">{article.price} $</td>
                    <td width="20%">
                      <Button color="warning" size="sm" onClick={() => {this.props.removeFromCart(index)}} className="float-right">{TRAD.remove}</Button>
                    </td>
                  </tr>
                )
              })} */}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <h3>Total price : <span className="float-right"> 20.67 $</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Cart;
