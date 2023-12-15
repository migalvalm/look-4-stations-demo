import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/api/Store';
import { setSearchFilters } from '@/api/slices/searchFilterSlice'

import Checkbox from '@/components/elements/Checkbox'

const SearchFilters = () => {
  const dispatch = useDispatch();
  const searchFilters = useSelector((state: RootState) => state.search);
  
  const handleSearchFilterChange = (event) => {
    const searchFilter = event.target.value;
    const isChecked = event.target.checked;
    dispatch(setSearchFilters({ ...searchFilters, [searchFilter]: isChecked }));
  };

  return (
    <div className='flex space-x-4 pt-4 justify-end'>
      <Checkbox
        className='py-2 flex items-center whitespace-nowrap'
        label={'Municipality'}
        checked={searchFilters.Municipality}
        value={'Municipality'}
        onChange={handleSearchFilterChange}
      />
      <Checkbox
        className='py-2 flex items-center whitespace-nowrap'
        label={'Location'}
        checked={searchFilters.Location}
        value={'Location'}
        onChange={handleSearchFilterChange}
      />
      <Checkbox
        className='py-2 flex items-center whitespace-nowrap'
        label={'Address'}
        checked={searchFilters.Address}
        value={'Address'}
        onChange={handleSearchFilterChange}
      />
      <Checkbox
        className='py-2 flex items-center whitespace-nowrap'
        label={'Postal Code'}
        checked={searchFilters.PostalCode}
        value={'PostalCode'}
        onChange={handleSearchFilterChange}
      />
    </div>
   );
};

export default SearchFilters;
