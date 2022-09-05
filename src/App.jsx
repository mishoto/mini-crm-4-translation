import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <Home />
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
