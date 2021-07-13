import React, { useEffect, useState } from "react";
import gsap, { Draggable, InertiaPlugin,  } from "gsap/all";
import SDGsWheel from './img/proj2.png';
import { WheeelLoic } from "./wheelLogic";
import "./styles.css";

gsap.registerPlugin(Draggable, InertiaPlugin);

function Wheel(props) {
    const rotationSnap = 360 / 17;
    const [SDGs, setSDGs] = useState(0);

    // passtoParent
    const handleMain = (data) => {
      props.passfromChild(data)
    }

    useEffect(()=>{
      Draggable.create(".draggable", {
        type: "rotation",
        inertia: true,
        snap: function(endValue){
          return Math.round(endValue / rotationSnap) * rotationSnap
        },
        onDrag: function(onChange){
          const rotation = parseInt(this.rotation % 360 , 10)
          const degree = (rotation < 0) ? rotation + 360 : rotation
          handleMain(WheeelLoic(degree))
        },    
        onThrowUpdate: function(onChange){       
            const rotation = parseInt(this.rotation % 360 , 10)
            const degree = (rotation < 0) ? rotation + 360 : rotation
            handleMain(WheeelLoic(degree))  
            
        }
      });
    },
      []);

    
 
    return (
      <div>
        <img className = "draggable" src={SDGsWheel} alt = "SDGs" height = '550px' width = '550px'>
        </img>
        <div>
          <h3 style={{color: 'white'}}>{SDGs}</h3>
        </div>
      </div>
    );
  }

export default Wheel;

////





// import { gsap } from "gsap";
// import { InertiaPlugin } from "gsap/InertiaPlugin";

// const rotationSnap = 360/18;


// const wheel = $("#wheel");

// const clockwise;
// const lastRotation = 0;
// const overshoot = false;

// // Center it and get the transform properties
// TweenLite.set(wheel, { xPercent: -50, yPercent: -50 });
// const transform = wheel[0]._gsTransform;

// function init()
// {
//     const myDraggable = Draggable.create(wheel, {
//         type: "rotation",
//         throwProps:true,
//         minDuration:5,
//         maxDuration:5,
//         throwResistance:0,
//         overshootTolerance: 1,

//         snap:function(endValue)
//         { 
//         //clockwise = (endValue > transform.rotation);

//         return Math.round(endValue / rotationSnap) * rotationSnap;
//         },
//         /*onThrowUpdate: function() {    

//         // checks if the rotation has reversed
//         if ((transform.rotation < lastRotation && clockwise) ||
//             (transform.rotation > lastRotation && !clockwise)) {

//             // calculate some time difference here to slow it down
//             //const time = (this.tween.duration() - this.tween.time()) * 4;
//             //TweenLite.to(this.tween, time, { progress: 1 }); 

//             // or tween the timeScale to slow it down          
//             //TweenLite.to(this.tween, 1, { timeScale: 0 });
//         }

//         //lastRotation = transform.rotation;      
//         }*/
//     });
// }

// init();