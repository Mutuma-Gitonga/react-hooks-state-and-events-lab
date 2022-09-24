import React, {useState} from "react";

function Item({ name, category }) {
  const[cartClass, setCartClass] = useState("");
  // const[buttonText, setButtonText] = useState("Add to Cart");

  function updateCart() { 
    if(cartClass === "") {
      setCartClass("in-cart");
    } 
      else if(cartClass === "in-cart") {
        setCartClass(""); 
      }
  }
 
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => updateCart()}>{cartClass === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
