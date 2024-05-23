import React, { useRef, useEffect } from "react";
import styles from "./HashtagPostBarChart.module.scss";
import * as d3 from "d3";

function HashtagBarChart({
  data,
  width = 714,
  height = 316,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 40,
  marginLeft = 50,
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define scales
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.hashtag))
      .range([marginLeft, width - marginRight])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)])
      .nice()
      .range([height - marginBottom, marginTop]);

    // Clear previous elements
    svg.selectAll("*").remove();

    // Add bars
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.hashtag))
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => y(0) - y(d.count))
      .attr("fill", "#F58A91");

    // Define x-axis
    const xAxis = d3.axisBottom(x);

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

export default HashtagBarChart;
