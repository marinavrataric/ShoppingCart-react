import React, { Component } from 'react'

import productsData from './data/products.json'
import ShoppingBag from './ShoppingBag.js'
import SearchList from './SearchList'

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
        const allProducts = productsData.products.map( item => {
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

        this.setState( prevState => {
            return{
                productInBag :[...this.state.productInBag, productInBagUpdated[0]],
                totalAmount : prevState.totalAmount + amount
            }
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
        this.setState( prevState => {
            return{
                productInBag : itemUpdated,
                totalAmount : prevState.totalAmount - amount
            }
        })
    }

    render() {
        return ( 
            <div>
                <div>
                    <SearchList 
                        products = {this.state.products} 
                        addNewItem={this.addNewItem}/>
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