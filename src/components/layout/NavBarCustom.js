import { useContext, useEffect,useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { CartContext } from '../store/CartContext';
import classes from './NavBarCustom.module.css'

const NavBarCustom = () => {
    const history = useHistory();
    const [responsive, setResponsive] = useState('');
    const [totalItems, setTotalItems] = useState(0)
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

    useEffect(() => {
        let totalItemsCart = cartReducer.cart.reduce((total, curVal) => {
            return total + Number(curVal.quantity)
        }, 0)
        setTotalItems(totalItemsCart)
    }, [cartReducer.cart])
    

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
                <NavLink to="/cart" activeClassName={classes.active}>
                    <i className='fa fa-shopping-cart' />
                    {`Cart ${totalItems === 0 ? '' : totalItems}`}
                </NavLink>
                <form className={classes['search-form']} onSubmit={onSubmit} >
                    <input type="text" name="search" id='search-box' 
                        placeholder="Search" onChange={onChangeSearch} value={cartReducer.search}/>
                    <button type='submit'>Search</button>
                </form>
            </nav>
        </header>
    )
}

export default NavBarCustom;