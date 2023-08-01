import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context";

const Movies = () => {
  const { movie, AddtoFavorite, RemoveFromFavorite, favorite } =
    useContext(AppContext);
  // if (isLoading) {
  //     return (
  //         <>
  //         <section className="container">
  //         <div className="grid grid-4-col">
  //         <div className=" ">
  //             <div className="loding">
  //                 Loading.......
  //             </div>
  //         </div>
  //         </div>
  //     </section>

  //         </>

  //     )
  // }
  const favoriteChecker = (id) => {
    console.log(favorite);
    let boolean = favorite.some((book) => book.imdbID === id);

    console.log(boolean, "================================");
    return boolean;
  };

  return (
    <>
      <section className="container">
        <div className="grid grid-4-col">
          {movie.map((ele, index) => {
            const { imdbID, Title, Poster } = ele;
            let MovieName = Title.substring(0, 15);
            return (
              <div className="card" key={index}>
                <div className="card-info">
                  <h2>
                    {MovieName.length >= 15 ? `${MovieName}...` : MovieName}
                  </h2>
                  <img src={Poster} alt={imdbID} />

                  <NavLink to={`movie/${imdbID}`}>
                    <button className="btnn">see Details</button>
                  </NavLink>
                  {favoriteChecker(imdbID) ? (
                    <button
                      className="btn"
                      onClick={() => {
                        RemoveFromFavorite(imdbID);
                      }}
                    >
                      Remove to favorite
                    </button>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => {
                        AddtoFavorite(ele);
                      }}
                    >
                      Add to favorite
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
