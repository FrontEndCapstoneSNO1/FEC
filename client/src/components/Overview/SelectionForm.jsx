/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sizes from './Sizes.jsx';
import Quantities from './Quantities.jsx';

function SelectionForm({ stock, product, selectedStyle }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState([]);
  const [stockLoaded, setStockLoaded] = useState(false);

  useEffect(() => {
    if (stock) {
      setStockLoaded(true);
    }
  }, [stock]);

  const handleSizeSelect = (newSku) => {
    setSelectedSize(newSku);
    const quantities = [];
    for (let i = 0; i < stock.length; i++) {
      if (stock[i][0] === newSku) {
        const quantitiesMax = stock[i][1].quantity;
        for (let j = 1; j <= quantitiesMax; j++) {
          quantities.push(j);
        }
        const max15 = quantities.slice(0, 15);
        setQuantityOptions(max15);
      }
    }
  };

  const handleQuantitySelect = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  const addToCart = () => {
    //send a post request to the API using the current product, style, size, and quantity
  }

  if (stockLoaded) {
    if (!stock[0][1].size) {
      return (
        <div>
          <select name="size" id="size" defaultValue="Select Size">
            <option value="">OUT OF STOCK</option>
          </select>
        </div>
      );
    }
    if (!selectedSize) {
      return (
        <div className="selection-form">
          <select name="size" id="size" onChange={(e) => handleSizeSelect(e.target.value)}>
            <option value="">Select Size</option>
            {stock.map((sizes) => (
              <Sizes
                key={sizes[1].quantity}
                size={sizes[1].size}
                sku={sizes[0]}
                handleSizeSelect={handleSizeSelect}
              />
            ))}
          </select>
          <select name="quantity" id="quantity">
            <option>      -     </option>
            {quantityOptions.map((quantity) => (
              <Quantities quantity={quantity} />
            ))}
          </select>
        </div>
      );
    }
    return (
      <div className="selection-form">
        <select name="size" id="size" onChange={(e) => handleSizeSelect(e.target.value)}>
          <option value="">Select Size</option>
          {stock.map((sizes) => (
            <Sizes
              key={sizes[1].quantity}
              size={sizes[1].size}
              sku={sizes[0]}
              handleSizeSelect={handleSizeSelect}
            />
          ))}
        </select>
        <select name="quantity" id="quantity" onChange={(e) => handleQuantitySelect(e.target.value)}>
          {quantityOptions.map((quantity) => (
            <Quantities quantity={quantity} />
          ))}
        </select>
        <br></br>
        <br></br>
        <button type="submit">Add to cart</button>
      </div>
    );
  }
}

export default SelectionForm;
