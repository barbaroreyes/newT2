import React from 'react';
import Card from './Card';

 const CardList = ({robots}) => {
     const cardCompo = robots.map((user , i) => {
         return (
            <Card key={i} id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>   
         )
     })
       return (<div>
              {cardCompo}
           </div>)
 }
 export default CardList

