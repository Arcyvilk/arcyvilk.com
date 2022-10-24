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
  year: number;
  legacy?: boolean;
  hidden?: boolean;
};

export const tiles: Tile[] = [
  {
    type: Project.COMIC,
    title: 'The Rift [HIATUS]',
    link: 'http://the-rift-comics.tumblr.com',
    picture: 'http://cdn.arcyvilk.com/arcyvilk/rift2.png',
    description:
      'League of Legends fancomic. What&apos;s the worst that could happen, when you force Viktor and Ekko to face the upcoming Apocalypse together?\nLeague of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.',
    year: 2017,
    legacy: true,
  },
  {
    type: Project.WEBAPP,
    title: 'EXPLO.TECH [WIP]',
    link: 'http://cdn.arcyvilk.com/explotech',
    picture: 'http://cdn.arcyvilk.com/arcyvilk/fireworks2.png',
    description:
      'COVID ruined your New Year plans? Fret not thyself! You can now celebrate together with friends and family completely safely with the remote fireworks!',
    year: 2020,
    hidden: false,
  },
  {
    type: Project.BOT,
    title: 'Viktor Bot',
    link: 'http://cdn.arcyvilk.com/greatherald',
    picture: 'http://cdn.arcyvilk.com/arcyvilk/vikbot2.png',
    description:
      // eslint-disable-next-line prettier/prettier
      'Great Herald aka Viktor Bot is a bot created specifically for the /r/viktormains&apos; community Discord server. His job involves simple talk, role management, promoting streamers and presenting League of Legends players\' data.',
    year: 2018,
    legacy: true,
  },
  {
    type: Project.BOT,
    title: 'Arcybot [TEMPLATE]',
    link: 'https://arcyvilk.github.io/arcybot-discord-template/',
    picture: 'http://cdn.arcyvilk.com/arcyvilk/arcybot.png',
    description:
      // eslint-disable-next-line prettier/prettier
      'Discord Bot\'s template! It provides you with fully working skeleton for the NodeJS Discord Bot with the database setup on which you can later build. The template includes support for commands, reactions, logging Discord events in designated rooms (user joining/leaving the server, user editing message, user deleting message) and obviously allows you to create your own commands in a relatively simple and straightforwards way.',
    year: 2020,
    hidden: false,
  },
  {
    type: Project.WEBSITE,
    title: 'Masochist.me',
    link: 'http://masochist.me',
    picture: 'http://cdn.arcyvilk.com/arcyvilk/masochist2.png',
    description:
      'Website for the masochist.me community - a community of the fans of challenge given by hardcore games. Website provides them with their own, unique ranking system, leaderboards and insight into the game statistics.',
    year: 2018,
  },
  {
    type: Project.WEBAPP,
    title: 'VnEngine [HIATUS]',
    link: 'http://cdn.arcyvilk.com/vnengine/',
    picture: 'http://cdn.arcyvilk.com/arcyvilk/vnengine.png',
    description:
      'A simple JavaScript engine for text-based adventures with elements of point-and-click. Creating your own game is as simple as editing a JSON file and putting pictures in a correct folder.',
    year: 2017,
    hidden: false,
  },
];
