// import React from "react"
// import "./Header.css"
// import { Link } from "react-router-dom"

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="headerLeft">
//                 <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
//                 <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
//                 <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
//                 <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
//             </div>
//         </div>
//     )
// }

// export default Header
// import React, { useState } from "react";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//     const [query, setQuery] = useState("");
//     const navigate = useNavigate();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (query.trim()) {
//             navigate(`/search/${query}`);
//         }
//     };

//     return (
//         <div className="header">
//             <div className="headerLeft">
//                 <Link to="/">
//                     <img
//                         className="header__icon"
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
//                         alt="IMDB Logo"
//                     />
//                 </Link>
//                 <Link to="/movies/popular" style={{ textDecoration: "none" }}>
//                     <span>Popular</span>
//                 </Link>
//                 <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
//                     <span>Top Rated</span>
//                 </Link>
//                 <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
//                     <span>Upcoming</span>
//                 </Link>
//             </div>
//             <div className="headerRight">
//                 <form onSubmit={handleSearch} className="searchForm">
//                     <input
//                         type="text"
//                         className="searchInput"
//                         placeholder="Search for a movie..."
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                     />
//                     <button type="submit" className="searchButton">
//                         Search
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm.trim()}`);
        }
    };

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="Logo" /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Search for a movie..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="header__searchInput"
                    />
                    <button type="submit" className="header__searchButton">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;
