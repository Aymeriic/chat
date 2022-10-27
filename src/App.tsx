import React from 'react';

import Header from './components/header/Header';
import Chat from './components/chat/Chat';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Chat />
    </div>
  );
}

export default App;
