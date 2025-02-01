/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/SearchBar.jsx

interface SearchBarProps {
  onSearch: (value: any) => any;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="ค้นหาทีมการแข่งขัน"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
