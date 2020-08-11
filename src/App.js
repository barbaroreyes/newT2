import React ,{Component} from 'react'
import CardList from './Componnt/CarList'
import  robots from './Componnt/robots';
import SearchBox from './Componnt/SearchBox';
class App extends Component {
    constructor(){
        super()
        this.state ={
            Robots : robots,
            SeachField: ''
        }
    }
    onSearChange = (event) =>{
        console.log(event)
    }
    render(){
        return (<div className= 'tc'>
                <h1>Robots-Friends</h1>
                <SearchBox searChange = {this.onSearChange}/>
                <CardList robots = {this.state.Robots}/>
            </div>)
    }
}
export default  App
