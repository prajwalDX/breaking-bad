import React, { useEffect, useState } from 'react'
import './Home.css'

import Pagination from './Pagination'
import Characters from './Characters'
export default function Home() {

    const [datac, setDatac] = useState(JSON.parse(localStorage.getItem('datac')))
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('')


    const fetchData = async () => {
        const resc= await fetch(`https://www.breakingbadapi.com/api/characters`)
        const resq = await fetch(`https://www.breakingbadapi.com/api/quotes`)
        const datac = await resc.json()
        const dataq = await resq.json()
        localStorage.setItem('datac', JSON.stringify(datac))
        localStorage.setItem('dataq', JSON.stringify(dataq))
        setDatac(datac)
        setLoading(false)
    }
    
    useEffect(() => {
        if(!localStorage.getItem('datac')){
            fetchData()
        }
        else{
            setTotalPages(Math.ceil(datac.length / 10));
            setLoading(false)
    
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
    let total_pages = Math.ceil(datac.length / 10)
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = num => {
        setPage(num);
      }
    

    return ( loading ? 
        <div className="wrapper">
            <div className="container flex-row justify-content">
                <h1>loading</h1>
            </div>
        </div>
:
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="">
                            <div className="search-wrapper">
                                <input onChange={searchHandler} className="search" type="text" name="search" id="search" placeholder="Search"/>
                            
                            </div>
                    </div>
                    <div className="pages">
                        
                    </div>
                    <Characters datac={datac} page={page} search={search}/>
                    <Pagination totalPages={totalPages} handleClick={handleClick} />
                
                </div>
            </div>
        
        </>
    
    )
}
