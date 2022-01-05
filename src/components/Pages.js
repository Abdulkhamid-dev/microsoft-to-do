import React from 'react';
import MyDay from './pages/MyDay'
import Important from './pages/Important'
import Planned from './pages/Planned'
import {Routes, Route} from 'react-router-dom'

const Tasks = () => {
    return (
        <div className='tasks_block'>
            <Routes>
                <Route path='/my-day' element={<MyDay/>}></Route>
                <Route path='/planned' element={<Planned/>}></Route>
                <Route path='/important' element={<Important/>}></Route>
            </Routes>
        </div>
    );
}

export default Tasks;
