import Product from "./Product";
import ProductCategory from "./ProductCategory";

export default function ProductTable({products, filterText, inStockOnly}) {
    products.sort((a,b) => a.category > b.category ? 1 : -1)
    if (inStockOnly) {
        products = products.filter(product => product.stocked == true)
    } 
    if (filterText !== '') {
        products = products.filter(product => product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
    }
    let rows =[]
    let categoryList = new Set()
    for (let item of products) {
        if (!(categoryList.has(item.category))) {
            categoryList.add(item.category)
            rows.push(<tr key={item.category}><ProductCategory category={item.category}/></tr>)
        } 
        rows.push(<tr key={item.name}><Product name={item.name} price={item.price} stocked={item.stocked}/></tr>)
    }

    
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}   
            </tbody>
        </table>
    )
}