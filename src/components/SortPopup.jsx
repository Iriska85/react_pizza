import React, {useState, useEffect, useRef} from 'react';
import '../index.scss';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup( { items, onClickSortType, activeSortType } ) {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const sortRef = useRef();
	const activeLabel = items.find(obj => obj.type === activeSortType).name;
	
	function toggleVisiblePopup() {
		setVisiblePopup(!visiblePopup);
	}

	function handleOutSideClick(event) {
		const path = event.path || (event.composedPath && event.composedPath());
		if(!path.includes(sortRef.current)){
			setVisiblePopup(false);
		}
	}

	function onSelectItem(index) {
		onClickSortType(index);
		setVisiblePopup(false);
	}

	useEffect(() => {
		document.body.addEventListener('click', handleOutSideClick);
	}, 
[]);
	


	return(
		<div ref={sortRef} className="sort">
            <div className="sort_label">
              <svg className={visiblePopup ? 'rotated' : ''} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 640" width="30" height="25">
              		<path d="M489.15 131.54L359.06 131.54L228.95 131.54L294.01 238.69L359.06 345.83L424.12 238.69L489.15 131.54Z" id="byaVG61MB"></path></svg>
              <span >Sort by:</span>&nbsp;&nbsp;
              <p onClick={ toggleVisiblePopup }>{activeLabel}</p>
            </div>
            { visiblePopup && <div className="sort_popup">
		                          <ul>
		                        	 {items &&
		                        	 	items.map((obj, index) => (
		                        	 		<li className={(activeSortType === obj.type) ? 'active' : ''} 
		                        	 		onClick={() => onSelectItem(obj.type)} 
		                        	 		key={`${obj.type}_${index}`}>{obj.name}</li>))}
		                          </ul>
		                        </div> }
        </div>
	)
}

	)

SortPopup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onClickSortType: PropTypes.func.isRequired,
	activeSortType: PropTypes.string.isRequired,
};

SortPopup.defaultProps = {
	items: []
}

export { SortPopup };