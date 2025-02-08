import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (in ms)
    });
  }, []);

  return (
    <div className="hero">
        <Sidebar />
        <Main />
    </div>
  );
}

export default App;
