import { useState } from 'react';

export function Searchbar() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="w-full rounded-lg border border-zinc-200 p-2 shadow">
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)} 
        className="w-full rounded-lg bg-zinc-100 px-4 py-2 outline-none placeholder:font-light"
        placeholder="Search by location"
      />
    </div>
  );
}
