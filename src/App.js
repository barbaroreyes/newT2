import React ,{Component} from 'react'
import CardList from './Componnt/CarList'
import  robots from './Componnt/robots';
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
        this.setState({robots:robots})
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
