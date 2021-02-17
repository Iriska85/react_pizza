import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';

import { fetchPizzas } from '../redux/actions/pizzas';
import { LoadingBlock } from '../components/PizzaBlock/LoadingBlock';
import { addPizzaToCart } from '../redux/actions/cart';


const categoryNames = ['Classic', 'Vegetarian', 'Spicy'];
const sortItems = [
            {name: 'popularity', type: 'rating'}, 
            {name: 'price', type: 'price'},  
            {name: 'alphabet', type: 'name'} 
            ];


function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) =>  pizzas.items);
  const cartItems = useSelector(({cart}) =>  cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);
  useEffect(() => {
    
    /*fetch('http://localhost:3000/db.json').then((response) =>
      response.json()).then(json => {setPizzas(json.pizzas);
    });*/
    
      dispatch(fetchPizzas(sortBy, category));
    
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  
  }, []);

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type));
  
  }, []);

  function handleAddPizzaToCart(obj) {
    dispatch(addPizzaToCart(obj));
  }

	return(
		<div className="container">
        <div className="content_top">
          
          <Categories 
            activeCategory={category}
            onClickCategory={onSelectCategory} 
            items={categoryNames} />
          
          <SortPopup 
            activeSortType={sortBy} 
            items={sortItems} 
            onClickSortType={onSelectSortType} />

        </div>
        <h2 className="content_title">All pizzas</h2>
        <div className="content_items">
          { isLoaded ? items.map(obj => <PizzaBlock 
                                          key={obj.id}  
                                          isLoading={true}
                                          onClickAddPizza={handleAddPizzaToCart}
                                          {...obj} /> )
          : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
          }
   
        </div>
      </div>
	)
}

export { Home };