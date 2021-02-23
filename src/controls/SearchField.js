import { useState } from 'react';


const SearchField = ({
    handelSearch
}) => {
    const [search, setSearch] = useState("");

    return (
        <>
        <input
            placeholder={"Enter film's title"}
            value={search}

            onChange={event => setSearch(event.target.value)}
        />
        <button onClick={() => handelSearch(search)}>Search</button>
        </>
    );
};


export default SearchField;
