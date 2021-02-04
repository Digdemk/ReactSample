import React from 'react'
import About from './About'
import Contact from './Contact'
import Location from './Location'
import Projects from './Projects'

function Pagecontent() {
    return (
        <>
            <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Location></Location>
            


        </>
    )
}

export default Pagecontent
