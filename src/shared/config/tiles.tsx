import React from 'react';
import masochist from '../img/tiles/masochist.png';
import vikbot from '../img/tiles/vikbot.png';
import rift from '../img/tiles/rift.png';

export type TileType = 'comic' | 'art' | 'bot' | 'app' | 'other';

export type Tile = {
  title: string;
  description?: React.ReactNode;
  picture: string;
  type: TileType;
};

export const tiles: Tile[] = [
  {
    title: 'The Rift [HIATUS]',
    picture: rift,
    type: 'comic',
    description: (
      <>
        <p>
          League of Legends fancomic. What&apos;s the worst that could happen,
          when you force Viktor and Ekko to face the upcoming Apocalypse
          together?
        </p>
        <p>
          League of Legends and Riot Games are trademarks or registered
          trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </p>
      </>
    ),
  },
  {
    title: 'Viktor Bot',
    picture: vikbot,
    type: 'bot',
    description: (
      <>
        <p>
          Great Herald aka Viktor Bot is a bot created specifically for the
          /r/viktormains&apos; community Discord server.
        </p>
        <p>
          His job involves simple talk, role management, promoting streamers and
          presenting League of Legends players&apos; data.
        </p>
      </>
    ),
  },
  {
    title: 'Masochist.me',
    picture: masochist,
    type: 'app',
    description: (
      <>
        <p>
          Website for the 0.1% community - a dedicated group for dedicated
          gamers.
        </p>
        <p>Website provides community with their own unique ranking system.</p>
      </>
    ),
  },
];
