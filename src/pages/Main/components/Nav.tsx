import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faArtstation,
  faYoutube,
  faTwitch,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';
import { AppContext } from '../../../shared/context';
import { Theme } from '../../../shared/theme';

type NavItem = {
  icon: IconProp;
  link: string;
  title: string;
};

const navItems: NavItem[] = [
  {
    icon: faTwitter,
    link: 'https://twitter.com/arcyvilk',
    title: 'Twitter',
  },
  {
    icon: faGithub,
    link: 'https://github.com/Arcyvilk',
    title: 'Github',
  },
  {
    icon: faArtstation,
    link: 'https://artstation.com/arcyvilk',
    title: 'ArtStation',
  },
  {
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UCgCgl-_28X6lnXBKOGwd4UQ',
    title: 'YouTube',
  },
  {
    icon: faTwitch,
    link: 'twitch.tv/arcyvilk',
    title: 'Twitch',
  },
  {
    icon: faPatreon,
    link: 'https://patreon.com/arcyvilk',
    title: 'Patreon',
  },
];

export const Nav = (): JSX.Element => {
  const { theme } = useContext(AppContext);
  const onNavItemClick = (link: string) => console.log(link);

  return (
    <StyledNav theme={theme}>
      <ul>
        {navItems.map((item: NavItem, index: number) => (
          <li key={`nav-${index}`} onClick={() => onNavItemClick(item.link)}>
            <FontAwesomeIcon icon={item.icon} />
            <div>{item.title}</div>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.primaryText,
    backgroundColor: theme.primaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      margin: 4px 2px;
      background-color: ${({ theme }) => theme.secondaryBg};
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      opacity: 1;
      & > * {
        margin: 2px 0;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
