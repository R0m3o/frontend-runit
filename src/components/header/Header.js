import React from 'react';
import Menu from './Menu';
import Search from './Search';
import NextEvent from './NextEvent';

function Header() {
    return(
        <header className="row">
            <Menu/>
            <Search/>
            <NextEvent/>
        </header>
    )
}

export default Header