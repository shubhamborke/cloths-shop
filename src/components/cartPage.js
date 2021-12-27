import { Link } from "react-router-dom";
import { useState } from "react";

const CartPage = (props) => {
  const [count, setcount] = useState(1);
  return (
    <div className="cartcontainerMain">
      <h1 className="cartHead">Add To Cart</h1>
      <div className="cartContainer">
        <div className="cartBox1">
          <img src={props.state.image}></img>
          <div className="quantity">
            <p className="quntitygap">Quntity</p>
            <i className="fas quntitygap fa-minus-circle"></i>
            <p className="quntitygap">{count}</p>
            <i className="fas quntitygap fa-plus-circle"></i>
          </div>
        </div>
        <div className="cartBox2">
          <p>{props.state.description}</p>
          <div className="pricing">
            <h3>Price: {props.state.price} $</h3>
            <h3>
              Rating: {props.state.rating.rate}
              <i className="far fa-star"></i>
            </h3>
          </div>
          <button className="cartbutton1">Buy Now</button>
          <button className="cartbutton2">
            <Link to="/">Shop Again</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
