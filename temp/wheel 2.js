import React, { Component, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import utilStyles from '../styles/utils.module.css'


export function Wheel() {

    const dragInstance = useRef(null);
    const dragTarget = useRef(null);
    const [SDGs, setSDGs] = useState('SDGs');
    const rotationSnap = 360;

    useEffect(()=> {

        gsap.registerPlugin(Draggable);

        
        dragInstance.current = Draggable.create(dragTarget.current, {
            type: "rotation",
            inertia:true,
            throwProps: true,
            maxDuration: 5,
            maxDuration: 5,
            throwResistance: 100,
            overshootTolerance: 1,
            snap: function(endValue){
                return Math.round(endValue / rotationSnap) * rotationSnap
            },
            onDrag: function(){
                let rotation = parseInt(this.rotation % 360 , 10)
                let params = (rotation < 0) ? rotation + 360 : rotation
                let quat = 360 / 17

                if(params < quat * 1){ setSDGs('夥伴關係') }
                else if(params < quat * 2){ setSDGs('和平正義') }
                else if(params < quat * 3){ setSDGs('陸域生態') }
                else if(params < quat * 4){ setSDGs('海洋生態') }
                else if(params < quat * 5){ setSDGs('氣候對策') }
                else if(params < quat * 6){ setSDGs('產消責任') }
                else if(params < quat * 7){ setSDGs('永續城鄉') }
                else if(params < quat * 8){ setSDGs('促進平等') }
                else if(params < quat * 9){ setSDGs('工業創新') }
                else if(params < quat * 10){ setSDGs('良好工作') }
                else if(params < quat * 11){ setSDGs('永續能源') }
                else if(params < quat * 12){ setSDGs('潔淨水源') }
                else if(params < quat * 13){ setSDGs('性別平權') }
                else if(params < quat * 14){ setSDGs('優質教育') }
                else if(params < quat * 15){ setSDGs('健全生活') }
                else if(params < quat * 16){ setSDGs('終結饑餓') }
                else if(params < quat * 17){ setSDGs('終結貧窮') }
                      
            }
            // onDragEnd(){
            //     console.log(this);
            // }
        })
    },[]);

    return (
        <div>
            <h2 className={utilStyles.proj2Title}>
                {SDGs}
            </h2>
            <br/>
            <br/>
            <img className={utilStyles.proj2img} 
                 src='/images/proj2-sdgs.png'
                 height={350}
                 width={350}
                //  style={{
                //  background:'blue',
                //  width:'150px',
                //  height:'150px'
                //     }} 
                ref={dragTarget}>
            </img>
            
        </div>
    )
}