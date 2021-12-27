import CartPage from "./cartPage";
const Cards = (props) => {
  
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
        <button>Add To Card</button>
      </div>
    </div>
  );
};

export default Cards;
