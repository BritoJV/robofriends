import React from 'react';

const Searchbox = ({searchChange}) =>{
    return(
        <div className= 'pa2 tc ma0'>
            <input 
                type='Search' 
                placeholder='search robots' 
                className='bg-light-blue br2 pa2' 
                onChange={searchChange}>
            </input>
        </div>
    )
}
export default Searchbox;