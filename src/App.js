import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import Players from './components/Players';
import SelectedTeam from './components/SelectedTeam';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Manger</h1>
        <Players />
        <SelectedTeam />
      </div>
    </Provider>
  );
}

export default App;
