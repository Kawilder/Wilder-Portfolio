import React from "react";

function Nav() {
  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          Kevin Wilder
        </a>
      </h2>
      <nav>
        <ul className='navbar'>
          <li className='navbar-tem'>
            <a href="#about" onClick={() => handleClick()}>
              About Me
            </a>
          </li>
          <li className={'navbar-item'}>
            <a href="#Portfolio" onClick={() => handleClick()}>
              Portfolio
            </a>
          </li>
          <li className={'navbar-item'}>
            <a href="#Resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li className={'navbar-item'}>
            <a href="#Contact" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;