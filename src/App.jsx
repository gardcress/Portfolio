import './App.css';
import { useState } from 'react';
import StartButton from './components/StartButton.component';

function App() {
  const [appIsOpen, setIsAppOpen] = useState(false);

  function openApp() {
    setIsAppOpen(true);
    console.log("App opened");
  }

  function closeApp() {
    setIsAppOpen(false);
    console.log("App closed");
  }


  // Startscreen
  if (!appIsOpen) {
    return (
      <div className="App">
        <StartButton openApp={openApp}></StartButton>
      </div>
    );
  }

  // Main app
  return (
    <div className="App">
      {appIsOpen && <p>App is open</p>}
      {appIsOpen ? <p>App is open</p> : <p>App is NOT open</p>}
      <p>This is my portfolio</p>
      <button onClick={closeApp}>Close App</button>
    </div>
  );
}

export default App;
