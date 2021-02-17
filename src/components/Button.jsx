import React from 'react';
import '../index.scss';

function Button( { className, children } ) {
	return(
		<button 
            className={className}>
        {children}</button> 
	)
}

export {Button};