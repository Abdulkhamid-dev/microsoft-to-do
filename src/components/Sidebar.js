import React, { useRef } from "react";
import { Link, NavLink } from 'react-router-dom'
const Sidebar = () => {

    const inputRef = useRef();
    const toggleInput = () => {
      inputRef.current.focus();
    };
  return (
    <div>
      <div className="left_column">
        <div className="sidebar">
          <div className="sidebar_header">
            <div className="sidebarNavBtn">
              <button>
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
          <div className="sidebar_content">
            <nav className="navbar">
              <ul className="navUl">
               <Link  to="/my-day">
               <div>
                  <li className="link_item ">
                    <div>
                      <div className="link_icon">
                        <i className="far fa-sun"></i>
                      </div>
                      <div className="link_title">
                        <span>My day</span>
                      </div>
                      <div className="task_count">1</div>
                    </div>
                  </li>
                </div>
               </Link>
               <Link to='/important'>
               <div>
                  <li className="link_item">
                    <div>
                      <div className="link_icon">
                        <i class="far fa-star"></i>
                      </div>
                      <div className="link_title">
                        <span>Important</span>
                      </div>
                      <div className="task_count"></div>
                    </div>
                  </li>
                </div>
               </Link>
            <Link to='/planned'>
            <div>
                  <li className="link_item">
                    <div>
                      <div className="link_icon">
                        <i class="far fa-calendar-alt"></i>
                      </div>
                      <div className="link_title">
                        <span>Planned</span>
                      </div>
                      <div className="task_count"></div>
                    </div>
                  </li>
                </div>
            </Link>
             <Link to='/my-day'>
             <div>
                  <li className="link_item">
                    <div>
                      <div className="link_icon">
                        <i class="far fa-user"></i>
                      </div>
                      <div className="link_title">
                        <span>Assigned to me</span>
                      </div>
                      <div className="task_count"></div>
                    </div>
                  </li>
                </div>
             </Link>
             <Link to='/my-day'>
             <div>
                  <li className="link_item">
                    <div>
                      <div className="link_icon">
                        <i class="fas fa-home"></i>
                      </div>
                      <div className="link_title">
                        <span>Tasks</span>
                      </div>
                      <div className="task_count">1</div>
                    </div>
                  </li>
                </div>
             </Link>
              </ul>
            </nav>
            <div className="add_group" onClick={toggleInput}>
              <li className="link_item">
                <div>
                  <div className="link_icon">
                  <i class="fas fa-plus"></i>
                  </div>
                  <div className="link_title">
                    <input type="text" placeholder="Create task" ref={inputRef}/>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="sidebar_footer">
              <div className="footer_messegers">
                  <a href="#!"><i class="far fa-envelope"></i></a>
                  <a href="#!"><i class="far fa-calendar-alt"></i></a>
                  <a href="#!"><i class="fas fa-user-friends"></i></a>
                  <a href="#!"><i class="far fa-clipboard"></i></a>
                  <a href="#!"><i class="fas fa-check"></i></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
