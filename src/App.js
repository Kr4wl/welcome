import React from 'react';
import NewsContainer from './components/NewsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Le Monde Latest News</h1>
      </header>
      <main>
        <NewsContainer />
      </main>
      <footer>
        <p>Data sourced from LeMonde.com</p>
      </footer>
    </div>
  );
}

export default App;