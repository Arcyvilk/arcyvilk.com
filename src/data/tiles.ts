import masochist from '../assets/masochist2.png';
import rift from '../assets/rift2.png';
import fireworks from '../assets/fireworks2.png';
import vikbot from '../assets/vikbot2.png';
import arcybot from '../assets/arcybot.png';
import vnengine from '../assets/vnengine2.png';

export enum Project {
  ART = 'art',
  BOT = 'bot',
  MOBILE_APP = 'mobileapp',
  COMIC = 'comic',
  WEBSITE = 'website',
  WEBAPP = 'webapp',
  OTHER = 'other',
}

export type Tile = {
  type: Project;
  title: string;
  link: string;
  picture: string;
  description: string;
  year: string;
  legacy?: boolean;
  hidden?: boolean;
};

export const tiles: Tile[] = [
  {
    type: Project.WEBSITE,
    title: 'Masochist.me',
    link: 'https://masochist.me',
    picture: masochist,
    description:
      'Website for the masochist.me community - a community of the fans of challenge given by hardcore games. Website provides them with their own, unique ranking system, leaderboards and insight into the game statistics.',
    year: '2018-2025',
  },
  {
    type: Project.COMIC,
    title: 'The Rift [HIATUS]',
    link: 'https://the-rift-comics.tumblr.com',
    picture: rift,
    description:
      'League of Legends fancomic. What is the worst that could happen, when you force Viktor and Ekko to face the upcoming Apocalypse together?\nLeague of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.',
    year: '2017-2018',
    legacy: true,
  },
  {
    type: Project.WEBAPP,
    title: 'EXPLO.TECH [WIP]',
    link: 'https://web.arcyvilk.com/explotech',
    picture: fireworks,
    description:
      'COVID ruined your New Year plans? Fret not thyself! You can now celebrate together with friends and family completely safely with the remote fireworks!',
    year: '2020',
    hidden: false,
  },
  {
    type: Project.BOT,
    title: 'Viktor Bot',
    link: 'https://web.arcyvilk.com/greatherald',
    picture: vikbot,
    description:
      // eslint-disable-next-line prettier/prettier
      'Great Herald aka Viktor Bot is a bot created specifically for the /r/viktormains&apos; community Discord server. His job involves simple talk, role management, promoting streamers and presenting League of Legends players\' data.',
    year: '2016-2022',
    legacy: true,
  },
  {
    type: Project.BOT,
    title: 'Arcybot [TEMPLATE]',
    link: 'https://arcyvilk.github.io/arcybot-discord-template/',
    picture: arcybot,
    description:
      // eslint-disable-next-line prettier/prettier
      'Discord Bot\'s template! It provides you with fully working skeleton for the NodeJS Discord Bot with the database setup on which you can later build. The template includes support for commands, reactions, logging Discord events in designated rooms (user joining/leaving the server, user editing message, user deleting message) and obviously allows you to create your own commands in a relatively simple and straightforwards way.',
    year: '2020',
    hidden: false,
  },
  {
    type: Project.WEBAPP,
    title: 'VnEngine [HIATUS]',
    link: 'https://web.arcyvilk.com/vnengine/',
    picture: vnengine,
    description:
      'A simple JavaScript engine for text-based adventures with elements of point-and-click. Creating your own game is as simple as editing a JSON file and putting pictures in a correct folder.',
    year: '2017',
    hidden: false,
  },
];
