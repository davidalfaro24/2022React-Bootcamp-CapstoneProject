import { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { CartContext } from '../store/CartContext';
import classes from './NavBarCustom.module.css'

const NavBarCustom = () => {
    const history = useHistory();
    const [responsive, setResponsive] = useState('');
    const { cartReducer, dispatchCart } = useContext(CartContext);
    let showMenuResponsive = (e) => {
        e.preventDefault()
        let navBar = document.getElementById('navBar').className;
        if (navBar.indexOf('responsive') !== -1) {
            setResponsive('');
        } else {
            setResponsive(true);
        }
    }
    const onChangeSearch = (e) => { 
        dispatchCart({type: 'SEARCHFIELD', payload: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!cartReducer.search) { return false }
        dispatchCart({type: 'SEARCHFIELD', payload: ''})
        history.push('/search?q=' + cartReducer.search);
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
                <NavLink to="/home" activeClassName={classes.active}>
                    <i className='fa fa-home' /> Home
                </NavLink>
                <NavLink to="/products" activeClassName={classes.active}>
                    <i className='fa fa-list-alt' /> Product List
                </NavLink>
                <NavLink to="#C"><i className='fa fa-shopping-cart' /> Cart</NavLink>
                <form className={classes['search-form']} onSubmit={onSubmit} >
                    <input type="text" name="search" id='search-box' 
                        placeholder="Search" onChange={onChangeSearch}/>
                    <button type='submit'>Search</button>
                </form>
            </nav>
        </header>
    )
}

export default NavBarCustom;