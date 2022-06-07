import { useState } from 'react';
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
            <div className={classes.logo}><h1><i className='fa fa-tree' /> Wood Home</h1> </div>
            <nav className={`${classes.navbar} ${responsive && classes.responsive}`} id='navBar'>
                <a href="/" className={classes.icon} onClick={showMenuResponsive}>
                    <i className='fa fa-bars' />
                </a>
                <a href="#H"><i className='fa fa-home' /> Home</a>
                <a href="#P"><i className='fa fa-list-alt' /> Product List</a>
                <a href="#C"><i className='fa fa-shopping-cart' /> Cart</a>
                <form className={classes['search-form']}>
                    <input type="text" name="search" id='search-box' placeholder="Search" />
                    <button type="submit">Search</button>
                </form>
            </nav>

        </header>


    )
}



export default NavBarCustom;