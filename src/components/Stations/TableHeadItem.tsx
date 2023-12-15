const TableHeadItem = ({ item }) => {
   return (
       <td className='p-8 text-center whitespace-nowrap font-medium text-xs text-header' title={item}>
           {item}
       </td>
   );
};
export default TableHeadItem;
