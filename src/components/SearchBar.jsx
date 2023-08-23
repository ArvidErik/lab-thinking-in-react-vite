import { useState } from "react";

function SearchBar(props) {

    const [searchValue, setSearchValue] = useState("")
    
    function handleChange (e) {
        setSearchValue(e)
        // insert a function here
        props.filter(e)
    }
    
    return (

        <form action="">

            <label htmlFor="search">Search</label>
            <input type="text" placeholder="Search..."
            onChange={(e)=>handleChange(e.target.value)} />

        </form>

    )
}

export default SearchBar;