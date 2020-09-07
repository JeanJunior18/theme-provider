import React, { useState } from 'react';
import Global from './styles/Global';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        
        <div className="theme">
          <h1>Theme {theme.title}</h1>
        </div>

        <Global />
      </div>
    </ThemeProvider>
  );
}

export default App;
