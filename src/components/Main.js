import React from 'react';
import Sidebar from './Sidebar';
import Tasks from './Tasks';

const Main = () => {
    return (
        <div className='main_content'>
            <Sidebar/>
            <Tasks/>
        </div>
    );
}

export default Main;
