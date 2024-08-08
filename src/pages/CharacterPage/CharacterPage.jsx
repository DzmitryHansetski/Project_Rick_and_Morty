import axios from "axios";
import { useEffect, useState } from "react"
import s from './CharacterPage.module.css'
import { Link } from "react-router-dom";

export const CharacterPage = () => {

    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(null)

    let [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null
    })

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setCharacters(res.data.results);
            setInfo(res.data.info);
            setError(null)
        }).catch((err) => {
            setError(err.message)
        })
    };
    
    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/character')
    }, [])
    
    const nextPageHandler = () => {
        fetchData(info.next)
    }
    
    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    const searchHandler = (e) => {
        const value = e.currentTarget.value;
        fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
    }

    return (
        <div className='pageContainer'>
            <h1 className='pageTitle'>CharacterPage</h1>
            <input type="search" className={s.search} onChange={searchHandler} placeholder="Search..."/>
            
            {!!error && <div className='errorMessage'>{error}</div>}
            
            {!error && <>
                <div className={s.characters}>
                    {
                        characters.map((character) => {
                            return <div className={s.character} key={character.id}>
                                <Link to={`/characters/${character.id}`} className={s.characterLink}>{character.name}</Link>
                                <img src={character.image} alt="character"/>
                            </div>
                        })
                    }
                </div>
                <div className={s.buttonContainer}>
                    <button className='linkButton' disabled={info.prev === null} onClick={previousPageHandler}>Назад
                    </button>
                    <button className='linkButton' disabled={info.next === null} onClick={nextPageHandler}>Вперед
                    </button>
                </div>
            </>}
        </div>
    )
}