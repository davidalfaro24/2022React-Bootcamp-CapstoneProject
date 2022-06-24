/* eslint-disable max-len */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './NavBarCustom.module.css'


const NavBarCustom = () => {
    const [responsive, setResponsive] = useState('');
    let showMenuResponsive = (e) => {
        e.preventDefault()
        let navBar = document.getElementById('navBar').className;
        if (navBar.indexOf('responsive') !== -1) {
            setResponsive('');
        } else {
            setResponsive(true);
        }
    }

    return (
        <header className={classes.header}>
            <Link to='/home'>
                <div className={classes.logo}><h1><i className='fa fa-tree' /> Wood Home</h1> </div>
            </Link>
            <nav className={`${classes.navbar} ${responsive && classes.responsive}`} id='navBar'>
                <a href="/" className={classes.icon} onClick={showMenuResponsive}>
                    <i className='fa fa-bars' />
                </a>
                <NavLink to="/home" activeClassName={classes.active}><i className='fa fa-home' /> Home</NavLink>
                <NavLink to="/products" activeClassName={classes.active}><i className='fa fa-list-alt' /> Product List</NavLink>
                <NavLink to="#C"><i className='fa fa-shopping-cart' /> Cart</NavLink>
                <form className={classes['search-form']}>
                    <input type="text" name="search" id='search-box' placeholder="Search" />
                    <button type="submit">Search</button>
                </form>
            </nav>
        </header>
    )
}



export default NavBarCustom;