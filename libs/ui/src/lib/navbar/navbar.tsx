import { Link } from 'react-router-dom';
import { useState } from 'react';
export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const isAuth = true;
  return (
    <div className="bg-white border-b-2 h-14 border-gray-50 flex items-center">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div>
          <Link to="/">IT Meetup</Link>
        </div>
        <div className="relative md:flex h-full gap-x-3">
          {isAuth ? (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button className="text-gray-800 h-full flex items-center gap-x-2 rounded focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="avatar"
                />
                <span>Jan Kowalski</span>
              </button>
              {dropdownOpen && (
                <div className="absolute bg-white w-40 mt-0 rounded-md shadow-lg">
                  <Link
                    to="/my"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    My
                  </Link>
                  <Link
                    to="/add"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Add
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
