import React from 'react';
import Addtask from '../AddTask';
import Tasks from '../Tasks';

const Planned = () => {
    return (
        <div className='myDay_block'>
            <div className='title_myDay'>
            <h1>Planned</h1>
            </div>
            <div>
               <Addtask/>
            </div>
            <Tasks/>
        </div>
    );
}

export default Planned;
