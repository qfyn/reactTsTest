import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MouseTracker from './components/MouseTracker';
import useMousePositions from './hooks/useMousePositions';
import LikeButton from './components/LikeButton';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message: string;
  status: string
}

interface IThemeProps {
  [key: string] : {color: string; background: string}
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => {setShow(!show)}}>Refresh dog photo</button>
        </p>
        {loading ? <p>🐕读取中</p> : <img src={dogResult && dogResult.message}></img>}
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
