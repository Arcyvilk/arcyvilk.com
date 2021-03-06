import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../../shared/context';
import { Theme } from '../../../shared/theme';
import { navItems, NavItem } from '../../../shared/config';

export const Nav = (): JSX.Element => {
  const { theme } = useContext(AppContext);

  return (
    <StyledNav theme={theme}>
      <ul>
        {navItems.map((item: NavItem, index: number) => (
          <li key={`nav-${index}`}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={item.icon} />
              <div>{item.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primaryBg};

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > li {
      border: 4px solid ${({ theme }) => theme.primaryBg};
      box-sizing: border-box;
    }
    li > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      color: ${({ theme }) => theme.secondaryText};
      background-color: ${({ theme }) => theme.secondaryBg};
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      opacity: 1;
      &:hover {
        opacity: 0.8;
        color: white;
      }
      & > * {
        margin: 2px 0;
      }
    }
  }
`;
