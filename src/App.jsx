import { useState } from 'react'
import FilterableProductTable from './components/FilterableProductTable'
import './App.css'


function App() {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Fruits", price: "$3", stocked: true, name: "Cherry" },
    { category: "Nuts", price: "$2", stocked: true, name: "Almond" }
  ]
  return (
    <>
      <FilterableProductTable products={products}/>
    </>
  )
  
}

export default App


