import{CHANGE_SEARCH_FIELD}from './contant.js'

const initialEstate = {
     searchField : ''
} 

export  const searchRobot = (state = initialEstate,action= {}) =>{
  switch (action.type){
      case CHANGE_SEARCH_FIELD :
          return Object.assign({},state,{searchField:action.payload})
          default  : 
          return state

 }
}
 