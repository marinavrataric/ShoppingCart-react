import React, { Component } from 'react'

import productsData from './data/products.json'
import ShoppingCart from './ShoppingCart.js'
import ShoppingBag from './ShoppingBag.js'

class ShoppingList extends Component{
    constructor() {
        super()
        this.state = {
            totalAmount : 0,
            products: [],
            productInBag : []
        }
        this.addNewItem = this.addNewItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount() {
        const allProducts = productsData.products.map((item) => {
            item.count = 0      // adding new property to json 
            return item
        })
        this.setState({
            products : allProducts
        })
    }
    
    addNewItem(id, amount) {
        const productInBagUpdated = this.state.products.filter( item => {
            if(item.id === id ){
                item.count++        
                return item
            }
        })

        this.setState({
            productInBag :[...this.state.productInBag, productInBagUpdated[0]],
            totalAmount : this.state.totalAmount + amount
        })
       
        // delete all duplicates if added
        const addedItem = this.state.productInBag.find( item => item.id === id )

        if(addedItem) {
            const deleteExisting = this.state.productInBag.filter( item => item.id !== id)
            this.setState({
                productInBag : [...deleteExisting, productInBagUpdated[0]]
            })
        }
    }  

    deleteItem(id, amount) {
        const itemUpdated = this.state.productInBag.filter( item => {
            if(id !== item.id){
                return item
            }else{
                item.count = 0
            }
        })
        this.setState({
            productInBag : itemUpdated,
            totalAmount : this.state.totalAmount - amount
        })
    }

    render() {
        const item = this.state.products.map((item) => {
            return (
                    <ShoppingCart 
                        id = {item.id} 
                        name = {item.name}
                        image = {item.image} 
                        amount = {item.price.amount} 
                        currency = {item.price.currency} 
                        measureUnit = {item.price.measureUnit}
                        addNewItem = {this.addNewItem}
                    />
                )
        })
        return ( 
            <div>
                <div className="shoppingList">
                    {item}
                </div>  
                <div>
                    <ShoppingBag 
                        totalAmount = {this.state.totalAmount} 
                        productInBag = {this.state.productInBag}
                        deleteItem = {this.deleteItem}
                    />
                </div>
          </div>
        )
    }
}

export default ShoppingList