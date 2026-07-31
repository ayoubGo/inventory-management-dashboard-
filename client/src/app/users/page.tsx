"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "../(components)/Header";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();
  console.log(users);
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="py-4 text-center text-red-500">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />

      <div className="mt-5 h-[500px]">
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.userId}
          checkboxSelection
          className="rounded-lg border border-gray-200 text-gray-700! shadow"
        />
      </div>
    </div>
  );
};

export default Users;
