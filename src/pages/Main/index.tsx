import React, { useContext } from 'react';
import styled from 'styled-components';

import { Theme } from '../../shared/theme';
import { AppContext } from '../../shared/context';
import { Header, Nav, Description, Tiles, Footer } from './components';
import { tiles, icons } from '../../data';

export default function Main(): JSX.Element {
  const { theme, setTiles, setIcons } = useContext(AppContext);

  setTiles(tiles);
  setIcons(icons);

  return (
    <MainWrapper theme={theme}>
      <ContentWrapper theme={theme}>
        <Header />
        <Nav />
        <Description />
        <Tiles />
        <Footer />
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primaryBg};
  width: 100%;
  min-height: 100vh;
  padding: 12px 0;
  height: auto;
  overflow: hidden;
`;

const ContentWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 1024px;
  max-width: 95%;
  padding: 0;
  box-sizing: border-box;
  border: 6px solid ${({ theme }) => theme.secondaryBg};
  justify-content: center;
  align-items: center;
`;
