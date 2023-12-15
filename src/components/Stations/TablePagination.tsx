const TablePagination = ({ currentPage, itemsPerPage, tbodyData, setCurrentPage }) => {

  const handlePageChange = (value: number) => {
    setCurrentPage(value);
  };

  return(
    <div className='flex justify-between'>
      <button 
        className='bg-normal-100 text-md font-light rounded-sm w-20 px-2 py-2 hover:bg-normal-50' 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button 
        className='bg-normal-100 text-md font-light rounded-sm w-20 px-2 py-2 hover:bg-normal-50' 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === Math.ceil(tbodyData.length / itemsPerPage)}
      >
        Next
      </button>
    </div>
  )
}

export default TablePagination;