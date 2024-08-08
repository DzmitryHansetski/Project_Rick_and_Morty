import s from './HomePage.module.css'
import {NavLink} from "react-router-dom";


export const HomePage = () => {
    return (   
        <div className={s.mainWrapper}>
            <h1 className="pageTitle pageTitleMain">The Rick and Morty</h1>
            <div className={s.linkWrapper}>
                <NavLink to={'/characters'} className='linkButton'>Characters</NavLink>
                <NavLink to={'/locations'} className='linkButton'>Locations</NavLink>
                <NavLink to={'/episodes'} className='linkButton'>Episodes</NavLink>
            </div>
        </div>
    )
}
