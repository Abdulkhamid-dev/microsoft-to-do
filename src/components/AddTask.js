import React, { useRef } from 'react';

const Addtask = () => {
    const inputRef = useRef();
    const toggleInput = () => {
      inputRef.current.focus();
    };
    return (
        <div className='addTask' onClick={toggleInput}>
            <div>
                <button className='plus_btn'>
                <i class="fas fa-plus"></i>
                </button>
                <form action="">
                <input type="text" ref={inputRef}  placeholder='Add Task'/>
                <button>Create</button>
                </form>
            </div>
        </div>
    );
}

export default Addtask;
