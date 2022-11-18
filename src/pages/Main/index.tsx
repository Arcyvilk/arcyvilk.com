import React, { useContext } from 'react';
import styled from 'styled-components';

import { Theme } from '../../shared/theme';
import { AppContext } from '../../shared/context';
import { Header, Nav, Description, Tiles, Footer } from './components';
import { navItems, tiles, icons } from '../../data';
import { Flex } from '../../components';

export default function Main(): JSX.Element {
  const { theme, setTiles, setIcons } = useContext(AppContext);

  setTiles(tiles);
  setIcons(icons);

  return (
    <MainWrapper theme={theme}>
      <NavWrapper column>
        <Header />
        <Nav items={navItems} />
      </NavWrapper>
      <ContentWrapper theme={theme}>
        <Description />
        <Tiles />
      </ContentWrapper>
      <Footer />
    </MainWrapper>
  );
}

const MainWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primaryBg};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  gap: 16px;
`;

const ContentWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 1024px;
  max-width: 95%;
  gap: 16px;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
`;

const NavWrapper = styled(Flex)`
  width: 100%;
  padding: 0 4px 4px 4px;
  box-sizing: border-box;
`;
