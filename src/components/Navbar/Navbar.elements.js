import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiAbstract042} from 'react-icons/gi'

export const Nav = styled.div`
height: 80px;
background-color: #2f2626;
display:flex;
align-items:center;
justify-content: center;
position:sticky;
top:0;
`

export const NavbarContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
padding-left: 50px;
padding-right: 50px;
color: white;
max-width:1300px;
margin-right:auto;
margin-left:auto;
`

export const NavLogo = styled(Link)`
color: white;
text-decoration: none;
cursor: pointer;
justify-self: flex-start;
display: flex;
font-size: 2rem;
align-items: center
`
export const NavIcon = styled(GiAbstract042)`
margin-right: 0.5rem
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px)
{
    color: white;
    justify-self: flex-end;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 1.8rem;
    cursor: pointer
}
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
text-align:center;
list-style:none;


@media screen and (max-width:960px)
{
    position: absolute;
    top: 80px;
    left:${({click}) => (click ? 0 : '-100%')};
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    background-color:#2f2626; 
    transition: all 0.5 ease

}
`

export const NavItem = styled.li`
height: 80px;
border: 2px solid transparent;
padding: 0.5rem 1rem;

&:hover
{
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px)
{
    width:100%;
    &:hover
    {
        border: none;
    }
}

`

export const NavItemLink = styled(Link)`
color: white;
display:flex;
flex-direction: row;
align-items: center;
text-decoration: none;
height:100%;

@media screen and (max-width: 960px)
{
    width:100%;
    padding: 2rem;
    text-align:center;
    display: table;
    &:hover
    {
        color: #4b59f7;
        transition: all 0.3 ease
    }
}
`
