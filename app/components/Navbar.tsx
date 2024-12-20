export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl flex items-center gap-2">
     <img src="/favicon.ico" alt="Roastify Logo" className="w-6 h-6" />
     Roastify
    </a>
  </div>
  {/* Centered items in the navbar not needed
  <div className="navbar-center flex-1">
    <ul className="menu menu-horizontal text-lg px-1 justify-center">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  */}
{/* Button on the far right of the navbar
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  */}
</div>
    );
  }
  