import React, { useState } from 'react';
import './App.css';

const photos = {
  landscape: [
    "https://via.placeholder.com/600x400?text=Landscape+1",
    "https://via.placeholder.com/600x400?text=Landscape+2"
  ],
  street: [
    "https://via.placeholder.com/600x400?text=Street+1",
    "https://via.placeholder.com/600x400?text=Street+2"
  ],
  cars: [
    "https://via.placeholder.com/600x400?text=Cars+1",
    "https://via.placeholder.com/600x400?text=Cars+2"
  ]
};

const categories = ['landscape', 'street', 'cars'];

function App() {
  const [tab, setTab] = useState('landscape');

  return (
    <div className='App'>
      <header>
        <h1>Silver Peaks</h1>
        <p>Landscape, Street, and Car Photography</p>
        <a href='https://www.instagram.com/silver.peak/' target='_blank' rel='noreferrer'>Instagram</a>
      </header>
      <nav>
        {categories.map(cat => (
          <button key={cat} onClick={() => setTab(cat)}>{cat}</button>
        ))}
      </nav>
      <main>
        <div className='gallery'>
          {photos[tab].map((url, idx) => (
            <img key={idx} src={url} alt={`${tab}-${idx}`} />
          ))}
        </div>
      </main>
      <footer>&copy; {new Date().getFullYear()} Silver Peaks</footer>
    </div>
  );
}

export default App;
