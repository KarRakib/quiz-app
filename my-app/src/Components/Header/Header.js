import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='container d-flex justify-content-between navbar navbar-expand-lg bg-light rounded p-2 shadow-lg p-3 mb-5 bg-body rounded'>
            <h3>Web Development Quiz</h3>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
        </button>
            <div className='"collapse navbar-collapse" id="navbarSupportedContent"'>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
            <li class="nav-item"> <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link> </li>
            <li class="nav-item"> <Link className="nav-link active"  to={'/topics'}>Topics</Link> </li>
            <li class="nav-item"> <Link className="nav-link active"  to={'/statistics'}>Statistics</Link> </li>
            <li class="nav-item"> <Link className="nav-link active"  to={'/blogs'}>Blogs</Link> </li>
                
                </ul>
            </div>
        </nav>
    );
};

export default Header;