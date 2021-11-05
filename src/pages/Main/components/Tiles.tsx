import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../../shared/theme';
import { AppContext } from '../../../shared/context';
import { Flex } from '../../../components';
import { tiles, Tile } from '../../../shared/config';

export const Tiles = (): JSX.Element => {
  const { theme } = useContext(AppContext);
  const [activeTile, setActiveTile] = useState<Tile | undefined>();

  const mappedTiles = tiles.map((tile: Tile) => (
    <Tiles.Item
      theme={theme}
      key={`tile-${tile.title}`}
      onClick={() => setActiveTile(tile)}
      src={tile.picture}
      alt={tile.title}
    />
  ));
  return (
    <Tiles.Wrapper theme={theme}>
      <h1>Showcase</h1>
      <Tiles.List row align justify style={{ flexWrap: 'wrap' }}>
        {mappedTiles}
      </Tiles.List>
      {activeTile && (
        <Tiles.Description column theme={theme}>
          <h2>
            <a href={activeTile.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> {activeTile.title}
            </a>
          </h2>
          {activeTile.description}
        </Tiles.Description>
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
    margin: 16px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
`;

const List = styled(Flex)`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const Item = styled.img<{ theme: Theme }>`
  margin: 4px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  opacity: 0.9;
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
