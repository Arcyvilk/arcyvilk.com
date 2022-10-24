import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { Project } from './tiles';

export type Icon = {
  type: Project;
  icon: [IconPrefix, IconName];
};

export const icons: Icon[] = [
  { type: Project.ART, icon: ['fas', 'palette'] },
  { type: Project.BOT, icon: ['fas', 'robot'] },
  { type: Project.MOBILE_APP, icon: ['fas', 'mobile-alt'] },
  { type: Project.COMIC, icon: ['fas', 'comments'] },
  { type: Project.WEBSITE, icon: ['fas', 'globe'] },
  { type: Project.WEBAPP, icon: ['fas', 'globe'] },
  { type: Project.OTHER, icon: ['fas', 'question-circle'] },
];
