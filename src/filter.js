import React, { useState } from "react";
import goalImage from './img/global-goals.png'
import "./styles.css";
import { buttons } from "./data";
import TWMap from "./twMap";
import MapImage from "./img/SDGsMap/產消責任.png"
import Wheel from './wheel';
import { MiddleBar, Needle } from './svgElement';
import { FlashCardA , FlashCardB , FlashCardC, FlashCardD ,FlashCardE } from './flashCards';


export default function Filter() {

  const [selectedSDGs, setSelectedSDGs] = useState(0);
  return  ( 
    <>
      <div className = "wrapper">
        <img className = 'goalImage'  src = {goalImage} alt = 'sdgs' 
             height = '100px' weight = '100px'
             onClick = {()=> {setSelectedSDGs(0)}}  />
        
        <InfoBlock infoBlockData = {buttons[selectedSDGs]}/>

        <div className = "mainViz">
          {/* <ObjectA outputFilter = {filtredD3Company} /> */}
          <Wheel passfromChild={setSelectedSDGs} />
        </div>

        <img className = 'mainVizOpa'  src = {goalImage} alt = 'Im button' 
             height = '160px' weight = '160px' 
             onClick = {()=> {setSelectedSDGs(0)}}  />

        <div className = "needle">
          <Needle color={buttons[selectedSDGs]} /> 
        </div>
        <div className = "middleBar">
          <MiddleBar color={buttons[selectedSDGs]} />
        </div>
        
        
        
      </div>
    </>
  );
}



//////////////



export function InfoBlock(props){

  const nameStyle = {
    color: "black",
    fontSize:"44px",
    fontWeight:"700"
  }

  const eNameStyle = {
    whiteSpace: 'pre-wrap',
    fontSize:"20px",
    fontWeight:"300"
  }

  const infoStyle = {
    whiteSpace: 'pre-wrap',
    fontSize: `${props.infoBlockData.name ===  '永續發展目標'  ? '15px' : '20px'} `,
    fontWeight:"300"
  }

  const brStyle = {
    color: 'white',
    fontSize: "24px",
    fontWeight: "500"
  }

  const midInfoStyle = {
    color: 'black',
    fontSize: "65px",
    fontWeight: "500",
    // marginLeft: '18.5%',
    // marginTop: '19%'
  }

  const midSubInfoStyle = {
    color: 'black',
    fontSize: "20px",
    fontWeight: "300",
    display: 'blockInline'
  }

  const midMinInfoStyle = {
    color: 'black',
    fontSize: "20px",
    fontWeight: "300",
    display: 'Inline'
  }

  const districtStyle = {
    // display: 'inlineBlock',
    color: 'black',
    fontSize: "16px",
    fontWeight: "500"
  }

  return(
    <>
      <div className = "subtitle" style = {nameStyle}>
        <div style = {nameStyle}>  {props.infoBlockData.name}  </div>
        <div style = {eNameStyle}> {props.infoBlockData.eName} </div>
        <div style = {brStyle}> . </div>
        <div style = {infoStyle}> {props.infoBlockData.info}</div>
        <br />
        
      </div>
      <img className = "mapImage" src = {MapImage} alt = "map" 
             height='110px' width = '100px'  />
        <div className= "mapInfo">      
                  <div style = {districtStyle}>北區  {props.infoBlockData.district.N} 家</div>
                  <div style = {districtStyle}>中區  {props.infoBlockData.district.M} 家</div>
                  <div style = {districtStyle}>南區  {props.infoBlockData.district.S} 家</div>
                  <div style = {districtStyle}>東區  {props.infoBlockData.district.E} 家</div>
        </div>


      
      
          <div className ="flashCards">
          {props.infoBlockData.name === '永續發展目標' ?
          <>
            <div style = {{color:"black", fontSize:"14px", fontWeight:"500"}}><FlashCardA /></div>
            <div style = {{color:"black", fontSize:"30px", fontWeight:"500"}}><FlashCardB /></div>
            <div style = {{color:"green", fontSize:"10px", fontWeight:"500"}}><FlashCardC /></div>
          </>
            : null }
          </div>
        
          <div className ="flashCardsBottom">
          {props.infoBlockData.name === '永續發展目標' ?
          <>
            <div style = {{color:"black", fontSize:"14px", fontWeight:"500"}}><FlashCardD /></div>
            <div style = {{color:"black", fontSize:"30px", fontWeight:"500"}}><FlashCardE /></div>
          </>
            : null }
          </div>)
      <div className= "middleText" style= {midInfoStyle} >
        {props.infoBlockData.subInfo}
        <div style= {midMinInfoStyle}>  家</div>
        <br />
        <div style= {{color:"white", fontSize:"16px", fontWeight:"500"}}> ＿</div>
        <div style= {midSubInfoStyle}>關注此目標的</div>
        <div style= {midSubInfoStyle}>社創組織</div>
      </div>
    </>
  )
};