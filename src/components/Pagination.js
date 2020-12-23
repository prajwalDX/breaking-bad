import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pagination.css'
export default function Pagination ({ totalPages, handleClick })  {

    const pages = [...Array(totalPages).keys()].map(o => o+1);
    return (
        <>
        <div className="wrapper">
            <div className="container">
                <div className="flex-row justify-content">
                { pages.map(o => (
                    <button
                    className="btn"
                    onClick={() => handleClick(o)}
                    >{o}</button>
                )) }
                </div>
            </div>
        </div>
    
    </>
    
    )
    }