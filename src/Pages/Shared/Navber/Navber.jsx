import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then((reult) => {})
      .catch((error) => {
        console.error();
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {/* <li>
        <Link to="/secret">Secret</Link>
      </li> */}
      {isAdmin ? (
        <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}

      <li>
        {user ? (
          <>
            <span>{user?.displayName}</span>
            <Link onClick={handleLogOut}>LogOut</Link>
          </>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </li>

      <li className="pt=-4">
        <Link to="/dashboard/mycart">
          {/* <button className="btn"> */}
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
          {/* </button> */}
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl  bg-black text-info">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Khana's</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navber;
