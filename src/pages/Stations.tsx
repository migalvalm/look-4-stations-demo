import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux';

import { RootState } from '@/api/Store';
import { Station } from '@/api/Types'
import { useLoadStations } from '@/hooks/useLoadStations';

import Text from '@/components/elements/Text';

import Table from '@/components/Stations/Table';
import Search from '@/components/Stations/Search'
import SocketFilter from '@/components/Stations/SocketFilter'

import { pluralize } from '@/utils/String';
import { searchStations } from '@/utils/Search';

export const Stations = () => {
  useLoadStations()
  
  const [searchTerm, setSearchTerm] = useState('')
  const stations: Station[] = useSelector((state: RootState) => state.stations);
  const socketTypes = useSelector((state: RootState) => state.socket);
  const searchFilters = useSelector((state: RootState) => state.search);

  const filteredStations: Station[] = useMemo(() => {
    const filteredBySocketTypes = stations.filter((station) =>
      (station.socketType.includes('Normal') && socketTypes.Normal) ||
      (station.socketType.includes('Rápido') && socketTypes.Rapido)
    );

    if (searchTerm) {
      return searchStations(filteredBySocketTypes, searchTerm, searchFilters);
    }

    return filteredBySocketTypes
  }, [stations, searchTerm, socketTypes]) 


  return (
    <div className='flex flex-col justify-center px-56 py-12 space-y-8 w-full h-full'>
      <div className='space-y-2'>
        <Text className='text-title text-3xl font-bold'> Charging Stations </Text>
        <Text className='text-sub-title'> {pluralize(filteredStations.length, 'charging station')} </Text>
      </div>
      <div className="flex justify-between">
        <SocketFilter />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <Table tbodyData={filteredStations} />
    </div>
  )
}

export default Stations