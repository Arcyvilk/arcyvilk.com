import React, { useState, useEffect } from 'react';

import { ThemeType } from '../types';
import { theme as mainTheme, Theme } from '../theme';

import { Tile, Icon, icons as iconsMap, Project } from '../../data';

type ContextType = {
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  tiles: Tile[];
  setTiles: (tiles: Tile[]) => void;
  icons: Icon[];
  setIcons: (icons: Icon[]) => void;
  activeFilters: Project[];
  setActiveFilters: (activeFilters: Project[]) => void;
};
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultThemeType: ThemeType = 'dark';
  const [themeType, setThemeType] = useState<ThemeType>(defaultThemeType);
  const [theme, setTheme] = useState<Theme>(mainTheme[defaultThemeType]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [activeFilters, setActiveFilters] = useState<Project[]>(
    iconsMap.map(icon => icon.type),
  );
  const [icons, setIcons] = useState<Icon[]>([
    {
      type: Project.OTHER,
      icon: ['fas', 'question-circle'],
    },
  ]);

  useEffect(() => {
    setTheme(mainTheme[themeType]);
  }, [themeType]);

  const value = {
    themeType,
    setThemeType,
    theme,
    setTheme,
    tiles,
    setTiles,
    icons,
    setIcons,
    activeFilters,
    setActiveFilters,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export const AppContext = React.createContext({} as ContextType);
