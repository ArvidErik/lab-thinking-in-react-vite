import ProductRow from "./ProductRow";
import "../styles/SearchBar.css"


function ProductsTable (props) {
    return (

        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>inStock</th>
            </thead>

            <tbody>
                {props.data.map((product, i)=>{
                    return <ProductRow data={product} key={i}/>
                })}

            </tbody>


        </table>

    )
}

export default ProductsTable;