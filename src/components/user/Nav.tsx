import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <nav className="flex justify-center items-center h-[20%] absolute top-0" >
            <ul className="flex gap-12" >
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li><Link to='/' >Projects</Link></li>
                <li><Link to='/' >About</Link></li>
                <li><Link to='/' >Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
