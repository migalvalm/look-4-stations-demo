import { useEffect } from 'react';

import data from '@/data/data.json'
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setStations } from '@/api/slices/stationsSlice';
import { Station } from '@/api/Types';
import { persistor } from '@/api/Store';

export const useLoadStations = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    persistor.subscribe(() => {
      const stations: Station[] = data.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          address: item.address,
          postal: item.postal,
          socketType: item.socketType,
          socketNumber: item.socketNumber,
          municipality: item.municipality,
          location: item.location,
          latitude: item.latitude,
          longitude: item.longitude,
          favorite: false
        };
      });

      dispatch(setStations(stations));
    })
  }, []);
};
