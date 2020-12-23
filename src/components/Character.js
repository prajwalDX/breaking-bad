import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Character.css'

export default function Character(props) {

    const [datac, setDatac] = useState(JSON.parse(localStorage.getItem('datac')))
    const [dataq, setDataq] = useState(JSON.parse(localStorage.getItem('dataq')))
    const [chardata, setChardata] = useState()
    
    const [loading, setLoading] = useState(true)
    let quotes = []
    useEffect(() => {
        if(localStorage.getItem('datac')){
            datac.map(item => {
                
                    dataq.map( quote => {
                        
                        if(item.char_id === parseInt(props.match.params.id))
                        {
                            if(item.name === quote.author){
                                quotes = [...quotes,quote.quote]
                                
                            }
                            setChardata({...item,"quote":quotes})
                            setLoading(false)
                        }
                    })
            
            })
        }
    
    },[loading])

    const statusHandler = (item) => {
        if(item === 'Deceased')
            return ('data status dead small')
        else if(item === 'Alive')
            return ('data status alive small')
        else
            return ('data status pdead small')
    }

    return (
        loading ? 
        <div className="wrapper">
            <div className="container flex-row justify-content">
                <h1>loading</h1>
            </div>
        </div>
    :
        <>
        <div className="wrapper">
            <div className="container">

                <div className="card">
                    <div className="flex-row">
                        <div className="flex-column flex-grow-one justify-content">
                            <div className="image-wrapper">
                                <img className="image" src={chardata.img} alt="image of character" />
                            </div>
                        </div>
                        <div className="flex-column flex-grow-one">
                            <div className="margin-medium">
                                <h2 className="label">name</h2>
                                <h1 className="data margin-small">{chardata.name}</h1>
                            </div>
                            <div className="margin-medium">
                                <h2 className="label">nickname</h2>
                                <h1 className="data margin-small">{chardata.nickname}</h1>
                            </div>
                            <div className="margin-medium">
                                <h2 className="label">date of birth</h2>
                                <h2 className="data margin-small">{chardata.birthday}</h2>
                            </div>
                            <div className="margin-medium">
                                <h2 className="label">portrayed</h2>
                                <h1 className="data margin-small">{chardata.portrayed}</h1>
                            </div>

                            <div className="margin-medium">
                                <h2 className="label">category</h2>
                                <h1 className="data">{chardata.category}</h1>
                            </div>
                            <div>
                                <h1 className={statusHandler(chardata.status)}>{chardata.status}</h1>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-column">
                        <div className="flex-row space-between margin-medium ">
                        <div className="long flex-column margin-medium">
                                <h2 className="label">occupation</h2>
                                {
                                    !chardata.occupation ?
                                        <h2 className="data margin-small">null</h2>
                                    :
                                    chardata.occupation.map(o => 
                                        <h2 className="data margin-small">{o},</h2>
                                    )
                                }
                            </div>
                            <div className="long flex-column margin-medium">
                                <h2 className="label">appearance</h2>

                                {
                                    !chardata.appearance ?
                                        <h2 className="data margin-small">null</h2>
                                    :
                                    chardata.appearance.map(o => 
                                        <h2 className="data margin-small">Season {o},</h2>
                                    )
                                }
                            </div>
                            <div className="long flex-column margin-medium">
                                <h2 className="label">better_call_saul_appearance</h2>

                                {
                                    !chardata.better_call_saul_appearance ?
                                        <h2 className="data margin-small">null</h2>
                                :
                                    chardata.better_call_saul_appearance.map(o => 
                                        <h2 className="data margin-small">{o},</h2>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex-column">
                        <div className="flex-column ">
                                    <h2 className="label">quotes</h2>

                                    {
                                        !chardata.quote ?
                                        <h2 className="data margin-small">null</h2>
                                    :
                                        chardata.quote.map(o => 
                                            <h2 className="data margin-small">" {o} ",</h2>
                                        )
                                    }
                        </div>
                    </div>
                </div>

                

                <Link to='/'>
                    <button className="btn margin-small padding-medium">Back</button>
                </Link>
            </div>
        </div>
            
        </>
    )
}
