// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import { buttons } from "./data";
// import { getCompany, filterCompany, getD3Company, filterD3Company, getColor, filterSDGs, filtereSDGs, filterSDGsInfo, filterComInfo, colorList } from "./services";
// import ObjectA  from './A';
// import Wheel from './wheel';
// import { FlashCardA , FlashCardB , FlashCardC, FlashCardD ,FlashCardE } from './flashCards';


// export default function Filter() {
//   const [filtredSDGs, setFiltredSDGs] = useState("永續發展目標");
//   const [filtredeSDGs, setFiltredeSDGs] = useState("Sustainable Development Goals, SDGs");
//   const [filtredSDGsInfo, setFiltredSDGsInfo] = useState("基於積極實踐平等與人權，聯合國規劃出17項永續發展目標及169項追蹤指標，作為2030前成員國跨國合作的指導原則。在台灣，社會創新組織登入家數超過600家，擁有91家產業夥伴，社會創新實驗中心更舉辦超過5880場活動。");
//   const [filtredComInfo, setFiltredComInfo] = useState("637");

//   const [filtredCompany, setFiltredCompany] = useState(null);
//   const [filtredD3Company,setFiltredD3Company] = useState(null);
//   const [filtredColor, setFiltredColor] = useState("white");

//   const [ selectedSDGs, setSelectedSDGs] = useState(0);

  
//   useEffect(() => {
//     setFiltredColor(getColor());
//   }, []);

//   useEffect(() => {
//     setFiltredCompany(getCompany());
//   }, []);

//   useEffect(() => {
//     setFiltredD3Company(getD3Company());
//   }, []);

  

//   function handleSDGs(e){
//     let typeSDGs = e.target.value;
//     setFiltredSDGs(filterSDGs(typeSDGs));
//   }

//   function handleeSDGs(e){
//     let typeeSDGs = e.target.value;
//     setFiltredeSDGs(filtereSDGs(selectedSDGs));
//   }

//   function handleSDGsInfo(e){
//     let typeSDGsInfo = e.target.value;
//     setFiltredSDGsInfo(filterSDGsInfo(selectedSDGs));
//   }

//   function handleComInfo(e){
//     let typeComInfo = e.target.value;
//     setFiltredComInfo(filterComInfo(selectedSDGs))
    
//   }

//   function handleCompany(e) {
//     let typeCompany = e.target.value;
//     typeCompany !== "all"
//       ? setFiltredCompany(filterCompany(typeCompany))
//       : setFiltredCompany(getCompany());
//       // console.log({typeCompany}); 
//   }
  
//   function handleD3(e) {
//     let typeD3Company = e.target.value;
//     typeD3Company !== "all"
//       ? setFiltredD3Company(filterD3Company(typeD3Company))
//       : setFiltredD3Company(getD3Company());
//      console.log({outputFilter}); 
//   }
  
 
//   const handleClick = (e) =>{
//     handleSDGs(e);
//     handleeSDGs(e);
//     handleSDGsInfo(e);
//     handleComInfo(e);
//     handleCompany(e);
//     handleD3(e);
//     // handleClickColor(e);
//   }

//   const outputFilter = filtredD3Company;

// // -------------------------

//   const overflowButton =
//   {
//     overflowY: 'scroll',
//     width:'90%',
    
//   }
  

//   const subTitleStyle = {
//     color: "white",
//     fontSize:"32px",
//     fontWeight:"700"
//   }

//   const subEnTitleStyle = {
//     color: "white",
//     fontSize:"16px",
//     fontWeight:"300"
//   }

//   const comInfoStyle = {
//     color: "white",
//     fontSize:"16px",
//     fontWeight:"300"
//   }

//   const infoStyle = {
//     color: "white",
//     fontSize:"14px",
//     fontWeight:"300"
//   }

//   // -------------------------



//   return (
//     <div className = "wrapper">

//       {/* <div className = "title" style = {titleStyle} onClick = { ()=>{'/'}} >SDGs</div> */}

//       <div className = "subtitle" style = {subTitleStyle}>
//         <div>1{filtredSDGs}</div>
//         <div style = {subEnTitleStyle}> 2{filtredeSDGs}</div>
//         <p></p>
//         <div style = {infoStyle}> {filtredSDGsInfo}</div>
//         <p></p>
//         <p style = {{fontWeight:"100"}}>/</p>
//         <div>
//           <div style = {{height:"25px",fontSize:"16px", fontWeight:"300"}}>關注此目標的社創組織</div>
//           <div style = {{fontSize:"24px", fontWeight:"500"}}>{filtredComInfo} 家</div>
//         </div>
//         <div>
//           <div style = {{fontSize:'30px', color:'black'}}>/</div>
//         </div>
//         <div className ="flashCards">
//           <div style = {{color:"white", fontSize:"16px", fontWeight:"500"}}><FlashCardA /></div>
//           <div style = {{color:"white", fontSize:"36px", fontWeight:"500"}}><FlashCardB /></div>
//           <div style = {{color:"green", fontSize:"14px", fontWeight:"500"}}><FlashCardC /></div>
//         </div>
//         <div>
//           <div style = {{fontSize:'15px', color:'black'}}>/</div>
//         </div>

//         <div className ="flashCardsBottom">
//           <div style = {{color:"white", fontSize:"16px", fontWeight:"500"}}><FlashCardD /></div>
//           <div style = {{color:"white", fontSize:"36px", fontWeight:"500"}}><FlashCardE /></div>
//         </div>
//       </div>

//       <div className = "devBar"  style = {overflowButton}>
//       {buttons &&
//         buttons.map((type,i) => (
          
//               <button 
//                 key = {type.index} 
//                 value = {type.no} 
//                 onClick = {handleClick} 
//                 style = {{
//                   backgroundColor:colorList[i],
//                   opacity:"100%",
//                   border: "none",
//                   color: "black",
//                   padding: "3px 10px", 
//                   textAlign: "center",
//                   textDecoration: "none",
//                   // height:'800px',
//                   fontSize: "10px",
//                   fontFamily:"Noto Sans TC, sans-serif",
//                   fontWeight:"700",
//                   float:"right",
//                   }}>
//               {type.name}
//               </button>
          
//         ))}
//       </div>

//       <div className = "objectB" >
        
//       </div>
//       <div className = "mainViz">
//         {/* <ObjectA outputFilter = {filtredD3Company} /> */}
//         <Wheel passfromChild={setSelectedSDGs} />

//       </div>
//       <div style= {{color:'white'}}>
//         HERE {selectedSDGs}
//       </div>
//     </div>
//   );
// }


