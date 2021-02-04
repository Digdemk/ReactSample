import React from 'react'
import About from './About'
import Firstgrid from './Firstgrid'
import Pagination from './Pagination'
import Secondgrid from './Secondgrid'

function Pagecontent() {
    return (
        <>
            <div className="w3-main w3-content w3-padding" style={{ maxWidth: '1200px', marginTop: '100px' }}></div>

            <Firstgrid></Firstgrid>
            <Secondgrid></Secondgrid>
            <Pagination></Pagination>
            <About></About>
        </>
    )
}

export default Pagecontent
