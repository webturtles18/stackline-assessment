import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useAppSelector } from "../hooks";
import { Sales } from "../types/product-details";

export default function SalesChart() {
  const salesData: Sales[] | null | undefined = useAppSelector(
    (state) => state.product.product?.sales
  );

  const retailSales = salesData?.map((item) => {
    return {
      x: new Date(item.weekEnding).getTime(),
      y: item.retailSales,
    };
  });
  const wholesaleSales = salesData?.map((item) => {
    return {
      x: new Date(item.weekEnding).getTime(),
      y: item.wholesaleSales,
    };
  });
  const unitsSold = salesData?.map((item) => {
    return {
      type: "column",
      x: new Date(item.weekEnding).getTime(),
      y: item.unitsSold,
      color: "#00E396",
    };
  });
  const retailerMargin = salesData?.map((item) => {
    return {
      type: "column",
      x: new Date(item.weekEnding).getTime(),
      y: item.retailerMargin,
      color: "#008FFB",
    };
  });

  const options: ApexOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: true,
      },
      toolbar: {
        autoSelected: "zoom",
        tools: {
          download: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val: any) {
          return new Date(val).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        },
      },
    },
    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: "Retail Sales",
      data: retailSales || [],
      type: "line",
    },
    {
      name: "Wholesale Sales",
      data: wholesaleSales || [],
      type: "line",
    },
    {
      name: "Units Sold",
      data: unitsSold || [],
      type: "column",
      color: "#FFD73A",
    },
    {
      name: "Retailer Margin",
      data: retailerMargin || [],
      type: "column",
      color: "#F5A755",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xs md:p-10 p-2">
      <h1 className="font-medium">Retail Sales</h1>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}
