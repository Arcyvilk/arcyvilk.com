import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../../shared/context';
import { Theme } from '../../../shared/theme';
import { navItems, NavItem } from '../../../data';

export const Nav = (): JSX.Element => {
  const { theme } = useContext(AppContext);

  return (
    <StyledNav theme={theme}>
      <ul>
        {navItems.map((item: NavItem, index: number) => (
          <StyledNavItem key={`nav-${index}`} theme={theme}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              title={item.title}>
              <FontAwesomeIcon icon={item.icon} />
              <StyledNavItemTitle>{item.title}</StyledNavItemTitle>
            </a>
          </StyledNavItem>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav<{ theme: Theme }>`
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
  }
`;

const StyledNavItem = styled.li<{ theme: Theme }>`
  border: 4px solid ${({ theme }) => theme.primaryBg};
  box-sizing: border-box;
  a {
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
  @media (max-width: 850px) {
    font-size: 1.5em;
  }
`;

const StyledNavItemTitle = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
`;
