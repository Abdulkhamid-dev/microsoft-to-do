import React from 'react';

const Taskitem = () => {
    return (
        <div className='taskItem'>
           <div>
           <div className='input_finished'>
                <input type="radio" />
            </div>
            <div className='task_title'>
               <h2>Read</h2>
            </div>
           </div>
           <div className='addImportant'>
           <i class="far fa-star"></i>
           </div>
        </div>
    );
}

export default Taskitem;
