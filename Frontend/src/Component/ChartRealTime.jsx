import React from "react";
import Chart from "react-apexcharts";

const PingChart = ({ pingLogs }) => {
  const chartData = pingLogs.map((log) => ({
    x: new Date(log.checkedAt),
    y: log.responseTime,
  }));
  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          hour: "HH:mm",
          minute: "HH:mm",
        },
      },
      title: {
        text: "Time (24h format)",
      },
    },
    yaxis: {
      title: {
        text: "Response Time (ms)",
      },
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
    },
    stroke: {
      curve: "straight",
      width: 3,
      colors: "#66DA26",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.5,
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 2,
      },
    },
    markers: {
      size: 0,
    },
  };
  const series = [
    {
      name: "Response Time",
      data: chartData,
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Chart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default PingChart;
