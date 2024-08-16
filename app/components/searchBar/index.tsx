import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='w-full h-full flex border-solid border-black rounded-md border-2'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' className='h-full self-center bg-white p-2'></FontAwesomeIcon>
            <input className='h-10 self-center p-2 flex flex-1 focus:outline-none placeholder:text-black' type="text" value={query} onChange={handleInputChange} onKeyDown={handleSearch} placeholder='Search ...' />
        </div>
    )
}

export default SearchBar;