import React, {useState} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu} from './Navbar.elements'
import {FaBars, FaTimes} from 'react-icons/fa'



const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    SAIL
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu click={click}>

                </NavMenu>
            </NavbarContainer>
            
        </Nav>
    )
}

export default Navbar
