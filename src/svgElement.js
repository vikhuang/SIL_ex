import React from "react";


export function Needle(props){
        return(
        <>
            <svg width="75" height="100" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path fill="#fff" 
                      stroke="#000" 
                      opacity="NaN" 
                      d="m350,237.5" 
                      id="svg_3"/>

                <path transform="rotate(-90 50 51.2217)" 
                      stroke="#fff" 
                      fill={`${props.color.color}`}
                      d="m48.39963,15.70535l-33.97175,44.65749l32.77274,-10.89207l34.37141,10.65003l-33.17241,-44.41545l0,0z" id="svg_5"/>
            </g>
            </svg>
        </>
        );
    }

export function MiddleBar(props){
        return(
        <>
            <svg width="60" height="15" xmlns="http://www.w3.org/2000/svg">
            <g>
            
                <path id="svg_3" 
                      d="m350,237.5" o
                      pacity="NaN" 
                      stroke="#000" f
                      ill="#fff"/>

                <rect stroke="#fff" id="svg_2" 
                height="16" width="62" y="-0.5" x="-1" 
                fill={`${props.color.color}`}/>
            </g>

            </svg>
        </>
        );
    }



