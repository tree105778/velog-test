import React from 'react';
import './Header.module.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        velog
      </Link>
      <nav className="nav">
        <Link to="/write" className="write-btn">
          새 글 작성
        </Link>
      </nav>
    </header>
  );
};

export default Header;
