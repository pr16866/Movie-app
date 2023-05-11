import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { fetchData } from '../../Services';

function NavBar() {
    const [searchTerm, setSearchTerm] = useState<string>();
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
    const [movies, setMovies] = useState<any>([]);

    const handleOnChange = (e: any) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        if (typeof searchTerm === undefined) return;
        const delayDebounce = setTimeout(() => {
            setDebouncedSearchTerm(debouncedSearchTerm);
        }, 500);

        return () => {
            clearTimeout(delayDebounce);
        };
    }, [searchTerm]);


    useEffect(() => {
        if (debouncedSearchTerm === "") return;
        getData()
    }, [debouncedSearchTerm])
    const getData = async () => {
        let resp = await fetchData();
        setMovies(resp);
    }

    return (
        <div className='navContainer'>
            {/* <h1>Piysuh is the best</h1> */}
            <div className="form">
                <input
                    type="search"
                    placeholder="search"
                    // value={searchTerm}
                    onChange={(e: any) => handleOnChange(e)}
                />
            </div>
            <div className="icon">
                <a href="https://github.com/">
                    <FaGithub color="white" size="2.5rem" />
                </a>

            </div>

        </div>
    )
}

export default NavBar