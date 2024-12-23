export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Hamburger menu for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/generate">Generate Roast</a>
            </li>
            <li>
              <a href="/pricing">Premium Roast Pricing</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a
          className="btn btn-ghost font-heading text-2xl flex items-center gap-2"
          href="/"
        >
          <img
            src="/favicon.ico"
            alt="Roast Generator Logo"
            className="w-6 h-6"
          />
          Roast Generator
        </a>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal text-lg px-1 hidden lg:flex">
          <li>
            <a href="/generate">Generate Roast</a>
          </li>
          <li>
            <a href="/pricing">Premium Roast Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
