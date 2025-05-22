// Chart2.jsx
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
    style: { fontSize: "12px" },
  },
};

const Chart2 = () => {
  const downtimeIncidents = {
    ...chartBaseOptions,
    chart: { ...chartBaseOptions.chart, type: "bar", height: 350 },
    colors: ["#EF4444"],
    plotOptions: {
      bar: { borderRadius: 4, horizontal: false, columnWidth: "45%" },
    },
    series: [{ name: "Incidents", data: [2, 1, 3, 0, 0, 1, 0] }],
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  };
  return (
    <div className="bg-transparent rounded-xl">
      <h3 className="text-2xl font-mono italic mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-blue-500">
        Downtime Incidents
      </h3>
      <ReactApexChart
        options={downtimeIncidents}
        series={downtimeIncidents.series}
        type="bar"
        height={200}
        width={350}
      />
    </div>
  );
};

export default Chart2;
