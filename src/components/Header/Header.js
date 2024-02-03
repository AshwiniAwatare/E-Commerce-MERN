/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import {Link} from "react-router-dom"

function Header() {
   return (
<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
      <Link to="/"><img style={{width: "60px"}} src="https://1000logos.net/wp-content/uploads/2020/08/App-Store-Logo.png"></img>
      </Link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" class="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/products" class="nav-link px-2 text-white">Products</Link></li>
          <li><Link class="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <Link to="/login">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          </Link>
          <Link to="/signUp">
          <button type="button" class="btn btn-warning">Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  </header>
   );
 }
export default Header;
