import React from 'react';
import { 
    BrowserRouter,  
    Route, 
    Switch
} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact> <Logon /> </Route>
                <Route path='/register' exact> <Register /> </Route>
                <Route path='/profile' exact> <Profile /> </Route>
                <Route path='/incidents/new' exact> <NewIncident /> </Route>
            </Switch>
        </BrowserRouter>
    );
}