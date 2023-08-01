import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const { query, setQuery, isError } = useContext(AppContext);
    const navigate = useNavigate()
    return (
        <section className='creating-section'>
            <h1>Search your favorite movie here</h1>
            <div className='FavoriteData'>
                <button className='btn' onClick={() => navigate('Favorite')}>See your favorite Movies</button>
            </div>
            <form action='#' onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type='text'
                        placeholder='serach here'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />

                </div>

            </form>
            <div className='card-err'>
                <p>{isError.show && isError.msg}</p>
            </div>
        </section>


    )
}

export default Search