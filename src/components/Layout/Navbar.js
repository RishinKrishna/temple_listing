import Link from "next/link";
import LogiBtn from "../LogiBtn";

const Navbar = () => {
  return (
    <section className="bg-body-tertiary">
      <div className="container">
        <nav className="navbar navbar-expand-lg sticky-top py-3">
          <div className="container-fluid">
            <Link className="navbar-brand fw-semibold" href="/">
              TempleAddress.com
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-4">
                  <Link className="nav-link text-dark fw-semibold " href="/login">
                    About
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-dark fw-semibold" href="/login">
                    List
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-dark fw-semibold" href="#">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item ms-4 mt-2">
                  {/* <Link className="nav-link text-dark fw-semibold" href="/login">
                    Login
                  </Link> */}
                  <LogiBtn/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
