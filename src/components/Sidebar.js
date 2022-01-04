import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="left_column">
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="sidebarNavBtn">
                        <button><i class="fas fa-bars"></i></button>
                    </div>
                </div>
                <div className="sidebar_content">
                    <nav className='navbar'>
                        <ul>
                            <div>
                                <li>
                                    <div>
                                        <div></div>
                                        <div>
                                            <span></span>
                                        </div>
                                        <div></div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar_footer"></div>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;
