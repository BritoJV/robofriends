import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    // if (true){throw new Error('NOOOOOOOOO')};
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