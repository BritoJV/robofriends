import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../state/counterSlice';
import { setSearchField } from '../state/searchfieldSlice';

function App() {

    const [robots, setRobots] = useState([]);
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const searchfield = useSelector((state) => state.searchfield.value);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>setRobots(users));
        // console.log(count)
    },[count])
    
    const filteredRobots = robots.filter(robots=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
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
            <button onClick={() => dispatch(increment())}>Click Me!</button>
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
export default App;
