import { useState } from 'react';

import Films from '../Films/Films';
import SearchField from '../../controls/SearchField';


const FilmSearch = () => {
    const [films, setFilms] = useState([]);
    const [error, setError] = useState("");


    const handelSearch = (search) =>
        fetch(`https://www.omdbapi.com/?apikey=1d60c136&s=${search}`)
            .then((res) => res.json())
            .then(data => {
                if (data.Search) {
                    setFilms(data.Search)
                } else {
                    setError(data.Error);
                    setFilms([]);
                }
            })
            .catch(err => {
                console.log(err.message)
            });

    return (
        <div className={"content"}>
            <SearchField handelSearch={handelSearch} />
            {films.length > 0 ? <Films films={films} /> : <div className={"error"}>{error}</div>}
        </div>
    );
}


export default FilmSearch;
