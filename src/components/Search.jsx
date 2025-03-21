import {useState} from "react";

function Search(props) {

    const [searchTerm, setSearchTerm] = useState("Search...")
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        props.callback(event);
    };

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" placeholder={searchTerm} onChange={handleChange}/>
        </div>
    )
}

export default Search;