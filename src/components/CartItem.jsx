import React from 'react';
import plusButton from '../assets/images/plus-7-64.png';
import minusButton from '../assets/images/minus-4-64.png';
import delButton from '../assets/images/del_button.png';
import { Button } from './Button';

import { useSelector } from 'react-redux';



function CartItem({ name, type, size, totalPrice, totalCount, onRemove, id, onPlus, onMinus, img }) {
	
	function handleRemoveClick() {
		onRemove(id);
	}

	function handlePlusItem(id) {
		onPlus(id);
	}

	function handleMinusItem(id) {
		onMinus(id);
	}

	return(
		<div>
			<div className="cart_item">
			<div className="cart_item_img">
				<img src={img} alt="pizza" />
			</div>
			<div className="cart_item_info">
				<h3>{name}</h3>
				<p>{type}, {size} cm</p>
			</div>
			<div className="cart_item_count">
				<div className="cart_item_plus_minus">
					
					<p>{totalCount}</p>
					
				</div>
				<div className="cart_item_price">
					<p>${totalPrice}</p>
				</div>
				<button className="cart_item_count_button" onClick={handleRemoveClick} >
					<img src={delButton} />
				</button>
			</div>
		</div>
		<hr />
		</div>
	)
}

export { CartItem };

//