import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faArtstation,
  faYoutube,
  faTwitch,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';

export type NavItem = {
  icon: IconProp;
  link: string;
  title: string;
};

export const navItems: NavItem[] = [
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
    link: 'https://twitch.tv/arcyvilk',
    title: 'Twitch',
  },
  {
    icon: faPatreon,
    link: 'https://patreon.com/arcyvilk',
    title: 'Patreon',
  },
];
