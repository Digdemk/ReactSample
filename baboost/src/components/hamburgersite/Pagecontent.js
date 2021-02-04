import React from 'react'
import About from './About'
import Menu from './Menu'

function Pagecontent() {
    return (
        <>
        <div className="w3-content" style={{maxWidth:1100}}>
            <About></About>
            <Menu></Menu>

        </div>
        </>
    )
}

export default Pagecontent
