import React from 'react';
import Addtask from '../AddTask';
import Tasks from '../Tasks';

const Important = () => {
    return (
        <div className='myDay_block'>
            <div className='title_myDay'>
            <h1>Important</h1>
            </div>
            <div>
               <Addtask/>
            </div>
            <Tasks/>
        </div>
    );
}

export default Important;
