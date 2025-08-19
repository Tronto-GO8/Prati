import { Link, NavLink, redirect } from "react-router-dom"

const linkStayle = ( {isActive}) => ({
    margin: "1px solid #000",
    padding: '10px 6px',
    color: isActive ? "#1900ffff" : "#000000ff"
})

export default function NavBar(){
    return(
        <nav>
            <NavLink to="/" style={linkStayle}>Home</NavLink>
            <NavLink to='/favoritos' style={linkStayle}>Favoritos</NavLink>
        </nav>
    )
}