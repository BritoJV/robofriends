import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>setRobots(users));
    },[])
    
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
