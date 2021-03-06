import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
  return (
    // BEM convention
    <div className="app">
      {/* Sidebar (Left) */}
      <Sidebar />

      {/* Feed (Middle) */}
      <Feed />

      {/* Widgets (Right) */}
      <Widgets />
    </div>
  );
}

export default App;
