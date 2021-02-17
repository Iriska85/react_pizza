import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return(
        <ContentLoader className='pizza_block'
        speed={2}
        width={308}
        height={455}
        viewBox="0 0 308 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
       
      >
        <circle cx="152" cy="117" r="117" /> 
        <rect x="63" y="260" rx="3" ry="3" width="181" height="26" /> 
        <rect x="0" y="297" rx="16" ry="16" width="308" height="92" /> 
        <rect x="34" y="415" rx="3" ry="3" width="81" height="31" /> 
        <rect x="163" y="402" rx="6" ry="6" width="113" height="51" />
      </ContentLoader>
      )
}

export { LoadingBlock };
