import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from '../components/CartItem';
import emptyCartImg from '../assets/images/shopping_cart_empty.png'
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';


function Cart() {
	const dispatch = useDispatch();
	const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);

	const addedPizzas = Object.keys(items).map(key => {
		return items[key][0];
	});

	function onClearCart() {
		if(window.confirm('Clear a cart?')) {
			dispatch(clearCart());
		}
	}

	function onRemoveItem(id) {
		if(window.confirm('Want to delete pizza?')) {
			dispatch(removeCartItem(id));
		}
	}

	function onPlusItem(id) {
		dispatch(plusCartItem(id));
	}

	function onMinusItem(id) {
		dispatch(minusCartItem(id));
	}

	function onClickOrder() {
		console.log('your order',items )
	}
	
	return(
			
		
		<div>
		{totalCount ? 
			<div className="content_cart">

				<div className="cart_top">
					<div className="cart">
						<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="50" height="50"><path d="M240.81 395C232.05 395.01 224.45 388.96 222.5 380.41C218.18 361.6 183.64 211.12 179.33 192.31C177.01 182.22 183.31 172.16 193.4 169.84C194.78 169.52 196.19 169.36 197.6 169.36C231.88 169.36 506.15 169.36 540.44 169.36C550.79 169.34 559.2 177.72 559.23 188.07C559.23 189.5 559.07 190.92 558.75 192.31C554.42 211.12 519.83 361.6 515.5 380.41C513.56 388.94 505.97 395 497.23 395C445.94 395 266.45 395 240.81 395ZM255.74 357.5L482.3 357.5L516.89 206.9L221.14 206.9L255.74 357.5Z" id="a88r35veKE"></path><path d="M205.65 490.65C205.65 450.97 237.82 418.8 277.5 418.8C317.18 418.8 349.35 450.97 349.35 490.65C349.31 530.31 317.16 562.46 277.5 562.5C237.82 562.5 205.65 530.33 205.65 490.65ZM243.15 490.66C243.15 509.63 258.53 525.01 277.5 525.01C296.47 525.01 311.85 509.63 311.85 490.66C311.85 490.66 311.85 490.65 311.85 490.65C311.83 471.69 296.46 456.33 277.5 456.31C258.53 456.31 243.15 471.69 243.15 490.66Z" id="b1TS3w1ZEP"></path><path d="M388.68 490.65C388.68 450.97 420.84 418.8 460.53 418.8C500.21 418.8 532.38 450.97 532.38 490.65C532.33 530.31 500.19 562.46 460.53 562.5C420.84 562.5 388.68 530.33 388.68 490.65ZM426.18 490.66C426.18 509.63 441.55 525.01 460.53 525.01C479.5 525.01 494.88 509.63 494.88 490.66C494.88 490.66 494.88 490.65 494.88 490.65C494.85 471.69 479.49 456.33 460.53 456.31C441.55 456.31 426.18 471.69 426.18 490.66Z" id="a3LR1tSOc8"></path><path d="M179.81 194.04C177.67 187.6 166.96 155.42 147.68 97.5C112.1 97.5 92.33 97.5 88.38 97.5C78.02 97.5 69.63 89.11 69.63 78.75C69.63 68.39 78.02 60 88.38 60C95.66 60 153.96 60 161.25 60C169.32 60 176.49 65.17 179.04 72.82C182.68 83.76 211.81 171.25 215.45 182.19C218.72 192.01 213.41 202.63 203.59 205.9C201.68 206.54 199.68 206.86 197.66 206.86C189.53 206.86 182.36 201.7 179.81 194.04Z" id="d1MhVYcdob"></path></svg>
						Cart</h1>
					</div>
					<div className="cart_clear" onClick={onClearCart}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" ><path fill="#231F20" d="M10.289,14.211h3.102l1.444,25.439c0.029,0.529,0.468,0.943,0.998,0.943h18.933 c0.53,0,0.969-0.415,0.998-0.944l1.421-25.438h3.104c0.553,0,1-0.448,1-1s-0.447-1-1-1h-3.741c-0.055,0-0.103,0.023-0.156,0.031 c-0.052-0.008-0.1-0.031-0.153-0.031h-5.246V9.594c0-0.552-0.447-1-1-1h-9.409c-0.553,0-1,0.448-1,1v2.617h-5.248 c-0.046,0-0.087,0.021-0.132,0.027c-0.046-0.007-0.087-0.027-0.135-0.027h-3.779c-0.553,0-1,0.448-1,1S9.736,14.211,10.289,14.211z M21.584,10.594h7.409v1.617h-7.409V10.594z M35.182,14.211L33.82,38.594H16.778l-1.384-24.383H35.182z"/><path fill="#231F20" d="M20.337,36.719c0.02,0,0.038,0,0.058-0.001c0.552-0.031,0.973-0.504,0.941-1.055l-1.052-18.535 c-0.031-0.552-0.517-0.967-1.055-0.942c-0.552,0.031-0.973,0.504-0.941,1.055l1.052,18.535
						C19.37,36.308,19.811,36.719,20.337,36.719z"/><path fill="#231F20" d="M30.147,36.718c0.02,0.001,0.038,0.001,0.058,0.001c0.526,0,0.967-0.411,0.997-0.943l1.052-18.535 c0.031-0.551-0.39-1.024-0.941-1.055c-0.543-0.023-1.023,0.39-1.055,0.942l-1.052,18.535C29.175,36.214,29.596,36.687,30.147,36.718 z"/><path fill="#231F20" d="M25.289,36.719c0.553,0,1-0.448,1-1V17.184c0-0.552-0.447-1-1-1s-1,0.448-1,1v18.535 C24.289,36.271,24.736,36.719,25.289,36.719z"/></svg>
						<span >Clear cart</span>
					</div>
				</div>
				<div className="cart_items">
					{
						addedPizzas.map((obj, index) => <CartItem 
													id={obj.id}
													key={index}
													name={obj.name} 
													type={obj.type} 
													size={obj.size}
													totalPrice={items[obj.id].reduce((sum, obj) => obj.price + sum, 0)} 
													totalCount={items[obj.id].length}
													onRemove={onRemoveItem}
													onMinus={onMinusItem}
													onPlus={onPlusItem}
													img={obj.imageUrl}
													/>)
					}
				</div>
				
				<div className="cart_bottom">
					<div className="cart_bottom_details">
						<div className="cart_bottom_details_total">
							<p>Total pizzas:</p><span>{totalCount} un.</span>
						</div>
						<div className="cart_bottom_details_price">
							<p>Order price:</p><span>${totalPrice}</span>
						</div>
					</div>
					<div className="cart_bottom_buttons">
						<Link to='/' className="cart_bottom_back">Back</Link>
						<button className="cart_bottom_pay" onClick={onClickOrder}>Pay now</button>
					</div>
				</div>
			</div>
			: 
			<div className="content_empty_cart">
				<div className="content_empty_cart_headline">
					<h2>Your cart is empty</h2>
					<p>To make a purchase click the button below</p>
				</div>
				<img src={emptyCartImg} alt="empty_cart" />
				<Link className="button_cart" to='/'>Choose pizza</Link>
			</div>
		}
		</div>		
			
	)
}
		

export { Cart };