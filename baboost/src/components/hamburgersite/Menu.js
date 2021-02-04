import React from 'react'

function Menu() {

    let menulist = [
        {
            name: 'Bread Basket',
            description: 'Assortment of fresh baked fruit breads and muffins 5.50'
        },
        {
            name: 'Honey Almond Granola with Fruits',
            description: 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00'
        },
        {
            name: 'Belgian Waffle',
            description: 'Vanilla flavored batter with malted flour 7.50'
        },
        {
            name: 'Scrambled eggs',
            description: 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50'
        },
        {
            name: 'Blueberry Pancakes',
            description: 'With syrup, butter and lots of berries 8.50'
        },
    ]
    return (
        <>
        {/* Menu Section */}
        <div className="w3-row w3-padding-64" id="menu">
          <div className="w3-col l6 w3-padding-large">
            <h1 className="w3-center">Our Menu</h1><br />

            {
                menulist.map((item) =>
                (
                    <>
                    <h4>{item.name}</h4>
                    <p className="w3-text-grey">{item.description}</p></>
                )
                )
            }
            {/* <h4>Bread Basket</h4>
            <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />
            <h4>Honey Almond Granola with Fruits</h4>
            <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />
            <h4>Belgian Waffle</h4>
            <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />
            <h4>Scrambled eggs</h4>
            <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />
            <h4>Blueberry Pancakes</h4>
            <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>     */}
          </div>
          <div className="w3-col l6 w3-padding-large">
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" className="w3-round w3-image w3-opacity-min" alt="Menu" style={{width: '100%'}} />
          </div>
        </div>
        <hr />
      </>
    )
}

export default Menu
