import SearchInput from '@/components/elements/SearchInput'
import SearchFilters from '@/components/Stations/SearchFilters'

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='flex flex-col space-x-4'>
      <div className='flex justify-end'> 
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <SearchFilters />
    </div>
  )
}

export default Search;