import React from 'react';
import MyDay from './pages/MyDay'
import Important from './pages/Important'
import Planned from './pages/Planned'
import {Routes, Route} from 'react-router-dom'

const Tasks = () => {
    return (
        <div className='tasks_block'>
            <Routes>
                <Route path='/' element={<MyDay title="My Day"/>}></Route>
                <Route path='/planned' element={<MyDay title="Planned"/>}></Route>
                <Route path='/important' element={<MyDay title="Important"/>}></Route>
            </Routes>
        </div>
    );
}

export default Tasks;
