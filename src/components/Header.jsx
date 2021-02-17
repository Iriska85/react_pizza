import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/pizza-logo.svg';
import '../index.scss';
import { Button } from './Button';
import { useSelector } from 'react-redux';

function Header() {
  const {totalPrice, totalCount} = useSelector(({cart}) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }));

  return(
    <div className="header">
      <div className="container">
        <Link to='/'>
          <div className="header_logo">
            <img src={logo} alt="pizza-logo"/>
            <div>
              <h1>react pizza</h1>
              <p>The tastest pizza in the world</p> 
            </div>
          </div>
          <div className="header_card">
            <Link to="/cart">
              <Button className='button_cart'>
                <span>${totalPrice}</span>
                <div className="button_delimeter"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="50" height="50"><path d="M240.81 395C232.05 395.01 224.45 388.96 222.5 380.41C218.18 361.6 183.64 211.12 179.33 192.31C177.01 182.22 183.31 172.16 193.4 169.84C194.78 169.52 196.19 169.36 197.6 169.36C231.88 169.36 506.15 169.36 540.44 169.36C550.79 169.34 559.2 177.72 559.23 188.07C559.23 189.5 559.07 190.92 558.75 192.31C554.42 211.12 519.83 361.6 515.5 380.41C513.56 388.94 505.97 395 497.23 395C445.94 395 266.45 395 240.81 395ZM255.74 357.5L482.3 357.5L516.89 206.9L221.14 206.9L255.74 357.5Z" id="a88r35veKE"></path><path d="M205.65 490.65C205.65 450.97 237.82 418.8 277.5 418.8C317.18 418.8 349.35 450.97 349.35 490.65C349.31 530.31 317.16 562.46 277.5 562.5C237.82 562.5 205.65 530.33 205.65 490.65ZM243.15 490.66C243.15 509.63 258.53 525.01 277.5 525.01C296.47 525.01 311.85 509.63 311.85 490.66C311.85 490.66 311.85 490.65 311.85 490.65C311.83 471.69 296.46 456.33 277.5 456.31C258.53 456.31 243.15 471.69 243.15 490.66Z" id="b1TS3w1ZEP"></path><path d="M388.68 490.65C388.68 450.97 420.84 418.8 460.53 418.8C500.21 418.8 532.38 450.97 532.38 490.65C532.33 530.31 500.19 562.46 460.53 562.5C420.84 562.5 388.68 530.33 388.68 490.65ZM426.18 490.66C426.18 509.63 441.55 525.01 460.53 525.01C479.5 525.01 494.88 509.63 494.88 490.66C494.88 490.66 494.88 490.65 494.88 490.65C494.85 471.69 479.49 456.33 460.53 456.31C441.55 456.31 426.18 471.69 426.18 490.66Z" id="a3LR1tSOc8"></path><path d="M179.81 194.04C177.67 187.6 166.96 155.42 147.68 97.5C112.1 97.5 92.33 97.5 88.38 97.5C78.02 97.5 69.63 89.11 69.63 78.75C69.63 68.39 78.02 60 88.38 60C95.66 60 153.96 60 161.25 60C169.32 60 176.49 65.17 179.04 72.82C182.68 83.76 211.81 171.25 215.45 182.19C218.72 192.01 213.41 202.63 203.59 205.9C201.68 206.54 199.68 206.86 197.66 206.86C189.53 206.86 182.36 201.7 179.81 194.04Z" id="d1MhVYcdob"></path></svg>
                <span>{totalCount}</span>
              </Button> 
            </Link>
          </div>
        </Link>
      </div>
    </div>
  )
}

export {Header};