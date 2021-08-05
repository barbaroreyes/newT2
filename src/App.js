import React,{useState,useEffect} from 'react'
import Card from './Componnt/Card'
const App = () => {
    const [users,setUsers] = useState([])
    const [searchName,setSearchName] = useState('')
    useEffect( () =>{
        fetchUsers()
       
       },[])

    const fetchUsers = async() =>{
        try {
            await fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(setUsers)
          } catch (error) {
            
          }
    }
    console.log('uses',users)
  return (
    <div className ='list tc'>
     <input type='text' placeholder='findd ypur name '
     onChange= {(e) => setSearchName(e.target.value)}
     />
     {users.filter(item => {
        if(searchName ===''){return item }
        else if (item.name.toLowerCase().includes(searchName.toLowerCase())) {
          return item
        }
     }).map((item,i)=>{
       return  (< Card 
        key={i}
        name={item.name}
        email={item.email}
        id={item.id}
        />)
     })}
    </div>
  )
}

export default App
