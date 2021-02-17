import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import * as ReactDOM from 'react-dom';
import { Simulaciones } from './features/simulaciones/Simulaciones';
import { Simulacion } from './features/simulacion/Simulacion';
import { Contrato } from './features/contrato/Contrato';
import { Counter } from './features/counter/Counter';
import MenuNavContainer from './features/common/MenuNavContainer.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter >
	            <Switch>
	                <Route exact path="/" component={Simulaciones} />
	                <Route exact path="/simulaciones" component={Simulaciones} />
	                <Route exact path="/simulaciones/:id" component={Simulacion} />
	                <Route exact path="/simulaciones/:simulacion_id/:id" component={Contrato} />
	            </Switch>
	        
	    </BrowserRouter >
        
    </div>
  );
}
const  onSelect = (event:any) => {
    alert(event.item.data.route);
}

export default App;
