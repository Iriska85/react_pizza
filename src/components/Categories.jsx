import React from 'react';
import '../index.scss';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories( { activeCategory, items, onClickCategory } ) {

	return(
		<div className="categories">
            <ul>
            	<li className={(activeCategory === null) ? 'active' : ''} 
            		onClick={ () =>onClickCategory(null) }>All</li>
            	{ items && 
            		items.map((item, index) => ( 
            		<li className={(activeCategory === index) ? 'active' : ''} 
            			onClick={ () =>onClickCategory(index) } 
            			key={`${index}_${item}`}>{item}</li> 
              	)) }
            </ul>
          </div>
	)
}
)

Categories.propTypes = {
    //activeCategory: PropTypes.oneOf([PropTypes.number.isRequired, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};

Categories.defaultProps = {
    activeCategory: 0,
    items: [],

}

export {Categories};