import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Api_URL } from './Context'
import { NavLink } from 'react-router-dom'
const SingleMovie = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState('');
    console.log(movie, 'movi id')

    console.log("id " + id);


    const getMovies = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`https://omdbapi.com/?apikey=ef018f8b&i=${id}`)
            const data = await res.json();
            if (data.Response === "True") {
                setMovie(data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getMovies()
    }, [])


    if (isLoading) {
        return (
            <div className='loading'>
                <h1>loading....</h1>
            </div>
        )
    }

    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src={movie.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>

                    <p className="card-text">Release Time:{movie.Released}</p>
                    <p className="card-text">Movies type:{movie.Genre}</p>
                    <p className="card-text">imdbRating:{movie.imdbRating} / 10</p>
                    <p className="card-text">Country:{movie.Country}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default SingleMovie