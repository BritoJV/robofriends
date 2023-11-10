import React from 'react';

const Card = ({id,name,email}) =>{
    return (
        <div className='bg-light-green grow ba bw1 br3 pa2 ma2 dib shadow-5 tc'>
            <img src={`https://robohash.org/${id+name}?size=200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card