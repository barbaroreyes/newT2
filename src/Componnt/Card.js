import React from 'react';

const Card =  ({id,name,email}) => {
    return (
        <div>
        <img alt ='robot' src = {`https://robohash.org/${id}?200x200`} />
        
         <div>
         <h1>{name}</h1>
         <p>{email}</p>
         </div>
        </div>
    )

}
export default Card 