import React, { useContext } from 'react';
import styled from 'styled-components';
import { Theme } from '../../shared/theme';
import { AppContext } from '../../shared/context';
import { Header, Nav } from './components';

export default function Main(): JSX.Element {
  const { theme, themeType, setThemeType } = useContext(AppContext);
  const onChangeThemeClick = () => {
    if (themeType === 'light') {
      setThemeType('dark');
    } else {
      setThemeType('light');
    }
  };

  return (
    <MainWrapper theme={theme}>
      <ContentWrapper theme={theme}>
        <Header />
        <Nav />
        <button onClick={onChangeThemeClick}>Reverse theme</button>
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.primaryText,
    backgroundColor: theme.primaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.secondaryText,
    backgroundColor: theme.secondaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  width: 1024px;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
