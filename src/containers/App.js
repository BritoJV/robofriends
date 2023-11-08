import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchfield } from '../actions';
import { connect, useSelector } from 'react-redux';

const mapStateToProps = (state) => {
    return{
        searchField: state.searchField,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {onSearchChange: (event) => dispatch (setSearchfield(event.target.value))}
}

function App() {

    const [robots, setRobots] = useState([]);
    // const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value);
    // }

    const aMess = useSelector((state) =>({
        searchField: state.searchField,
        onSearchChange: state.onSearchChange
    }))
    console.log(aMess)
    const { searchField, onSearchChange } = aMess

    useEffect(() => {
        // console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>setRobots(users));
        console.log(count)
        console.log(robots)
    },[count])
    
    // const { searchField, onSearchChange } = props;

    const filteredRobots = robots.filter(robots=>{
        return robots.name.includes(searchField)
        // return robots.name.toLowerCase().includes(searchField.toLowerCase())
        }
    )
    if (!robots.length){
        return (
            <h1 className='tc'>Loading...</h1>
        )
    }
    else{
        return(
        <div className='tc'>
            <h1>robofriends</h1>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
            <Searchbox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <Cardlist robots = {filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
