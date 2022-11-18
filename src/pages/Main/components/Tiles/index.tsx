import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../../../shared/theme';
import { AppContext } from '../../../../shared/context';
import { Flex } from '../../../../components';
import { Tile } from '../../../../data';
import { Item } from './Item';
import { Filter } from './Filter';

export const Tiles = (): JSX.Element => {
  const { theme, tiles, activeFilters } = useContext(AppContext);
  const [activeTile, setActiveTile] = useState<Tile | undefined>();

  const mappedTiles = tiles
    .filter((tile: Tile) => !tile.hidden && activeFilters.includes(tile.type))
    .map((tile: Tile) => {
      const active = activeTile?.title === tile.title;
      return (
        <Item
          active={active}
          setActiveTile={setActiveTile}
          tile={tile}
          key={`tile-${tile.title}`}
        />
      );
    });

  return (
    <Flex column>
      <h2>Projects</h2>
      <Filter />
      <Wrapper theme={theme}>
        <List theme={theme}>{mappedTiles}</List>
        {activeTile && (
          <Description column theme={theme}>
            <Flex align style={{ justifyContent: 'space-between' }}>
              <h3>
                <a href={activeTile.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />{' '}
                  {activeTile.title}
                </a>
              </h3>
              <h4>{activeTile.year}</h4>
            </Flex>
            {activeTile.description}
          </Description>
        )}
      </Wrapper>
    </Flex>
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
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  border-top: none;
`;

const List = styled(Flex)<{ theme: Theme }>`
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const Description = styled(Flex)<{ theme: Theme }>`
  width: 100%;
  padding: 16px;
  gap: 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.secondaryText};
  border-top: 2px solid ${({ theme }) => theme.secondaryBg};
  transition: height ease-out 0.5s;
  font-size: 1.4em;
  background-color: ${({ theme }) => theme.secondaryBg};
  a {
    text-decoration: none;
    color: white;
  }
`;
