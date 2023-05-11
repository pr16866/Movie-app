import { FaStar } from "react-icons/fa";
import OverView from "./OverView/OverView";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
interface MovieCardProps {
    title: string;
    poster_path: string;
    name: string;
    overview: string;
    vote_average: string;
}
function MovieCard({ title, poster_path, name, overview, vote_average }: MovieCardProps) {

    // let var1 = { title, poster_path, name, overview, vote_average }
    // console.log(var1)
    return (
        <>
            <div className='card'>
                <div className="movie">
                    <div className="movie-image">

                        <img src={IMG_API + poster_path} alt={title} />
                    </div>
                    <div className="movie-info">
                        <div className="name">
                            <h3>{title || name}</h3>
                            {/* <h3>{""}</h3> */}
                        </div>
                        <div className="rating">
                            <h3>{vote_average}</h3>
                            <FaStar color="#FFB31C" className="star" />
                        </div>
                    </div>

                    <OverView overview={overview} />
                </div>
            </div>
        </>
    )
}

export default MovieCard