import React from 'react'
import john from './images/john.jpg'
import Jane from './images/jane.jpg'

function About() {

    let projectslist = [
        {

            image: <img src={john} alt="john" />,
            name: 'John Doe',
            title: 'CEO & Founder',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',

        },

        {
            image: <img src={Jane} alt="jane" />,

            name: 'Jane Doe',
            title: 'Architect',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',

        },
        {
            image: <img src={john} alt="john" />,

            name: 'Mike Ross',
            title: 'Architect',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',

        },
        {
            image: <img src={john} alt="john" />,

            name: 'Dan Star',
            title: 'Architect',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',

        }
    ]
    return (
        <>

            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 !important">About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>


                <div className="w3-row-padding w3-grayscale">
                    {/* <div className="w3-col l3 m6 w3-margin-bottom"> */}
                    {
                        projectslist.map((item) =>
                        (



                            // {item.name == 'Jane' ? (<h3 style={{ color: 'red' }}></h3>) : <h3></h3> }

                            < div className="w3-col 13 m6 margin-bottom" style={{ width: '24.9%' }} >
                                <p>{item.image} </p>
                             {item.name == 'Jane Doe' ? (<h3 style={{color: 'red'}}>{item.name}</h3>) : <h3>{item.name}</h3>}
                                <p className="w3-opacity"> {item.title} </p>
                                <p>{item.desc}</p>
                                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>

                            </div>



                        )
                        )

                    }




                    {/* <img src={john} alt="John" style={{ width: '100%' }} />
                        <h3>John Doe</h3>
                        <p className="w3-opacity">CEO &amp; Founder</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p> */}
                    {/* </div> */}
                    {/* <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="https://www.w3schools.com//w3images/team1.jpg" alt="Jane" style={{ width: '100%' }} />
                        <h3>Jane Doe</h3>
                        <p className="w3-opacity">Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="https://www.w3schools.com//w3images/team3.jpg" alt="Mike" style={{ width: '100%' }} />
                        <h3>Mike Ross</h3>
                        <p className="w3-opacity">Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="https://www.w3schools.com//w3images/team4.jpg" alt="Dan" style={{ width: '100%' }} />
                        <h3>Dan Star</h3>
                        <p className="w3-opacity">Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default About
