import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoTrashOutline } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";
import Button from "../../components/Button";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Actions",
    selector: (row) => (
      <div className='flex items-center justify-center gap-2'>
        <IoTrashOutline size={22} className='cursor-pointer' />
        <LiaEdit size={24} className='cursor-pointer' />
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Products = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section>
      <div className='p-8'>
        <form class='max-w-md mb-6'>
          <label
            for='default-search'
            class='mb-2 text-sm font-medium text-[#274b60] sr-only'>
            Search
          </label>
          <div class='relative'>
            <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                class='w-4 h-4 text-gray-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              class='block w-full p-3 ps-10 text-sm text-[#274b60] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#274b60] focus:border-blue-500-700-600-400-blue-500-blue-500'
              placeholder='Search Mockups, Logos...'
              required
            />
            <button
              type='submit'
              class='text-white absolute end-1.5 bottom-1 bg-[#274b60] hover:bg-slate-300 hover:text-[#274b60] focus:ring-4 focus:outline-none focus:ring-[#274b60] font-medium rounded-lg text-sm px-4 py-2'>
              Search
            </button>
          </div>
        </form>

        <DataTable
          columns={columns}
          data={data}
          selectableRows
          selectableRowsHighlight
          pagination
        />

        <div className='flex items-center justify-end gap-2 mt-6'>
          <Button
            text='export'
            customStyle='px-3 py-2 text-white bg-[#274b60] hover:text-[#274b60] hover:bg-slate-300 text-sm'
          />
          <Button
            text='import'
            customStyle='px-3 py-2 text-white bg-[#274b60] hover:text-[#274b60] hover:bg-slate-300 text-sm'
          />
          <Button
            text='create'
            customStyle='px-3 py-2 text-white bg-[#274b60] hover:text-[#274b60] hover:bg-slate-300 text-sm'
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
