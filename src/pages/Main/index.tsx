import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Theme } from '../../shared/theme';
import { AppContext } from '../../shared/context';
import { sleep } from '../../shared/utils';
import { Header, Nav, Description, Tiles, Footer } from './components';

const useTiles = () => {
  const { setTiles } = useContext(AppContext);

  const { data } = useQuery('tiles', async () => {
    const tiles = await fetch('http://localhost:1717/api/tiles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (tiles.status === 200) {
      const data = await tiles.json();
      return { data };
    } else {
      return {
        error: `Error fetching tiles. Status ${tiles.status}`,
      };
    }
  });

  useEffect(() => {
    if (data && !data.error) {
      setTiles(data.data);
      return;
    }
    sleep(5000);
  }, [data]);
};

export default function Main(): JSX.Element {
  const { theme } = useContext(AppContext);

  useTiles();

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
