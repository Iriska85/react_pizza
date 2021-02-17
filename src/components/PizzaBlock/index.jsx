import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LoadingBlock } from './LoadingBlock';


function PizzaBlock( { id, name, imageUrl, price, types, sizes, isLoading, onClickAddPizza } ) {
 
  const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(0);
	
	const aviableTypes = ['thin crust', 'traditional'];
	const aviableSizes = [26, 30, 40];

	

  function onSelectType(index) {
		setActiveType(index);
	}

	function onSelectSize(size) {
		setActiveSize(size);
	}

  function onAddPizza() {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: aviableSizes[activeSize],
      type: aviableTypes[activeType]
    }
    onClickAddPizza(obj);
  }

	return (
		<div className="pizza_block">
            <img className="pizza_img" src={imageUrl} alt="pizza"/>
            <h4 className="pizza_name">{name}</h4>
            <div className="pizza_block_selector">
              <ul>
              	{aviableTypes.map((type, index) => 
              		(<li 
              			key={type}
              			onClick={() => onSelectType(index)}
              			className={types.includes(index) ? (activeType === index) ? 
              				'active' : '' : 'disabled'}>{type}</li>))}
              </ul>
              <ul>
               {aviableSizes.map((size, index) => 
              		(<li 
              			key={size}
              			onClick={() => onSelectSize(index)}
              			className={sizes.includes(size) ? (activeSize === index) ? 
                            'active' : '' : 'disabled'}>{size} cm.</li>))} 
              </ul>
            </div>
            <div className="pizza_block_bottom">
              <p className="pizza_block_price">from ${price}</p>
              <button className="button_add" onClick={onAddPizza}>+ Add</button>
            </div>
          </div>
	)
} 

PizzaBlock.propTypes = {
	name: PropTypes.string,
	imageUrl: PropTypes.string,
	price: PropTypes.number,
	types: PropTypes.arrayOf(PropTypes.number),
  onAddPizza: PropTypes.func,
};

PizzaBlock.defaultProps = {
	types: [],
	name: '----',
	sizes: [],
	price: 0,
}

export { PizzaBlock };