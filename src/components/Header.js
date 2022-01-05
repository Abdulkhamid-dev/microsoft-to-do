import React, { useRef } from "react";
import MenuIcon from '../assets/img/noun-menu-1010328.svg'

const Header = () => {
  const inputRef = useRef();
  const toggleInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo_block">
            <div>
            <i class="fas menuIcon fa-bars"></i>
            </div>
            <a href="#">
              <span>To Do</span>
            </a>
          </div>
          <div className="search_block" id="search_block" onClick={toggleInput}>
            <i class="fas fa-search"></i>
            <input type="text" className="search_input" ref={inputRef} />
          </div>
          <div className="account_block">
            <div>
              <button>
                <i class="fas fa-cog"></i>
              </button>
            </div>
            <div>
              <button>
                <i class="fas fa-question"></i>
              </button>
            </div>
            <div>
              <button>
                <i class="fas fa-volume-down"></i>
              </button>
            </div>
            <div>
              <button className="user">A</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
