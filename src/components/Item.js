import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

function handleClick(){
    setCart((cart)=> !cart)
}
const isItem = cart ?"in-cart":"" 
  return (
    <li className={isItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleClick}>{cart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
