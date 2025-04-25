import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
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
                    <NavLink to="/" 
                        onClick={() => context.setSearchByCategory(null)}
                        className={NavLinkClass}>
                        All 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" 
                        onClick={() => context.setSearchByCategory("Clothes")}
                        className={NavLinkClass}>
                        Clothes 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" 
                        onClick={() => context.setSearchByCategory("Electronics")}
                        className={NavLinkClass}>
                        Electronics 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" 
                        onClick={() => context.setSearchByCategory("Furniture")}
                        className={NavLinkClass}>
                        Furnitures 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" 
                        onClick={() => context.setSearchByCategory("Toys")}
                        className={NavLinkClass}>
                        Toys 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" 
                        onClick={() => context.setSearchByCategory("Others")}
                        className={NavLinkClass}>
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
                <li className="flex items-center">
                    <ShoppingCartIcon className="size-6 text-black" />
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
