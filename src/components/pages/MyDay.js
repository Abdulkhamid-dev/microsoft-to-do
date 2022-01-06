import React, { useRef } from 'react';
import Addtask from '../AddTask';
import Tasks from '../Tasks';

const Myday = (props) => {
    // const sideBar = useRef()
    // const toggle = () => {
    //     sideBar.current.left = "0"
        
    // }
    return (
        <div className='myDay_block'>
            <div className='title_myDay'>
            <div className="sidebarNavBtn">
              <button >
                <i class="fas fa-bars"></i>
              </button>
            </div>
            <h1>{props.title}</h1>
            </div>
            <div>
               <Addtask/>
            </div>
            <Tasks/>
        </div>
    );
}

export default Myday;
