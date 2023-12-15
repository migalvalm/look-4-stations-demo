import { useSelector } from 'react-redux';

import { RootState } from '@/api/Store';
import { Station } from '@/api/Types';

export const searchStations = (stations: Station[], searchTerm: string, searchFilters: any) => {
  return stations.filter((station) =>
    station.municipality.includes(searchTerm) && searchFilters['Municipality'] ||
    station.address.includes(searchTerm) && searchFilters['Address'] ||
    station.location.includes(searchTerm) && searchFilters['Location'] ||
    station.postal.toString().includes(searchTerm) && searchFilters['PostalCode']
  );
};