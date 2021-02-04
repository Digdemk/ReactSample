import React from 'react'

function Info() {
    return (
        <>
            {/* Wedding information */}
            <div className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="wedding">
                <div className="w3-content">
                    <h1 className="w3-text-grey"><b>THE WEDDING</b></h1>
                    <img className="w3-round-large w3-grayscale-min" src="https://www.w3schools.com/w3images/wedding_location.jpg" style={{ width: '100%', margin: '64px 0' }} />
                    <div className="w3-row">
                        <div className="w3-half">
                            <h2>When</h2>
                            <p>Wedding Ceremony - 2:00pm</p>
                            <p>Reception &amp; Dinner - 5:00pm</p>
                        </div>
                        <div className="w3-half">
                            <h2>Where</h2>
                            <p>Some place, an address</p>
                            <p>Some where, some address</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
