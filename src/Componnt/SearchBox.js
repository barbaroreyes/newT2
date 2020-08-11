import React from 'react';

const  SearchBox = ({SeachField,searChange}) => {
    return (
        <div>
          <input
           className ='tc ma2 pa2 bg-light-blue' 
           type ='search' 
           placeholder ='search-robot'
           onChange = {searChange}
           />
        </div>
        )
}

 export default SearchBox