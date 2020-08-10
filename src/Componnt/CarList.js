import React from 'react';
import Card from './Card';
import robots from './robots'
 const CardList = () => {
   
         return (<div>
            <Card id={robots[0].id} name ={robots[0].name} email={robots[0].e}/>
            <Card id={robots[1].id} name ={robots[1].name} email={robots[1].e}/>
            <Card id={robots[2].id} name ={robots[2].name} email={robots[2].e}/>
           </div>)
     
 }
 export default CardList

