import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
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

const Orders = () => {
  const navigate = useNavigate();

  const handleSeeOrderDetails = (orderId) => {};

  return (
    <div className='border rounded bg-white'>
      <div className='px-10 py-6'>
        <div
          className='w-fit hover:underline cursor-pointer pb-8 flex items-center justify-start gap-2'
          onClick={() => navigate("/")}>
          <GoArrowLeft
            size={24}
            className='border border-black rounded-full p-1'
          />
          <p>Home</p>
        </div>

        <div>
          <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            pointerOnHover
            pagination
            onRowClicked={handleSeeOrderDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
