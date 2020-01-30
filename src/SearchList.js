import React, { Component } from 'react'

import ShoppingCart from './ShoppingCart'

class SearchList extends Component {
    constructor() {
        super()
        this.state = {
            input : ''
        }
        this.getValue = this.getValue.bind(this)
    }

    getValue(e){
        e.preventDefault()
        this.setState({
            input: e.target.value
        })       
    }

    render() {
        let inputLowerCase = this.state.input.toLowerCase();

        const filteredProducts = this.props.products.map( item => { 
            if(item.name.toLowerCase().indexOf(inputLowerCase) != -1) {
                return (
                    <ShoppingCart 
                        id = {item.id} 
                        name = {item.name}
                        image = {item.image} 
                        amount = {item.price.amount} 
                        currency = {item.price.currency} 
                        measureUnit = {item.price.measureUnit}
                        addNewItem = {this.props.addNewItem}
                    />
                )
            }
        }) 
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="filter" 
                        onChange={this.getValue}>
                    </input>
                </form>
                <div className="shoppingList">
                    {filteredProducts}
                </div>  
            </div>
        )
    }
}

export default SearchList