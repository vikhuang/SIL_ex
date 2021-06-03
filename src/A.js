import React from "react";
import * as d3 from "d3";
import { comName } from './fullData';
// import { OriginalData } from "./data";

class ObjectA extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    // this.dataset = this.props.outputFilter === null ? []
    //   : this.props.outputFilter;
  }

  componentDidMount() {
    this.generateTheCanvas();
  }

  componentDidUpdate(prevProps) {
    if (this.props.outputFilter !== prevProps.outputFilter) {
      this.generateTheCanvas();
    }
  }

  generateTheCanvas() {
    let dataset = this.props.outputFilter;
    dataset = dataset === null ? [] : dataset;
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const width = 550;
    const height = 550;
    const innerRadius = 40;
    const outerRadius = Math.min(width, height) / 2;

    this.myRef.current.innerHTML = "";
    const svgCanvus = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr(
        "transform",
        "translate(" + width / 2 + "," + (height / 2 + 10) + ")"
      );

    const myGroups = comName;
    const myVars = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];

    let x = d3
      .scaleBand()
      .range([0, 2 * Math.PI])
      .domain(myGroups)
      .padding(0.5);

    let y = d3
      .scaleBand()
      .range([outerRadius, innerRadius])
      .domain(myVars)
      .padding(0);

    const tColor = d3
      .scaleOrdinal()
      .domain(myVars)
      .range(["#E5243B","#DDA63A","#4C9F38","#C5192D","#FF3A21","#26BDE2","#FCC30B","#A21942","#FD6925","#DD1367","#FD9D24","#BD882E","#3F7E44","#0A97D9","#56C02B","#00689D","#19486A"]);


    const arcPath = (d) =>
      d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(y(d.SDGs))
        .startAngle(x(d.ComName))
        .endAngle(x(d.ComName) + x.bandwidth())
        .padAngle(0)
        .padRadius(innerRadius);

    const dataX = svgCanvus
      .append("g")
      .selectAll("path")
      .data(dataset)
      .join("path")
      .attr("d", (d) => arcPath(d)())
      .style("fill", (d) => (d.No === 0 ? "black" : tColor(d.No)));


    dataX.transition()
         .on('start',function repeat(){
             d3.active(this)
               .duration(5000).style('opacity',Math.random()).transition()
               .duration(5000).style('opacity',Math.random()).transition()
               .on('start',repeat);
         })
    
  }

        
                    
        render(){
            return <div ref={this.myRef}></div>;
          }
    
    }
export default ObjectA;

