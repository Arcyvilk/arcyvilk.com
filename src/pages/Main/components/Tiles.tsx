import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../../shared/theme';
import { AppContext } from '../../../shared/context';
import { Flex, Loader } from '../../../components';
import { Tile } from '../../../shared/config';

export const Tiles = (): JSX.Element => {
  const { theme, tiles } = useContext(AppContext);
  const [activeTile, setActiveTile] = useState<Tile | undefined>();

  const mappedTiles = tiles.map((tile: Tile) => (
    <Tiles.Item
      theme={theme}
      active={activeTile?.title === tile.title}
      key={`tile-${tile.title}`}
      onClick={() => setActiveTile(tile)}
      src={tile.picture}
      alt={tile.title}
    />
  ));

  return (
    <Tiles.Wrapper theme={theme}>
      <h1>Projects</h1>
      {mappedTiles.length ? (
        <>
          <Tiles.List row align justify style={{ flexWrap: 'wrap' }}>
            {mappedTiles}
          </Tiles.List>
          {activeTile && (
            <Tiles.Description column theme={theme}>
              <h2>
                <a href={activeTile.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />{' '}
                  {activeTile.title}
                </a>
              </h2>
              {activeTile.description}
            </Tiles.Description>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Tiles.Wrapper>
  );
};

const Wrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  h1 {
    color: ${({ theme }) => theme.secondaryText};
    background-color: ${({ theme }) => theme.secondaryBg};
    padding: 16px;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.2em;
  }
`;

const List = styled(Flex)`
  width: 100%;
  box-sizing: border-box;
  margin: 16px 0;
`;

const Item = styled.img<{ theme: Theme; active: boolean }>`
  margin: 4px;
  cursor: pointer;
  border: 4px solid
    ${({ theme, active }) => (active ? theme.secondaryText : theme.secondaryBg)};
  opacity: ${({ active }) => (active ? 1 : 0.9)};
  box-sizing: border-box;
  max-width: 90%;
  &:hover {
    opacity: 1;
  }
`;

const Description = styled(Flex)<{ theme: Theme }>`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.secondaryBg};
  transition: height ease-out 0.5s;
  h2 {
    margin: 0 0 8px 0;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 300;
    a {
      text-decoration: none;
      color: white;
    }
  }
  p {
    margin: 2px 0;
  }
`;

Tiles.Wrapper = Wrapper;
Tiles.List = List;
Tiles.Item = Item;
Tiles.Description = Description;
