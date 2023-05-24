import React from "react";
import "./firstMini.css";
import { VictoryChart, VictoryAxis, VictoryLine, VictoryLegend } from "victory";

const FirstMini = () => {
  // Demo data
  const data = [
    { x: 1, y: 2000 },
    { x: 2, y: 3300 },
    { x: 3, y: 5000 },
    { x: 4, y: 4489 },
    { x: 5, y: 2000 },
  ];

  const data2 = [
    { x: 1, y: 2234 },
    { x: 2, y: 3183 },
    { x: 3, y: 1100 },
    { x: 4, y: 3478 },
    { x: 5, y: 4098 },
  ];

  const formatTickLabel = (tick) => {
    return tick.toFixed(0); // Remove decimal points from tick label
  };

  const legendData = [
    { name: "sales 1", symbol: { fill: "blue" } },
    { name: "sales 2", symbol: { fill: "red" } },
  ];

  return (
    <div className="firstmini">
      <span className="firstmini-total_sales">Total Sales</span>
      <div className="firstmini-strike_through">
        <span className="n">N</span>
        <span className="firstmini-number">1,254</span>
      </div>
      <span className="firstmini-sales_volume">Sales Volume</span>
      <div className="firstmini-graph">
        <VictoryChart
        height = {500}
          style={{
            axis: { stroke: "white" }, // Set color of the axes and ticks
            tickLabels: { fill: "white" }, // Set color of the tick labels
          }}
        >
          <VictoryAxis
            style={{
              axis: { stroke: "white" }, // Set color of the axis
              tickLabels: { fill: "white" }, // Set color of the tick labels
            }}
            tickFormat={formatTickLabel} // Apply formatting to the tick labels
          />
          <VictoryAxis
            dependentAxis
            tickFormat={formatTickLabel} // Apply formatting to the tick labels
            style={{
              axis: { stroke: "white" }, // Set color of the axis
              tickLabels: { fill: "white" }, // Set color of the tick labels
              grid: { stroke: "#8080801c" }, // Set color of the grid lines
            }}
          />
          <VictoryLine
            data={data}
            style={{
              data: { stroke: "blue" }, // Set line color to white
            }}
          />
          <VictoryLine
            data={data2}
            style={{
              data: { stroke: "red" }, // Set line color to white
            }}
          />

          <VictoryLegend
            x={280}
            orientation="horizontal"
            gutter={20}
            style={{
              labels: { fill: "white" },
            }}
            data={legendData}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default FirstMini;
