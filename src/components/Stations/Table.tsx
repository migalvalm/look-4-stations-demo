import { useMemo } from 'react'

import { Station } from '@/api/Types';

import TableRow from "@/components/Stations/TableRow";
import TableHeadItem from "@/components/Stations/TableHeadItem";

interface TableProps {
  tbodyData: Station[];
  itemsPerPage?: number;
 }

 const STATION_HEADERS = [
  'ID',
  'ADDRESS',
  'NUMBER OF SOCKETS',
  'SOCKET TYPE',
  'FAVORITE',
 ]

const Table: React.FC<TableProps> = ({ tbodyData }) => {  
  return (
    <table className={'bg-white rounded-md px-8 py-8'}>
      <thead className='bg-header-background border border-header-background'>
          <tr className='bg-header-background border border-header-background'>
            {STATION_HEADERS.map((h) => {
                return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
      </thead>
      <tbody>
          {tbodyData.map((station, index) => {
            return <TableRow index={index} station={station} />;
          })}
      </tbody>
    </table>
  );
};
export default Table;
