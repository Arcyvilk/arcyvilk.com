import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../../shared/context';
import { Theme } from '../../../shared/theme';
import { NavItem } from '../../../data';

type Props = {
  items: NavItem[];
  title?: string;
};

export const Nav = (props: Props): JSX.Element => {
  const { items, title } = props;
  const { theme } = useContext(AppContext);

  const numOfItems = items.length ?? 10;

  return (
    <StyledNav theme={theme} numOfItems={numOfItems}>
      {title && <h4>{title}</h4>}
      <ul>
        {items
          .filter((item: NavItem) => !item.isHidden)
          .map((item: NavItem, index: number) => (
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

const StyledNav = styled.nav<{ theme: Theme; numOfItems: number }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primaryBg};

  ul {
    margin: 4px 0 0 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 4px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  h4 {
    margin: 0;
    padding: 8px 0;
    width: 100%;
    text-align: center;
  }
`;

const StyledNavItem = styled.li<{ theme: Theme }>`
  box-sizing: border-box;
  flex: 1 1 100px;
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
