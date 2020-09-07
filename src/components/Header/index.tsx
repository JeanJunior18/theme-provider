import React, { useContext } from 'react';
import Switch from 'react-switch';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';

interface HeaderProps {
  toggleTheme(): void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  
  return (
    <Container>
      Hello Jean

      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={30}
        handleDiameter={20}
      />
    </Container>
  );
}

export default Header;