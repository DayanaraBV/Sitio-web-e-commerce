import { useContext} from "react";
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const NavLinkClass = ({ isActive }) => 
        isActive ? "underline underline-offset-4 text-black " : "";
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Buyzaar 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={NavLinkClass}>
                        All 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/clothes" className={NavLinkClass}>
                        Clothes 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={NavLinkClass}>
                        Electronics 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={NavLinkClass}>
                        Furnitures 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={NavLinkClass}>
                        Toys 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={NavLinkClass}>
                        Others 
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    dayanarabone277@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={NavLinkClass}>
                        My Orders 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/my-account" className={NavLinkClass}>
                        My Account 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={NavLinkClass}>
                        Sign In 
                    </NavLink>
                </li>
                <li>
                    🛒{context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 