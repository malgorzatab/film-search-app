import './Films.css';


const Films = ({ films }) => {
    return (
        <>
            {films.length > 0 && <h2>Results: </h2>}
            <div className={"list"}>
                {films.map(film => (
                    <div className={"card"} key={film.imdbID}>
                        <img src={film.Poster} alt={"film poster"} />
                        <div className={"description"}>
                            <h2>{film.Title}</h2>
                            <p>Year: {film.Year}</p>
                            <p>Type: {film.Type}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}


export default Films;
