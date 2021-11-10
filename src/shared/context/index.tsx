import React, { useState, useEffect } from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { ThemeType } from '../types';
import { Tile, TileType } from '../config';
import { theme as mainTheme, Theme } from '../theme';

type Icons = Partial<Record<TileType, [IconPrefix, IconName]>>;
type ContextType = {
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  tiles: Tile[];
  setTiles: (tiles: Tile[]) => void;
  icons: Icons;
  setIcons: (icons: Icons) => void;
  activeFilters: TileType[];
  setActiveFilters: (activeFilters: TileType[]) => void;
};
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultThemeType: ThemeType = 'dark';
  const [themeType, setThemeType] = useState<ThemeType>(defaultThemeType);
  const [theme, setTheme] = useState<Theme>(mainTheme[defaultThemeType]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [activeFilters, setActiveFilters] = useState<TileType[]>([]);
  const [icons, setIcons] = useState<Icons>({
    other: ['fas', 'question-circle'],
  });

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
