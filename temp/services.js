// import _ from "lodash";
// import { buttons, Companies } from "./data";
// import { fullCom } from "./fullData";


// export function getInfo() {
//   const infoList = buttons;
//   return infoList;
// }

// export function filterInfo(SDGs) {
//   const filtredInfo = getInfo().filter(type => type.name === SDGs);
//   return 
// }

// // List Part

// export function getCompany() {
//   const companyList = Companies;
//   return companyList;
// }

// export function filterCompany(comType) {
// //comType is e.target.value -> button value  
//   let filtredCompany = getCompany().filter(type => type.SDGs === comType);
//   return filtredCompany;
// }

// // D3 Part

// export function getD3Company() {
//   const companyList = fullCom;
//   return companyList;
// }

// export function filterD3Company(comType) {
//   let filtredD3MatchCompany = getD3Company().filter(type => type.SDGs === comType && type.No == comType);
//   let companyList = getD3Company();
//   let matchD3Com = _.map(filtredD3MatchCompany, 'ComName');
//   let filtredD3Company = companyList.filter((type)=> matchD3Com.includes(type.ComName))



//   //let filtredD3Company = companyList.filter((type)=> matchD3Com.includes(type.ComName))   // Original
//   return filtredD3Company;
// }



// export function getColor(){
//   const colorList = buttons;
//   return colorList;
// }

// export function filterColor(coType){
//    let getSDGs = getColor().filter(type => type.no === coType);
//    let filtredColor = _.chain(getSDGs).map('Color').value().join()
//    return filtredColor;
// }

// export function filterSDGs(coType){
//   let getSDGs = getColor().filter(type => type.no === coType);
//   let filtredSDGs = _.chain(getSDGs).map('name').value()
//   return filtredSDGs;
// }

// export function filtereSDGs(coType){
//   let getSDGs = getColor().filter(type => type.no === coType);
//   let filtredeSDGs = _.chain(getSDGs).map('eName').value()
//   return filtredeSDGs;
// }

// export function filterSDGsInfo(coType){
//   let getSDGs = getColor().filter(type => type.no === coType);
//   let filtredSDGsInfo = _.chain(getSDGs).map('info').value()
//   return filtredSDGsInfo;
// }

// export function filterComInfo(coType){
//   let getSDGs = getColor().filter(type => type.no === coType);
//   let filtredSDGsInfo = _.chain(getSDGs).map('subInfo').value()
//   return filtredSDGsInfo;
// }

// export const colorList = _.chain(getColor()).map('Color').value()