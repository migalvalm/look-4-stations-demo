
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
        <td className="pr-8 font-light text-sm text-body whitespace-nowrap">{station.id}</td>
        <td className="pr-8 font-light text-sm text-body">{station.address}</td>
        <td className="pr-8 font-light text-sm text-body">{station.socketNumber}</td>
        <td className="pr-8 font-light text-sm text-body">{station.socketType}</td>
        <td className="pr-8 font-light text-sm text-body">
          <button onClick={handleFavoriteToggle}>
            { station.favorite ? 'Unfavorite' : 'Favorite' }
          </button>
        </td>
    </tr>
  );
};
export default TableRow;
