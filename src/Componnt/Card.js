import React from 'react';

const Card =  ({id,name,email}) => {
    return (
        <div className =  ' tc bg-light-green dib ma2 pa3 br3 grow shadow-5'>
        <img alt ='robot' src = {`https://robohash.org/${id}?200x200`} />
        
         <div >
         <h1>{name}</h1>
         <p>{email}</p>
         </div>
        </div>
    )

}
export default Card 