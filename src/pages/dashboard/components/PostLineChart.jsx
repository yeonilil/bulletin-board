import React, { useRef, useEffect } from "react";
import styles from "./PostLineChart.module.scss";
import * as d3 from "d3";

function PostLineChart({
  data,
  width = 714,
  height = 316,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 40, // Adjusted for axis labels
  marginLeft = 50, // Adjusted for axis labels
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([0, 200])
      .range([height - marginBottom, marginTop]);

    const line = d3
      .line()
      .x((d, i) => x(i))
      .y((d) => y(d));

    // Clear previous elements
    svg.selectAll("*").remove();

    // Add line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#F58A91")
      .attr("strokeWidth", 1.5)
      .attr("d", line);

    // Add points
    svg
      .append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => x(i))
      .attr("cy", (d) => y(d))
      .attr("r", 2.5)
      .attr("fill", "#F58A91")
      .attr("stroke", "#F58A91")
      .attr("strokeWidth", 1.5);

    // Define x-axis
    const xAxis = d3
      .axisBottom(x)
      .ticks(data.length - 1)
      .tickFormat((d, i) => {
        const date = new Date(2023, 0, 2 + i); // Start from January 2, 2023
        return d3.timeFormat("%y.%m.%d")(date);
      });

    // Define y-axis
    const yAxis = d3.axisLeft(y).ticks(5);

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end");

    // Add y-axis
    svg.append("g").attr("transform", `translate(${marginLeft},0)`).call(yAxis);
  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
}

export default PostLineChart;
