import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();

export const Api_URL = `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  // console.log(movie, '===================');
  const [isError, setError] = useState({ show: false, msg: "" });
  const [favorite, setFavorite] = useState([]);
  console.log("favorite");
  const getMovies = async (url) => {
    setIsLoading(false);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data.Search);
        setIsLoading(false);
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AddtoFavorite = (movie) => {
    const OldMovies = [...favorite];
    const AddNew = OldMovies.concat(movie);
    console.log(AddNew, "addnew");
    setFavorite(AddNew);
  };

  const RemoveFromFavorite = (id) => {
    const OldMovies = [...favorite];
    console.log("RemoveFromFavorite is on");
    const AddNew = OldMovies.filter((ele) => ele.imdbID !== id);
    setFavorite(AddNew);
  };

  useEffect(() => {
    getMovies(
      query
        ? `${Api_URL}&s=${query}`
        : `https://omdbapi.com/?apikey=ef018f8b&s=titanic`
    );
  }, [query]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading....</h1>
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        isError,
        isLoading,
        movie,
        query,
        setQuery,
        AddtoFavorite,
        RemoveFromFavorite,
        favorite,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider };
