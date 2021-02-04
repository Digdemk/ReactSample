import React from 'react'

function About() {
    return (
        <>
            <div className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min" id="us">
                <div className="w3-content">
                    <h1 className="w3-center w3-text-grey"><b>Jane &amp; John</b></h1>
                    <img className="w3-round w3-grayscale-min" src="/w3images/wedding_couple2.jpg" style={{ width: '100%', margin: '32px 0' }} />
                    <p><i>You all know us. And we all know you. We are getting married lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</i>
                    </p><br />
                    <p className="w3-center"><a href="#wedding" className="w3-button w3-black w3-round w3-padding-large w3-large">Wedding Details</a></p>
                </div>
            </div>

        </>
    )
}

export default About
