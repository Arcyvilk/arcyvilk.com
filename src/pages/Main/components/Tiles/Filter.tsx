import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { Theme } from '../../../../shared/theme';
import { AppContext } from '../../../../shared/context';
import { TileType } from '../../../../shared/config';

export const Filter = (): JSX.Element => {
  const { theme, icons, activeFilters, setActiveFilters } = useContext(
    AppContext,
  );
  const tileTypes = Object.entries(icons) as [
    TileType,
    [IconPrefix, IconName],
  ][];

  const onFilterClick = (name: TileType): void => {
    if (activeFilters.includes(name)) {
      const newFilters = activeFilters.filter(f => f !== name);
      setActiveFilters(newFilters);
    } else {
      setActiveFilters([...activeFilters, name]);
    }
  };

  return (
    <StyledFilter theme={theme}>
      {tileTypes.map(type => {
        const [name, icon] = type;
        const active = activeFilters.includes(name);
        return (
          <StyledFilterItem
            key={`filter-${name}`}
            theme={theme}
            active={active}
            onClick={() => onFilterClick(name)}>
            <FontAwesomeIcon icon={icon} />
            {name}
          </StyledFilterItem>
        );
      })}
    </StyledFilter>
  );
};

const StyledFilter = styled.ul<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 0 8px 0;
  list-style-type: none;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.secondaryBg};
  width: 100%;
`;

const StyledFilterItem = styled.li<{ theme: Theme; active: boolean }>`
  margin: 0;
  padding: 6px;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme, active }) =>
    active ? theme.secondaryBg : theme.primaryBg};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 1;
  &:hover {
    opacity: 0.8;
    color: white;
  }
  & > * {
    margin: 0 4px;
  }
`;
