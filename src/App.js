import React ,{Component} from 'react'
import CardList from './Componnt/CarList'
import  robots from './Componnt/robots';
import SearchBox from './Componnt/SearchBox';
class App extends Component {
    render(){
        return (<div className= 'tc'>
                <h1>Robots-Friends</h1>
                <SearchBox/>
                <CardList robots = {robots}/>
            </div>)
    }
}
export default  App
