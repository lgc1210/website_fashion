import React from "react";

const AdminSearchInput = ({
  searchInput,
  setSearchInput,
  customSearchButton = "",
  customSearchInput = "",
}) => {
  return (
    <form className='max-w-md mb-6'>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-[#274b60] sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className={`block w-full p-3 ps-10 text-sm text-[#274b60] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#274b60] focus:border-blue-500-700-600-400-blue-500-blue-500 ${customSearchInput}`}
          placeholder='Search Name, Email, Phone...'
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type='submit'
          className={`text-white absolute end-1.5 bottom-1 bg-[#274b60] hover:bg-slate-300 hover:text-[#274b60] focus:ring-4 focus:outline-none focus:ring-[#274b60] font-medium rounded-lg text-sm px-4 py-2 ${customSearchButton}`}>
          Search
        </button>
      </div>
    </form>
  );
};

export default AdminSearchInput;
