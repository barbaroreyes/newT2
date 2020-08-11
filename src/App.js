import React ,{Component} from 'react'
import CardList from './Componnt/CarList'
import SearchBox from './Componnt/SearchBox';
class App extends Component {
    constructor(){
        super()
        this.state ={
            robots : [],
            SeachField: ''
        }
    }
    onSearChange = (event) =>{
        this.setState({SeachField:event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>{
            return  Response.json()
        } )
        .then(users =>{
            this.setState({robots:users})
        } )    
    }
    render(){
        const filterR = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SeachField.toLowerCase())
        })
        return (<div className= 'tc'>
                <h1 className ='f2'>Robots-Friends</h1>
                <SearchBox searChange = {this.onSearChange}/>
                <CardList robots = {filterR}/>
            </div>)
    }
}
export default  App
