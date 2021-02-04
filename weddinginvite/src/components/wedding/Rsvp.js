import React from 'react'

function Rsvp() {
    return (
        <>
            <div className="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
                <h1>HOPE YOU CAN MAKE IT!</h1>
                <p className="w3-large">Kindly Respond By January, 2017</p>
                <p className="w3-xlarge">
                    <button onclick="document.getElementById('id01').style.display='block'" className="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style={{ padding: '8px 60px' }}>RSVP</button>
                </p>
            </div>
            {/* RSVP modal */}
            <div id="id01" className="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{ padding: 32, maxWidth: 600 }}>
                    <div className="w3-container w3-white w3-center">
                        <h1 className="w3-wide">CAN YOU COME?</h1>
                        <p>We really hope you can make it.</p>
                        <form>
                            <input className="w3-input w3-border" type="text" placeholder="Name(s)" name="name" />
                        </form>
                        <p><i>Sincerely, John &amp; Jane</i></p>
                        <div className="w3-row">
                            <div className="w3-half">
                                <button onclick="document.getElementById('id01').style.display='none'" type="button" className="w3-button w3-block w3-green">Going</button>
                            </div>
                            <div className="w3-half">
                                <button onclick="document.getElementById('id01').style.display='none'" type="button" className="w3-button w3-block w3-red">Can't come</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Rsvp
