import React from 'react';
import Card from './Card';
// import { robots } from './robots';

// const cardComponent = robots.map((user,i) => {
//     return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
//     }
// )

const Cardlist = ({ robots }) => {
    return(
        <>
            {robots.map((user,i) => {
                return <Card    
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    }
                )
            }
        </>
    );
}

export default Cardlist;