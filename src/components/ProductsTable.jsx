import ProductRow from "./ProductRow";

function ProductsTable (props) {
    return (

        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
            </thead>

            <tbody>
                {props.data.map((product)=>{
                    return <ProductRow data={product}/>
                })}

            </tbody>


        </table>

    )
}

export default ProductsTable;