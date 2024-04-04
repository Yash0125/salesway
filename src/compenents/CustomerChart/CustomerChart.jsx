import React from "react";
import "./CustomerChart.css";
import { YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const CustomerChart = () => {
  const data = [
    {
      date: "2022-12-13 22:05:00",
      web_sales: 15,
      offline_sales: 14,
    },
    {
      date: "2022-12-13 22:06:00",
      web_sales: 23,
      offline_sales: 21,
    },
    {
      date: "2022-12-13 22:07:00",
      web_sales: 39,
      offline_sales: 35,
    },
    {
      date: "2022-12-13 22:08:00",
      web_sales: 56,
      offline_sales: 49,
    },
    {
      date: "2022-12-13 22:09:00",
      web_sales: 67,
      offline_sales: 60,
    },
    {
      date: "2022-12-13 22:10:00",
      web_sales: 86,
      offline_sales: 78,
    },
    {
      date: "2022-12-13 22:11:00",
      web_sales: 100,
      offline_sales: 90,
    },
    {
      date: "2022-12-13 22:12:00",
      web_sales: 125,
      offline_sales: 100,
    },
    {
      date: "2022-12-13 22:13:00",
      web_sales: 139,
      offline_sales: 109,
    },
    {
      date: "2022-12-13 22:14:00",
      web_sales: 148,
      offline_sales: 117,
    },
    {
      date: "2022-12-13 22:15:00",
      web_sales: 160,
      offline_sales: 127,
    },
    {
      date: "2022-12-13 22:16:00",
      web_sales: 172,
      offline_sales: 138,
    },
    {
      date: "2022-12-13 22:17:00",
      web_sales: 189,
      offline_sales: 149,
    },
    {
      date: "2022-12-13 22:18:00",
      web_sales: 212,
      offline_sales: 162,
    },
    {
      date: "2022-12-13 22:19:00",
      web_sales: 231,
      offline_sales: 170,
    },
    {
      date: "2022-12-13 22:20:00",
      web_sales: 248,
      offline_sales: 176,
    },
    {
      date: "2022-12-13 22:21:00",
      web_sales: 265,
      offline_sales: 186,
    },
    {
      date: "2022-12-13 22:22:00",
      web_sales: 278,
      offline_sales: 195,
    },
    {
      date: "2022-12-13 22:23:00",
      web_sales: 294,
      offline_sales: 207,
    },
    {
      date: "2022-12-13 22:24:00",
      web_sales: 309,
      offline_sales: 219,
    },
    {
      date: "2022-12-13 22:25:00",
      web_sales: 323,
      offline_sales: 228,
    },
    {
      date: "2022-12-13 22:26:00",
      web_sales: 340,
      offline_sales: 240,
    },
    {
      date: "2022-12-13 22:27:00",
      web_sales: 354,
      offline_sales: 252,
    },
    {
      date: "2022-12-13 22:28:00",
      web_sales: 366,
      offline_sales: 261,
    },
    {
      date: "2022-12-13 22:29:00",
      web_sales: 378,
      offline_sales: 272,
    },
    {
      date: "2022-12-13 22:30:00",
      web_sales: 388,
      offline_sales: 279,
    },
    {
      date: "2022-12-13 22:31:00",
      web_sales: 399,
      offline_sales: 287,
    },
    {
      date: "2022-12-13 22:32:00",
      web_sales: 408,
      offline_sales: 293,
    },
    {
      date: "2022-12-13 22:33:00",
      web_sales: 419,
      offline_sales: 300,
    },
    {
      date: "2022-12-13 22:34:00",
      web_sales: 429,
      offline_sales: 310,
    },
    {
      date: "2022-12-13 22:35:00",
      web_sales: 439,
      offline_sales: 318,
    },
    {
      date: "2022-12-13 22:36:00",
      web_sales: 450,
      offline_sales: 325,
    },
    {
      date: "2022-12-13 22:37:00",
      web_sales: 461,
      offline_sales: 332,
    },
    {
      date: "2022-12-13 22:38:00",
      web_sales: 471,
      offline_sales: 340,
    },
    {
      date: "2022-12-13 22:39:00",
      web_sales: 482,
      offline_sales: 348,
    },
    {
      date: "2022-12-13 22:40:00",
      web_sales: 493,
      offline_sales: 354,
    },
    {
      date: "2022-12-13 22:41:00",
      web_sales: 505,
      offline_sales: 361,
    },
    {
      date: "2022-12-13 22:42:00",
      web_sales: 515,
      offline_sales: 369,
    },
    {
      date: "2022-12-13 22:43:00",
      web_sales: 526,
      offline_sales: 378,
    },
    {
      date: "2022-12-13 22:44:00",
      web_sales: 537,
      offline_sales: 384,
    },
    {
      date: "2022-12-13 22:45:00",
      web_sales: 548,
      offline_sales: 391,
    },
    {
      date: "2022-12-13 22:46:00",
      web_sales: 559,
      offline_sales: 398,
    },
    {
      date: "2022-12-13 22:47:00",
      web_sales: 570,
      offline_sales: 404,
    },
    {
      date: "2022-12-13 22:48:00",
      web_sales: 581,
      offline_sales: 410,
    },
    {
      date: "2022-12-13 22:49:00",
      web_sales: 590,
      offline_sales: 418,
    },
    {
      date: "2022-12-13 22:50:00",
      web_sales: 600,
      offline_sales: 424,
    },
    {
      date: "2022-12-13 22:51:00",
      web_sales: 609,
      offline_sales: 431,
    },
    {
      date: "2022-12-13 22:52:00",
      web_sales: 619,
      offline_sales: 438,
    },
    {
      date: "2022-12-13 22:53:00",
      web_sales: 630,
      offline_sales: 446,
    },
    {
      date: "2022-12-13 22:54:00",
      web_sales: 640,
      offline_sales: 452,
    },
    {
      date: "2022-12-13 22:55:00",
      web_sales: 652,
      offline_sales: 459,
    },
    {
      date: "2022-12-13 22:56:00",
      web_sales: 663,
      offline_sales: 465,
    },
    {
      date: "2022-12-13 22:57:00",
      web_sales: 674,
      offline_sales: 472,
    },
    {
      date: "2022-12-13 22:58:00",
      web_sales: 685,
      offline_sales: 479,
    },
    {
      date: "2022-12-13 22:59:00",
      web_sales: 694,
      offline_sales: 485,
    },
    {
      date: "2022-12-13 23:00:00",
      web_sales: 704,
      offline_sales: 493,
    },
    {
      date: "2022-12-13 23:01:00",
      web_sales: 714,
      offline_sales: 499,
    },
    {
      date: "2022-12-13 23:02:00",
      web_sales: 724,
      offline_sales: 507,
    },
    {
      date: "2022-12-13 23:03:00",
      web_sales: 734,
      offline_sales: 514,
    },
    {
      date: "2022-12-13 23:04:00",
      web_sales: 745,
      offline_sales: 521,
    },
    {
      date: "2022-12-13 23:05:00",
      web_sales: 756,
      offline_sales: 529,
    },
    {
      date: "2022-12-13 23:06:00",
      web_sales: 767,
      offline_sales: 535,
    },
    {
      date: "2022-12-13 23:07:00",
      web_sales: 777,
      offline_sales: 541,
    },
    {
      date: "2022-12-13 23:08:00",
      web_sales: 788,
      offline_sales: 547,
    },
    {
      date: "2022-12-13 23:09:00",
      web_sales: 798,
      offline_sales: 554,
    },
    {
      date: "2022-12-13 23:10:00",
      web_sales: 807,
      offline_sales: 560,
    },
    {
      date: "2022-12-13 23:11:00",
      web_sales: 816,
      offline_sales: 567,
    },
    {
      date: "2022-12-13 23:12:00",
      web_sales: 826,
      offline_sales: 574,
    },
    {
      date: "2022-12-13 23:13:00",
      web_sales: 837,
      offline_sales: 582,
    },
    {
      date: "2022-12-13 23:14:00",
      web_sales: 847,
      offline_sales: 589,
    },
    {
      date: "2022-12-13 23:15:00",
      web_sales: 857,
      offline_sales: 595,
    },
    {
      date: "2022-12-13 23:16:00",
      web_sales: 868,
      offline_sales: 602,
    },
    {
      date: "2022-12-13 23:17:00",
      web_sales: 877,
      offline_sales: 609,
    },
    {
      date: "2022-12-13 23:18:00",
      web_sales: 888,
      offline_sales: 616,
    },
    {
      date: "2022-12-13 23:19:00",
      web_sales: 898,
      offline_sales: 623,
    },
    {
      date: "2022-12-13 23:20:00",
      web_sales: 908,
      offline_sales: 630,
    },
    {
      date: "2022-12-13 23:21:00",
      web_sales: 918,
      offline_sales: 637,
    },
    {
      date: "2022-12-13 23:22:00",
      web_sales: 928,
      offline_sales: 643,
    },
    {
      date: "2022-12-13 23:23:00",
      web_sales: 939,
      offline_sales: 650,
    },
    {
      date: "2022-12-13 23:24:00",
      web_sales: 949,
      offline_sales: 656,
    },
    {
      date: "2022-12-13 23:25:00",
      web_sales: 959,
      offline_sales: 663,
    },
    {
      date: "2022-12-13 23:26:00",
      web_sales: 969,
      offline_sales: 669,
    },
    {
      date: "2022-12-13 23:27:00",
      web_sales: 979,
      offline_sales: 676,
    },
    {
      date: "2022-12-13 23:28:00",
      web_sales: 989,
      offline_sales: 682,
    },
    {
      date: "2022-12-13 23:29:00",
      web_sales: 999,
      offline_sales: 689,
    },
  ];

  return (
    <div className="customer-chart-container">
      <h2 className="customer-chart-title">Customers by Device</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
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
          <YAxis strokeWidth={0} />
          <Line
            dot={false}
            type="monotone"
            dataKey="web_sales"
            stroke="#679CF6"
            strokeWidth={3}
            fillOpacity={1}
            fill="#4285F440"
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="offline_sales"
            stroke="#20C997"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="data-sale-descr-container">
        <div className="web-sales-container">
          <div className="row-1">
            <p className="web-name">Web sales</p>
            <div className="web-color"></div>
          </div>
          <div className="row-2">
            <p className="row-name">1304%</p>
          </div>
        </div>
        <div className="offline-sales-container">
          <div className="row-1">
            <p className="web-name">Offline selling</p>
            <div className="off-color"></div>
          </div>
          <div className="row-2">
            <p className="row-name">473%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChart;
