import React from 'react'
import { Link } from 'react-router-dom';

export default function Characters({ datac, page,search }) {
    
    const startIndex = ( page - 1 ) * 10;
    const selectedUsers = datac.slice(startIndex, startIndex + 10);
    
    const statusHandler = (item) => {
        if(item === 'Deceased')
            return ('data status dead small')
        else if(item === 'Alive')
            return ('data status alive small')
        else
            return ('data status pdead small')
    }
    return (
        <>
        {
                      
                selectedUsers.filter(fil => fil.name.toLowerCase().includes(search)).map( item => 
                    <Link key={item.char_id} to={`/character/${item.char_id}`}>
                    <div className="char-card flex-row space-between align-center">
                    <div className="medium">
                        <h1 className="name">{item.name}</h1>
                    </div>
                    
                    <div className="long flex-column">
                        <h2 className="label">occupation</h2>
    
                        {
                            item.occupation.map(o => 
                                <h2 className="data">{o},</h2>
                            )
                        }
                    </div>
                    <div className="flex-column medium">
                        <h2 className="label">date of birth</h2>
                        <h2 className="data">{item.birthday}</h2>
                    </div>
                    <div>
                        <h1 className={statusHandler(item.status)}>{item.status}</h1>
                 </div>
                </div>
                </Link>
                )
                
            
            }
        
        </>
    )
}
