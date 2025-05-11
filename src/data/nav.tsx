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
  isHidden: boolean;
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
    isHidden: true, // HIDDEN
  },
  {
    icon: faGithub,
    link: 'https://github.com/Arcyvilk',
    title: 'Github',
    type: NavItemType.PRIMARY,
    isHidden: false,
  },
  {
    icon: faArtstation,
    link: 'https://artstation.com/arcyvilk',
    title: 'ArtStation',
    type: NavItemType.PRIMARY,
    isHidden: false,
  },
  {
    icon: faMastodon,
    link: 'https://mastodon.art/@arcyvilk',
    title: 'Mastodon',
    type: NavItemType.SECONDARY,
    isHidden: true, // HIDDEN
  },
  {
    icon: faTumblr,
    link: 'https://arcystuff.tumblr.com/',
    title: 'Tumblr',
    type: NavItemType.SECONDARY,
    isHidden: true, // HIDDEN
  },
  {
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UCgCgl-_28X6lnXBKOGwd4UQ',
    title: 'YouTube',
    type: NavItemType.SECONDARY,
    isHidden: false,
  },
  {
    icon: faTwitch,
    link: 'https://twitch.tv/arcyvilk',
    title: 'Twitch',
    type: NavItemType.SECONDARY,
    isHidden: true, // HIDDEN
  },
  {
    icon: faPatreon,
    link: 'https://patreon.com/arcyvilk',
    title: 'Patreon',
    type: NavItemType.PRIMARY,
    isHidden: false,
  },
  {
    icon: faCoffee,
    link: 'https://ko-fi.com/arcyvilk',
    title: 'Ko-Fi',
    type: NavItemType.PRIMARY,
    isHidden: false,
  },
];
