import s from './Header.module.css';
import logo from '../../../assets/img/logo.png';
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <div className={s.container}>
            <img className={s.logo} src={logo} alt="logo"/>
            <NavLink to={'/'} className={s.headerLink}>Home</NavLink>
            <NavLink to={'/characters'} className={s.headerLink}>Characters</NavLink>
            <NavLink to={'/locations'} className={s.headerLink}>Locations</NavLink>
            <NavLink to={'/episodes'} className={s.headerLink}>Episodes</NavLink>
        </div>

    )
}