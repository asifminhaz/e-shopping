import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../Hook/useCart";
// import useCart from "../Hook/useCart";
const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const [cart] = useCart();

  const handleLogOut = () => {
logOut()
.then(() => {})
.catch(error => console.log(error))
  }

    const navOptions = <>
    <li className="mt-3"><Link to="/">Home</Link></li>
    <li className="mt-3"><Link to="/men">Men</Link></li>
    <li className="mt-3"><Link to="/women">Women</Link></li>
    <li className="mt-3"><Link to="/kid">Kid</Link></li>
    <li className=""><Link to="/dashboard/mycart">
    <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-primary ">+{cart?.length || 0}</div>
                    </button>
    </Link></li>
   
   
    </>
    return (
        <div>
            <div className="navbar bg-base-100 sticky">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mb-28 z-[20] p-2  rounded-box w-48 h-28 ">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">eShopping</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <>
      <button onClick={handleLogOut} class="btn btn-active btn-ghost btn-sm">Log out</button>
       </> : <><Link to="/login">Log In</Link> </>
    }
  
  </div>
</div>
        </div>
    );
};

export default Header;