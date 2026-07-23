"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "../(components)/Header";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  console.log("products", products);

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (!products || isError) {
    return (
      <div className="text-center text-red-500 py-4">
        Failure to feach products
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <Header name="Invetory" />
      <DataGrid rows={products} columns={columns} />
    </div>
  );
};

export default Inventory;
