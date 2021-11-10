import React, { useContext, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Theme } from '../../../../shared/theme';
import { AppContext } from '../../../../shared/context';
import { Tile, TileType } from '../../../../shared/config';

const DEFAULT_ICON: [IconPrefix, IconName] = ['fas', 'question-circle'];

type Props = {
  tile: Tile;
  active: boolean;
  setActiveTile: (tile: Tile) => void;
};

export const Item = (props: Props): JSX.Element => {
  const { active, tile, setActiveTile } = props;
  const { theme, icons } = useContext(AppContext);
  const [icon, setIcon] = useState<[IconPrefix, IconName]>(DEFAULT_ICON);

  const getIcon = (tileType: TileType) => {
    const icon = (icons[tileType] as [IconPrefix, IconName]) ?? DEFAULT_ICON;
    return icon;
  };

  useEffect(() => {
    setIcon(getIcon(tile.type));
  }, [icons]);

  return (
    <StyledItem
      theme={theme}
      active={active}
      key={`tile-${tile.title}`}
      onClick={() => setActiveTile(tile)}>
      <img src={tile.picture} alt={tile.title} />
      {icon && (
        <Type theme={theme} active={active}>
          <FontAwesomeIcon
            icon={icon}
            data-tip
            data-for={`tooltip-icon-${tile.type}`}
          />
          <ReactTooltip type="info" id={`tooltip-icon-${tile.type}`}>
            <span>{tile.type}</span>
          </ReactTooltip>
        </Type>
      )}
    </StyledItem>
  );
};

const StyledItem = styled.div<{ theme: Theme; active: boolean }>`
  display: flex;
  position: relative;
  margin: 6px;
  padding: 0;
  cursor: pointer;
  border: 3px solid
    ${({ theme, active }) => (active ? theme.secondaryText : theme.secondaryBg)};
  box-sizing: border-box;
  max-width: 90%;
  img {
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    opacity: ${({ active }) => (active ? 1 : 0.9)};
    &:hover {
      opacity: 1;
    }
  }
`;

const Type = styled.div<{ theme: Theme; active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  border: 3px solid
    ${({ theme, active }) => (active ? theme.secondaryText : theme.secondaryBg)};
  background-color: ${({ theme, active }) =>
    active ? theme.secondaryText : theme.secondaryBg};
  color: ${({ theme, active }) =>
    active ? theme.secondaryBg : theme.secondaryText};
  font-size: 0.8em;
  z-index: 99;
  cursor: help;
  &:hover {
    color: ${({ theme }) => theme.primaryText};
  }
`;
