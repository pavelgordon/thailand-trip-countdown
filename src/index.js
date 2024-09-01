///////////////////////
// Welcome to Cursor //
///////////////////////

/*
Step 1: Try generating a react component that lets you play tictactoe with Cmd+K or Ctrl+K on a new line.
  - Then integrate it into the code below and run with npm start

Step 2: Try highlighting all the code with your mouse, then hit Cmd+k or Ctrl+K. 
  - Instruct it to change the game in some way (e.g. add inline styles, add a start screen, make it 4x4 instead of 3x3)

Step 3: Hit Cmd+L or Ctrl+L and ask the chat what the code does

Step 4: To try out cursor on your own projects, go to the file menu (top left) and open a folder.
*/


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    const targetDate = new Date('2024-10-28T09:00:00+02:00'); // October 28, 2024, 9am CEST

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App" style={styles.app}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Countdown to Thailand Trip</h1>
        <div style={styles.flightInfo}>
          <span style={styles.city}>Stockholm</span>
          <span style={styles.arrow}>→</span>
          <span style={styles.city}>Bangkok</span>
        </div>
        <div style={styles.countdownContainer}>
          <CountdownItem value={countdown.days} label="Days" />
          <CountdownItem value={countdown.hours} label="Hours" />
          <CountdownItem value={countdown.minutes} label="Minutes" />
          <CountdownItem value={countdown.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}

function CountdownItem({ value, label }) {
  return (
    <div style={styles.countdownItem}>
      <span style={styles.countdownValue}>{value}</span>
      <span style={styles.countdownLabel}>{label}</span>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: "'Arial', sans-serif",
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '3rem',
    borderRadius: '20px',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  flightInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2.5rem',
    fontSize: '1.8rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem 2rem',
    borderRadius: '50px',
  },
  city: {
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  arrow: {
    margin: '0 1.5rem',
    color: '#ffd700',
  },
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  countdownItem: {
    margin: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem 1.5rem',
    borderRadius: '15px',
    minWidth: '120px',
  },
  countdownValue: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    marginBottom: '0.5rem',
  },
  countdownLabel: {
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: '0.8',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);