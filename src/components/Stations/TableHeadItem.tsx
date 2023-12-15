const TableHeadItem = ({ item }) => {
   return (
       <td className='p-2 text-left whitespace-nowrap font-medium text-xs text-header' title={item}>
           {item}
       </td>
   );
};
export default TableHeadItem;
