import React from 'react'

function ShoppingCart(props) {

    let num = props.amount
    num = (num + '').split('.')
    console.log(num[0] + ' ' + num[1])
    
    return(
        <div className="cart">
            <img className="image" src={props.image}></img>
            <p className="name">{props.name}</p>

            <div className="outside">
                <div className="priceContainer">
                    <p className="price1">{num[0]}</p>
                    <p className="price2">{num[1]}</p>
                    <p className="measure">{props.currency}/{props.measureUnit}</p>
                </div>
            </div>
          
            
            <button 
                className="btnAdd" 
                onClick={() => props.addNewItem(props.id, props.amount)}
            >Dodaj</button>
        </div>
    )
}

export default ShoppingCart