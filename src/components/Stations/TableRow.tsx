
import { useDispatch } from 'react-redux';

import { updateFavorite } from '@/api/slices/stationsSlice';
import { Station } from '@/api/Types'

interface TableRow {
  station: Station,
  index: 'string'
}

const TableRow = ({ station, index  }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(
      updateFavorite(
        { 
          id: station.id,
          favorite: !station.favorite
        }
      )
    )
  }

  return (
    <tr key={index}>
        <td className="text-center font-light text-sm text-title whitespace-nowrap">{station.id}</td>
        <td className="text-center font-light text-sm text-title">{station.address}</td>
        <td className="text-center font-light text-sm text-title">{station.socketNumber}</td>
        <td className="text-center font-light text-sm text-title">{station.socketType}</td>
        <td className="text-center font-light text-sm text-title">
          <button onClick={handleFavoriteToggle}>
            { station.favorite ? 'Unfavorite' : 'Favorite' }
          </button>
        </td>
    </tr>
  );
};
export default TableRow;
