import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h2>Allah</h2>
            <div>
                <Link to={'/home'}>Home</Link>
                <Link to={'/topics'}>Topics</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blogs'}>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;