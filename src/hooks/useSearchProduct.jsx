import { useState } from "react";

function useSearchProduct (items, searchKeys) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = (event) => {
        const value = String(event.target.value).toLowerCase();
        setQuery(value);
        if(value.trim() === "") {
            setResults(items)
        } else {
            const filtered = items.filter((item) => searchKeys.some((key) => item[key].toLowerCase().includes(value)))
            setResults(filtered)
        }
    }

    return {query, results, handleSearch}
}

export default useSearchProduct;