import React from 'react';
//<img src={'https://robohash.org/'+props.name+'?200x200'} alt='robots'/>

const Card = ({id,name,email}) =>{
    return (
        <div className='bg-light-green grow ba bw2 br3 pa3 ma2 dib shadow-5 tc'>
            <img src={`https://robohash.org/${id+name}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card