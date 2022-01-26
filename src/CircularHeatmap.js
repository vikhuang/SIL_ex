import * as d3 from 'd3';

async function CircularHeatmap()  {
        const margin = {top:30, right:30, bottom:30, left:30};
        const width = 450;
        const height = 450;
        const innerRadius = 80;
        const outerRadius = Math.min(width, height)/2;

        const svgCanvus = d3.select('#A-container')
            .append('svg')
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + width / 2 + "," + ( height/2+10 )+ ")");
        
        const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        const myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]
        
        let x = d3.scaleBand()
            .range([ 0, 2 * Math.PI ])
            .domain(myGroups)
            .padding(0.9);
      
        let y = d3.scaleBand()
            .range([ outerRadius, innerRadius ])
            .domain(myVars)
            .padding(0.01);
        
        // Build color scale
        const myColor = d3.scaleLinear()
            .range(["white", "#69b3a2"])
            .domain([1,100])
        
        //Read the data
        d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data) {
        
            svgCanvus.append("g").selectAll("path")
                .data(data)
                .enter()
                .append("path")
                .attr("d", d3.arc()
                    .innerRadius(innerRadius)
                    .outerRadius(function(d) { return y(d.variable) })
                .startAngle(function(d) { return x(d.group) })
                .endAngle(function(d) { return x(d.group) + x.bandwidth(); })
                .padAngle(0.01)
                .padRadius(innerRadius))
                .style("fill", function(d) { return myColor(d.value)} );
                        
        })        
    }

export default CircularHeatmap;
