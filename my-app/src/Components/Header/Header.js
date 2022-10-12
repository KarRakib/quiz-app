import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='container d-flex justify-content-between navbar navbar-expand-lg bg-light'>
            <h3>Web Development Quiz</h3>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div className='"collapse navbar-collapse" id="navbarSupportedContent"'>
                <Link to={'/'}>Home</Link>
                <Link to={'/topics'}>Topics</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blogs'}>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;