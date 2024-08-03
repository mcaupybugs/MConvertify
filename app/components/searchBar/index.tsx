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
        <div className='w-full h-full flex'>
            <input className='h-10 self-center rounded-md p-2 flex flex-1 border-solid border-black border-2' type="text" value={query} onChange={handleInputChange} onKeyDown={handleSearch} placeholder='Search ...' />
        </div>
    )
}

export default SearchBar;