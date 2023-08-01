import { useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
const Favorite = () => {
  const navigate = useNavigate();
  const { favorite, RemoveFromFavorite } = useContext(AppContext);

  return (
    <>
      <div className="Heading">
        <h1>this is your favorite page</h1>
        <button className="btnn" onClick={() => navigate("/")}>
          Go back
        </button>
        <div className="grid grid-4-col">
          {favorite.map((ele, index) => {
            const { imdbID, Title, Poster } = ele;
            console.log("id favorit book", imdbID);
            return (
              <div className="favorite-img" key={index}>
                <div className="card-img">
                  <div className="card-title">
                    <h2>{Title}</h2>
                  </div>
                  <img src={Poster} alt="alt" />
                  <button
                    className="btnn"
                    onClick={() => RemoveFromFavorite(imdbID)}
                  >
                    Remove From Favorite
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorite;
