import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../../components';
import { tiles, Tile } from '../../../shared/config';

export const Tiles = (): JSX.Element => {
  const mappedTiles = tiles.map((tile: Tile) => (
    <Tiles.Item key={`tile-${tile.title}`}>
      <img src={tile.picture} alt={tile.title} />
      <Flex column>
        <h2>{tile.title}</h2>
        <div>{tile.description}</div>
      </Flex>
    </Tiles.Item>
  ));
  return <Tiles.List column>{mappedTiles}</Tiles.List>;
};

const StyledTiles = styled(Flex)`
  margin: 16px;
`;
const StyledTile = styled(Flex)`
  margin: 2px;
  padding: 12px 16px;
`;

Tiles.List = StyledTiles;
Tiles.Item = StyledTile;
