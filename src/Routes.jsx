import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import Anuncio from './pages/Anuncio/Index';

// const Routes = () => {
//     return (
//         <Switch>
//             <Route path="/" component={} />
//         </Switch>
//     )
// };

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/anuncio/:id" component={ Anuncio } />
    </Switch>
);

export default Routes;