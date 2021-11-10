import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { AppContext } from '../../shared/context';
import { sleep } from '../../shared/utils';

export const useDataBase = (): void => {
  useTiles();
  useIcons();
};

export const useTiles = (): void => {
  const { setTiles } = useContext(AppContext);

  const { data: tilesData } = useQuery('tiles', async () => {
    const tiles = await fetch('http://89.47.165.141:1717/api/tiles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (tiles.status === 200) {
      const data = await tiles.json();
      return { data };
    } else {
      return {
        error: `Error fetching tiles. Status ${tiles.status}`,
      };
    }
  });

  useEffect(() => {
    if (tilesData && !tilesData.error) {
      setTiles(tilesData.data);
      return;
    }
    sleep(5000);
  }, [tilesData]);
};

export const useIcons = (): void => {
  const { setIcons } = useContext(AppContext);

  const { data: iconsData } = useQuery('icons', async () => {
    const icons = await fetch('http://89.47.165.141:1717/api/icons', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (icons.status === 200) {
      const data = await icons.json();
      return { data };
    } else {
      return {
        error: `Error fetching tiles. Status ${icons.status}`,
      };
    }
  });

  useEffect(() => {
    if (iconsData && !iconsData.error) {
      setIcons(iconsData.data?.[0]?.value ?? {});
      return;
    }
    sleep(5000);
  }, [iconsData]);
};
