import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice';
import './Cart.css'

const Cart = () => {

  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removetocart = (id) => {
    dispatch(remove(id));
  }

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + (parseFloat(product.price) || 0), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
      </div>

      {products.length > 0 ? (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} className="cart-img" />
                  </td>
                  <td>{parseFloat(product.price).toFixed(2)} AZN</td>
                  <td>1</td> {}
                  <td>{parseFloat(product.price).toFixed(2)} AZN</td>
                  <td className="remove" onClick={() => removetocart(product.id)}>X</td>
                </tr>
              ))}
            </tbody>
          </table>

          {}
          <div className="cart-footer">
            <span>Total: {getTotalPrice()} AZN</span>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart-message">
          <h3>Your Cart is Empty</h3>
        </div>
      )}
    </div>
  )
}

export default Cart;
