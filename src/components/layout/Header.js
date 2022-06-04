/* eslint-disable max-len */
import classes from './Header.module.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
    return (
        // <header className={classes.header}>
        //     <div>LOGO </div>
        //     <nav className={classes.navbar} id='navBar'>
        //         <button type="button" className='navbar-toggler collapsed'>
        //             <span className='navbar-toggler-icon' />
        //         </button>
        //         <a href="#t"> <i className='fa fa-bars'/></a>
        //         <a href="#H">Home</a>
        //         <a href="#P">Product List</a>
        //         <a href="#C">CheckOut</a>
        //         <a href="#S">ShopingCard</a>

        //     </nav>

        //     <form className={classes['search-form']}>
        //         <input type="text" name="search" id='search-box' placeholder="Search" />
        //         <button type="submit">Search</button>
        //     </form>
        // </header>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/l" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider" />
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

const showMenuResponsive = () => {
    let navBar = document.getElementById('menuBtnpplplpl')
    if (navBar.className === 'navbar') {
        navBar.className += ' responsive'
    } else {
        navBar.className = 'navbar'
    }
}

export default Header