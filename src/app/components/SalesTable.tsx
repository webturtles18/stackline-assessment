import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useAppSelector } from "../hooks";
import { Sales } from "../types/product-details";

export default function SalesTable() {
  const salesData: Sales[] | null | undefined = useAppSelector(
    (state) => state.product.product?.sales
  );

  const columnDefs: any[] = [
    { headerName: "Week Ending", field: "weekEnding", width: "270px" },
    { headerName: "Retail Sales", field: "retailSales", width: "250px" },
    { headerName: "Wholesale Sales", field: "wholesaleSales", width: "250px" },
    { headerName: "Units Sold", field: "unitsSold", width: "250px" },
    { headerName: "Retailer Margin", field: "retailerMargin", width: "250px" },
  ];
  const rowData: Sales[] | null | undefined = salesData;
  return (
    <div className="bg-white rounded-lg shadow-xs md:p-10 p-2 ">
      <div className="ag-theme-alpine h-[500px]">
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
}
