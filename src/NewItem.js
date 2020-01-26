import React from 'react'

function NewItem(props) {
    const total = (props.price * props.counter).toFixed(2)

    return (
        <div className="newItemContainer">
            <img className="right" src={props.image}></img>
            <div className="left">
                <h3 className="product">{props.counter}x {props.name} </h3>
                <h4 className="totalPrice"> Ukupno: {total} kn</h4>
                <button 
                    className="btnDelete" 
                    onClick={() => props.deleteItem(props.id, (props.price*props.counter))}
                >X</button>
            </div>
        </div>
    )
}

export default NewItem