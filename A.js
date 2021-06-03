// import React from 'react';
// import * as d3 from 'd3';
// import { testdata } from './data';
// import { ComName } from './ComName';

// class ObjectA extends React.Component {
//     constructor(props){
//         super(props);
//         this.myRef = React.createRef();
//         this.dataset = testdata;
//     }
    
//     componentDidMount(){
//         const margin = {top:30, right:30, bottom:30, left:30};
//         const width = 450;
//         const height = 450;
//         const innerRadius = 80;
//         const outerRadius = Math.min(width, height)/2;

//         const svgCanvus = d3.select(this.myRef.current)
//             .append('svg')
//                 .attr("width", width + margin.left + margin.right)
//                 .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//                 .attr("transform", "translate(" + width / 2 + "," + ( height/2+10 )+ ")");
        
//         const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
//         const myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]
        
//         let x = d3.scaleBand()
//             .range([ 0, 2 * Math.PI ])
//             .domain(myGroups)
//             .padding(0.5);
      
//         let y = d3.scaleBand()
//             .range([ outerRadius, innerRadius ])
//             .domain(myVars)
//             .padding(0.01);
        
//         // Build color scale
//         const myColor = d3.scaleLinear()
//             .range(["white","#69b3a2"])
//             .domain([1,17])

//         // const myColor = SDGsColor.Color;

//         //Read the data
        
//             svgCanvus.append("g").selectAll("path")
//                 .data(this.dataset)
//                 .enter()
//                 .append("path")
//                 .attr("d", d3.arc()
//                     .innerRadius(innerRadius)
//                     .outerRadius(function(d) { return y(d.variable) })
//                 .startAngle(function(d) { return x(d.group) })
//                 .endAngle(function(d) { return x(d.group) + x.bandwidth(); })
//                 .padAngle(0.01)
//                 .padRadius(innerRadius))
//                 .style("fill", function(d) { 
//                     if (d.value === 30) {return "red"}
//                     else {return myColor(d.value)}
//                 } 
// );
                        
//         }
                    
//         render(){
//             return(
//                 <div ref ={this.myRef}></div>
//             );
//         }
    
       

// //     return (

// //     <div className="App">
// //       <h1>Make sure this DAMN thing could happen</h1>
// //       <div id="A-container"></div>
// //       <div>
// //         <button
// //             onClick={() => {
// //             setValue(0);
// //             console.log('onClick sets value to 0');
// //             }}
// //         >
// //             Update Data
// //         </button>
// //         <div>{value}</div>
// //       </div>

// //     </div>
// //   );
// }
// export default ObjectA;
