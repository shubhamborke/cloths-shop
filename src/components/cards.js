import { Link } from "react-router-dom";
const Cards = (props) => {
  const Click = () => {
    return 
  }
  return (
    <div className="box-model">
      <h2 className="head">{props.elem.title}</h2>
      <img src={props.elem.image}></img>
      <p className="overflow">{props.elem.description}</p>
      <div className="bottom">
        <p>Price: {props.elem.price} $</p>
        <p>Rating: {props.elem.rating.rate}</p>
      </div>
      <div className="button">
        <Link to={`/CartPage`}>
          <button onClick={Click}>Add To Card</button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
