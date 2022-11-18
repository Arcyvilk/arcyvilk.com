import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faArtstation,
  faYoutube,
  faTwitch,
  faPatreon,
  faMastodon,
  faInstagram,
  faTumblr,
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export type NavItem = {
  icon: IconProp;
  link: string;
  title: string;
  type: NavItemType;
};

export enum NavItemType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const navItems: NavItem[] = [
  {
    icon: faTwitter,
    link: 'https://twitter.com/arcyvilk',
    title: 'Twitter',
    type: NavItemType.PRIMARY,
  },
  {
    icon: faGithub,
    link: 'https://github.com/Arcyvilk',
    title: 'Github',
    type: NavItemType.PRIMARY,
  },
  {
    icon: faArtstation,
    link: 'https://artstation.com/arcyvilk',
    title: 'ArtStation',
    type: NavItemType.PRIMARY,
  },
  {
    icon: faMastodon,
    link: 'https://mastodon.art/@arcyvilk',
    title: 'Mastodon',
    type: NavItemType.SECONDARY,
  },
  {
    icon: faTumblr,
    link: 'https://arcystuff.tumblr.com/',
    title: 'Tumblr',
    type: NavItemType.SECONDARY,
  },
  {
    icon: faInstagram,
    link: 'https://instagram.com/arcyvilk',
    title: 'Instagram',
    type: NavItemType.SECONDARY,
  },
  {
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UCgCgl-_28X6lnXBKOGwd4UQ',
    title: 'YouTube',
    type: NavItemType.SECONDARY,
  },
  {
    icon: faTwitch,
    link: 'https://twitch.tv/arcyvilk',
    title: 'Twitch',
    type: NavItemType.SECONDARY,
  },
  {
    icon: faPatreon,
    link: 'https://patreon.com/arcyvilk',
    title: 'Patreon',
    type: NavItemType.PRIMARY,
  },
  {
    icon: faCoffee,
    link: 'https://ko-fi.com/arcyvilk',
    title: 'Ko-Fi',
    type: NavItemType.PRIMARY,
  },
];
