// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Btn from "./Btn";

// const Navbar = () => {
//   const [navBar, setNavBar] = useState(false);

//   const toggleNavBar = () => {
//     setNavBar(!navBar);
//   };

//   return (
//     <nav className="text-black font-bold flex items-center justify-center space-x-4 bg-cyan-500 h-16">
//       < h1 className=" justify-around text-2xl text-white font-bold ">Online Library System</h1>
//       <ul
//         className={`${
//           navBar ? "block" : "hidden"
//         }  absolute top-0 right-0 bg-white space-y-4 text-white w-40 px-3 py-8
//         sm:static sm:flex sm:items-center sm:space-x-8 sm:space-y-0 sm:bg-transparent sm:text-white sm:w-fit sm:px-0 sm:py-2 gap-12`}
//       >
//         <li>
//           <Link to={`/home`} className="hover:underline">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to={`/browse-books`} className="hover:underline ">
//             Browse Books
//           </Link>
//         </li>
//         <li>
//           <Link to={`/add-book`} className="hover:underline">
//             Add Book
//           </Link>
//         </li>
//         <Btn
//           style={`absolute text-blue-600 text-blue-400 -top-4 right-4 text-3xl cursor-pointer duration-500  sm:hidden rotate-45`}
//           content={`+`}
//           action={toggleNavBar}
//         />
//       </ul>
//       <div>
//         <Btn
//           style={`text-3xl cursor-pointer sm:hidden `}
//           content={`+`}
//           action={toggleNavBar}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [navBar, setNavBar] = useState(false);

//   const toggleNavBar = () => {
//     setNavBar(!navBar);
//   };

//   return (
//     <nav className="bg-purple-400 text-white px-4 py-3 sm:flex sm:items-center sm:justify-between relative">
//       <div className="flex justify-between items-center">
//         <img src="/icons8-library-94.png" alt="" />
//         <h1 className=" text-2xl font-bold">Online Library System</h1>
        
//         <button
//           className="text-3xl sm:hidden"
//           onClick={toggleNavBar}
//           aria-label="Toggle Menu"
//         >
//           ☰
//         </button>
//       </div>

    
//       <ul
//         className={`${
//           navBar ? "block" : "hidden"
//         } sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 bg-purple-600 sm:bg-transparent rounded-xl  sm:text-white p-4 sm:p-0 absolute sm:static left-0 right-0 top-16 sm:top-auto z-10`}
//       >
//         <li>
//           <Link to="/home" className="hover:underline font-bold text-xl">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/browse-books" className="hover:underline font-bold text-xl">
//             Browse Books
//           </Link>
//         </li>
//         <li>
//           <Link to="/add-book" className="hover:underline font-bold text-xl">
//             Add Book
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [navBar, setNavBar] = useState(false);

//   const toggleNavBar = () => {
//     setNavBar(!navBar);
//   };

//   const handleLinkClick = () => {
//     setNavBar(false); // Close menu when a link is clicked
//   };

//   return (
//     <nav className="bg-purple-400 text-white px-4 py-3 sm:flex sm:items-center sm:justify-between relative">
//       <div className="flex justify-between items-center">
//         <img src="/icons8-library-94.png" alt="Library Logo" />
//         <h1 className=" text-2xl font-bold">Online Library System</h1>
//         {/* Hamburger Button */}
//         <button
//           className="text-3xl sm:hidden"
//           onClick={toggleNavBar}
//           aria-label="Toggle Menu"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Links */}
//       <ul
//         className={`${
//           navBar ? "block" : "hidden"
//         } sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 bg-purple-600 sm:bg-transparent rounded-xl sm:text-white p-4 sm:p-0 absolute sm:static left-0 right-0 top-16 sm:top-auto z-10`}
//       >
//         <li>
//           <Link
//             to="/home"
//             onClick={handleLinkClick}
//             className="hover:underline font-bold text-xl"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/browse-books"
//             onClick={handleLinkClick}
//             className="hover:underline font-bold text-xl"
//           >
//             Browse Books
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/add-book"
//             onClick={handleLinkClick}
//             className="hover:underline font-bold text-xl"
//           >
//             Add Book
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    setNavBar(!navBar);
  };

  const handleLinkClick = () => {
    setNavBar(false);
  };

  return (
    <nav className="bg-purple-400 text-white px-4 py-3 sm:flex sm:items-center sm:justify-between relative z-50">
      <div className="flex justify-between items-center">
        <img src="/icons8-library-94.png" alt="Library Logo" />
        <h1 className="text-2xl font-bold">Online Library System</h1>
        {/* Hamburger Button */}
        <button
          className="text-3xl sm:hidden"
          onClick={toggleNavBar}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Links */}
      <ul
        className={`${
          navBar ? "block" : "hidden"
        } sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-2 sm:mt-0 bg-purple-400 sm:bg-transparent rounded-xl sm:text-white p-4 sm:p-0 absolute sm:static left-0 right-0 top-full sm:top-auto z-50`}
      >
        <li>
          <Link
            to="/home"
            onClick={handleLinkClick}
            className="hover:underline font-bold text-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/browse-books"
            onClick={handleLinkClick}
            className="hover:underline font-bold text-xl"
          >
            Browse Books
          </Link>
        </li>
        <li>
          <Link
            to="/add-book"
            onClick={handleLinkClick}
            className="hover:underline font-bold text-xl"
          >
            Add Book
          </Link>
            </li>
        <li>
          <Link
            to="/remove-book"
            onClick={handleLinkClick}
            className="hover:underline font-bold text-xl"
          >
            Remove Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

