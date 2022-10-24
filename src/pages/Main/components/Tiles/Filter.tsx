import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Theme } from '../../../../shared/theme';
import { AppContext } from '../../../../shared/context';
import { Project } from '../../../../data';

export const Filter = (): JSX.Element => {
  const { theme, icons, activeFilters, setActiveFilters } = useContext(
    AppContext,
  );

  const onFilterClick = (filter: Project): void => {
    if (activeFilters.includes(filter)) {
      const newFilters = activeFilters.filter(f => f !== filter);
      setActiveFilters(newFilters);
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <StyledFilter theme={theme}>
      {icons.map(icon => {
        const active = activeFilters.includes(icon.type);
        return (
          <StyledFilterItem
            key={`filter-${icon.type}`}
            theme={theme}
            active={active}
            onClick={() => onFilterClick(icon.type)}>
            <FontAwesomeIcon icon={icon.icon} />
            {icon.type}
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
