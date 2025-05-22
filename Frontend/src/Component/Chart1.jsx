// Chart1.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

const chartBaseOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#fff",
    background: "transparent",
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: {
    theme: "dark",
    style: { fontSize: "10px" },
  },
};

const Chart1 = () => {
  const uptimeHistory = {
    ...chartBaseOptions,
    chart: { ...chartBaseOptions.chart, type: "area", height: 350 },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#10B981"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    series: [{ name: "Uptime %", data: [85, 90, 92, 95, 96, 99] }],
    xaxis: { categories: ["Mon", "Wed", "Fri", "Sun"] },
  };

  return (
    <div className="bg-transparent rounded-xl">
      <h3 className="text-2xl font-mono italic mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-blue-500">
        Uptime
      </h3>
      <ReactApexChart
        options={uptimeHistory}
        series={uptimeHistory.series}
        type="area"
        height={200}
        width={350}
      />
    </div>
  );
};

export default Chart1;
