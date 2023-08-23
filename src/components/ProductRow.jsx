function ProductRow (props) {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.price}</td>
            <td>{props.data.category}</td>
            <td>{props.data.inStock ? "yes" : "no"}</td>
        </tr>
    )
}

export default ProductRow;