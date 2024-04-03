import React from "react";
import "./ComparisonChart.css";
import { BarChart, XAxis, YAxis, ResponsiveContainer, Bar } from "recharts";
import { IoIosArrowDown } from "react-icons/io";

const ComparisonChart = () => {
  const data = [
    {
      name: "Sun",
      uv: 160,
      pv: 96,
      amt: 96,
    },
    {
      name: "Mon",
      uv: 120,
      pv: 55.2,
      amt: 88,
    },
    {
      name: "Tue",
      uv: 80,
      pv: 250,
      amt: 72,
    },
    {
      name: "Wed",
      uv: 111.6,
      pv: 150,
      amt: 64,
    },
    {
      name: "Thu",
      uv: 200,
      pv: 100,
      amt: 69.24,
    },
    {
      name: "Fri",
      uv: 119.5,
      pv: 200,
      amt: 80,
    },
    {
      name: "Sat",
      uv: 174.5,
      pv: 100,
      amt: 84,
    },
  ];

  return (
    <div className="comparisonchart-container">
      <div className="comparisonchart-header-container">
        <h3 className="comparisonchart-header-title">Comparison</h3>
        <div className="comparisonchart-header-right-container">
          <span className="comparisonchart-header-right-text">6 months</span>
          <IoIosArrowDown className="comparisonchart-header-right-icon" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" strokeWidth={0} />
          <YAxis strokeWidth={0} />
          <Bar
            dot={false}
            type="monotone"
            dataKey="uv"
            stroke="#679CF6"
            strokeWidth={3}
            fillOpacity={1}
            fill="#4285F440"
          />
          <Bar
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke="#20C997"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="data-descr-container">
        <div className="last-container">
          <div className="last-color"></div>
          <p className="year-name">Last Year</p>
        </div>
        <div className="this-container">
          <div className="this-color"></div>
          <p className="year-name">This Year</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;
