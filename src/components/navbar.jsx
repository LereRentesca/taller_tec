import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'
import "./styles/navbar.css"

function Navbar(){
    return (
        <nav className="bg-navbar navbar navbar-expand-lg bg-body-tertiary">
            <div className="nav container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/catalog">
                                <span className="color-font">Catalog</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                                <span className="color-font">About</span>
                            </Link>
                        </li>
                    </ul>
                    <Link className="navbar-brand" to="/">
                        <span className="color-font">Online Store</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;