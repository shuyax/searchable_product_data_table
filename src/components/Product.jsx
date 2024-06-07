export default function Product({name, price, stocked}) {
    if (stocked) {
        return(
            <>
                <td className="product-name">{name}</td>
                <td className="product-price">{price}</td>
            </>
            
        )
    }
    return(
        <>
            <td className="product-name" style={{ color: 'red' }}>{name}</td>
            <td className="product-price" style={{ color: 'red' }}>{price}</td>
        </>
        
    )
}