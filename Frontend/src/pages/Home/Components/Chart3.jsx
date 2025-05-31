// Chart3.jsx
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

const Chart3 = () => {
  const responseTime = {
    ...chartBaseOptions,
    chart: { ...chartBaseOptions.chart, type: "radar", height: 350 },
    colors: ["#6366F1"],
    stroke: { width: 2 },
    fill: { opacity: 0.2 },
    series: [{ name: "ms", data: [45, 68, 30, 90, 50, 40, 75] }],
    labels: [
      "Site A",
      "Site B",
      "Site C",
      "Site D",
      "Site E",
      "Site F",
      "Site G",
    ],
  };

  return (
    <div className="bg-transparent rounded-xl">
      <h3 className="text-2xl font-mono italic mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-blue-500">
        Response Time
      </h3>
      <ReactApexChart
        options={responseTime}
        series={responseTime.series}
        type="radar"
        height={200}
        width={350}
      />
    </div>
  );
};

export default Chart3;
