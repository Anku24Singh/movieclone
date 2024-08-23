// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import MovieCard from "./MovieCard"; // Assuming you have a component to display each movie card
// import Movie from "../../pages/movieDetail/movie";

// const SearchResults = () => {
//     const { query } = useParams();
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c38e7f713a69c8b00cc05f7b1d0638de&query=${query}`);
//             const data = await response.json();
//             setMovies(data.results);
//         };

//         fetchMovies();
//     }, [query]);

//     return (
//         <div className="searchResults">
//             <h2>Search Results for "{query}"</h2>
//             <div className="moviesGrid">
//                 {movies.map((movie) => (
//                     <Movie key={movie.id} movie={movie} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SearchResults;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Movie from "../../pages/movieDetail/movie" 
// // import "./SearchResults.css";

// const SearchResults = () => {
//     const { query } = useParams();
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c38e7f713a69c8b00cc05f7b1d0638de=${query}`);
//                 const data = await response.json();
//                 setMovies(data.results);
//             } catch (error) {
//                 console.error("Error fetching movies:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMovies();
//     }, [query]);

//     if (loading) {
//         return <div className="loading">Loading...</div>;
//     }

//     return (
//         <div className="searchResults">
//             <h2>Search Results for "{query}"</h2>
//             {movies.length > 0 ? (
//                 <div className="moviesGrid">
//                     {movies.map((movie) => (
//                         <Movie 
//                             key={movie.id} 
//                             movie={movie} 
//                             highlight={movie.title.toLowerCase() === query.toLowerCase()} 
//                         />
//                     ))}
//                 </div>
//             ) : (
//                 <div className="noResults">
//                     <h3>Movie not present</h3>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchResults;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../../pages/movieDetail/movie"  
// import "./SearchResults.css";

const SearchResults = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieFound, setMovieFound] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setMovieFound(false);

            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c38e7f713a69c8b00cc05f7b1d0638de&query=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }
                const data = await response.json();
                setMovies(data.results);

                // Check if any movie exactly matches the query
                const foundMovie = data.results.some(movie => movie.title.toLowerCase() === query.toLowerCase());
                setMovieFound(foundMovie);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchMovies();
        }
    }, [query]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="searchResults">
            <h2>Search Results for "{query}"</h2>
            {movies.length > 0 ? (
                <div className="moviesGrid">
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id} 
                            movie={movie} 
                            highlight={movie.title.toLowerCase() === query.toLowerCase()} 
                        />
                    ))}
                </div>
            ) : (
                <div className="noResults">
                    <h3>Movie not found</h3>
                </div>
            )}
            {!movieFound && (
                <div className="noResults">
                    <h3>Movie not found</h3>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
