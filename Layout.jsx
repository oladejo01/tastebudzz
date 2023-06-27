import React from 'react'
import Auxi from '../../hoc/Auxi'
import classes from "./Layout.css"

const Layout = (props) => (
    <Auxi> 
        <div> Toolbar, Sidedrawer, Hamburger</div>
        <main className="Content">{props.children}</main>
    </Auxi>
)

export default Layout