import React from 'react'

import NewItem from './NewItem'
import icon from './data/icon.png'

function ShoppingBag(props) {
    const newItem = props.productInBag.map( item => {
        return (
            <div>
                 <NewItem 
                    id = {item.id}
                    name = {item.name}
                    price = {item.price.amount}
                    image = {item.image}
                    counter = {item.count}
                    deleteItem = {props.deleteItem}
                />
            </div>
        )
    })

    return(
        <div className="shoppingBag">
            <div className="containerBag">
                <h1 className="el-name">Košarica</h1>
                <img className="icon" src={icon}></img>
            </div>
           
            {newItem.length === 0 ? <h2 className="el">Vaša košarica je prazna</h2> : newItem}
        
            <hr/>
            <h2 className="el-totalname">Ukupan iznos:</h2>
            <h1 className="el-totalamount"> {props.totalAmount < 0 ? '0.00' : props.totalAmount.toFixed(2)} kn </h1>
        </div>
    )
}

export default ShoppingBag