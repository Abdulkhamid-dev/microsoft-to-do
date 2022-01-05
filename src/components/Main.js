import React from 'react';
import Sidebar from './Sidebar';
import Tasks from './Pages';

const Main = () => {
    return (
        <div className='main_content'>
            <Sidebar/>
            <Tasks/>
        </div>
    );
}

export default Main;
