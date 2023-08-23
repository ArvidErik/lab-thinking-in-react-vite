import { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar(props) {

    const [searchValue, setSearchValue] = useState("")
    const [isChecked, setIsChecked] = useState("false")
    
    function handleChange (e) {
        setSearchValue(e)
        // insert a function here
        props.filter(e)
    }

    function ifChecked (e) {
        setIsChecked(e.target.checked)
        props.stock(e.target.checked)
    }



    
    return (

        <form action="" className="form">

            <label htmlFor="search"><h3>Search</h3></label>
            <input type="text" placeholder="Search..." className="search"
            onChange={(e)=>handleChange(e.target.value)} />

            <div>
            <input type="checkbox" name="checkbox" className="check-input" value={isChecked} 
            onChange={(e)=>ifChecked(e)}/> 
            <label htmlFor="checkbox" className="check-label">Only show products in stock</label>
            </div>

        </form>

    )
}

export default SearchBar;