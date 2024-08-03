import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: any) => {
        setQuery(e.target.value);
    }

    const handleSearch = (event: any) => {
        if (event.key == 'Enter') {
            console.log("pressed enter");
        }
    }

    return (
        <div>
            <input className='h-10 rounded-md p-2 flex flex-1' type="text" value={query} onChange={handleInputChange} onKeyDown={handleSearch} placeholder='Search ...' />
        </div>
    )
}

export default SearchBar;