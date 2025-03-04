import { useState } from "react";
import productsJson from "../data.json"
import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";

function ProductsPage () {

    const [products, setProducts] = useState(productsJson)
    const searchFoods= productsJson

    function filter (e) {

        const newArr = [... searchFoods]
        
        if (e === "") {
            setProducts(newArr)
        }else{

        const newProdArr = newArr.filter((product)=>{
            return product.name.toLowerCase().startsWith(e)
        })

        setProducts(newProdArr)

        }
    }

    function isInStock(isChecked) {
        let newArr = [...searchFoods]

        if (isChecked) {
            newArr = [... searchFoods].filter((product)=>{
            return product.inStock
        })   
        }

        setProducts(newArr)

        }
        
        
    return (

    <div>
      <h1>IronStore</h1>
      <SearchBar filter={filter} stock={isInStock}/>
      <ProductsTable data={products}/>
    </div>

    )
}

export default ProductsPage;