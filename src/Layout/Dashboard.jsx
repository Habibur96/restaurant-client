// import { NavLink, Outlet } from "react-router-dom";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaWallet,
//   FaShoppingCart,
//   FaUtensilSpoon,
//   FaUsers,
//   FaBook,
// } from "react-icons/fa";
// import useCart from "../Hooks/useCart";
// import useAdmin from "../Hooks/useAdmin";

// const Dashboard = () => {
//   // const isAdmin = true;
//   const [isAdmin] = useAdmin();
//   const [cart] = useCart();

//   return (
//     <div className="drawer drawer-mobile lg:drawer-open md:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content ">
//         {/* Page content here */}

//         <label
//           htmlFor="my-drawer-2"
//           className="btn btn-primary drawer-button lg:hidden"
//         >
//           Open drawer
//         </label>
//         <Outlet></Outlet>
//       </div>
//       <div className="drawer-side bg-[#D1A054]">
//         <label
//           htmlFor="my-drawer-2"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu p-4 w-80">
//           {isAdmin ? (
//             <>
//               <li>
//                 <NavLink to="/dashboard/adminhome">
//                   <FaHome></FaHome> Admin Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/addItem">
//                   <FaUtensilSpoon></FaUtensilSpoon> Add Items
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/manageItem">
//                   <FaWallet></FaWallet> Manage Items
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/history">
//                   <FaBook></FaBook> Manage Bookings
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/allusers">
//                   <FaUsers></FaUsers> All Users
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to="/dashboard/userhome">
//                   <FaHome></FaHome> User Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/reservations">
//                   <FaCalendarAlt></FaCalendarAlt> Reservations
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/history">
//                   <FaWallet></FaWallet> Payment History
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/mycart">
//                   <FaShoppingCart></FaShoppingCart> My Cart
//                   <span className="badge inl badge-secondary">
//                     +{cart?.length || 0}
//                   </span>
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {/* Sidebar content here */}

//           <div className="divider"></div>
//           <li>
//             <NavLink to="/">
//               <FaHome></FaHome> Home
//             </NavLink>
//           </li>
//           <li to="/menu">
//             <NavLink>Our Menu</NavLink>
//           </li>
//           <li to="/order/salad">
//             <NavLink>Order Food</NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="mx-auto drawer drawer-mobile lg:drawer-open md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#FFE8C8]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUtensils></FaUtensils> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBook></FaBook> Manage Bookings(not implemented)
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
