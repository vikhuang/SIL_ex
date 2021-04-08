/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js */ \"https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js\");\n/* harmony import */ var https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var https_unpkg_com_three_0_127_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js */ \"https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var https_unpkg_com_three_0_127_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https_unpkg_com_three_0_127_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.js';\n\n//import  ThreeGeo from 'dist/bundle.js';\n\t\t\t\nconst scene = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Scene();\nconst camera = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\nconst renderer = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\nrenderer.setSize( window.innerWidth, window.innerHeight );\nrenderer.setClearColor(0xffffff, 1.0);\ndocument.body.appendChild( renderer.domElement );\n\n\n//----------------------------------------\n\nconst texture = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load( 'textures/Taiwan trait.png' );\n\nconst geometry = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 60, 100, 0 );\nconst material = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( { map : texture } );\nconst cube = new https_cdn_jsdelivr_net_npm_three_0_127_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material ) ;\nscene.add( cube );\n\n\n// ----------------------------------------\n\n//const curve = new THREE.CubicBezierCurve3(\n//\tnew THREE.Vector3( -10, 0, 0 ),\n//\tnew THREE.Vector3( -5, 15, 0 ),\n//\tnew THREE.Vector3( 20, 15, 0 ),\n//\tnew THREE.Vector3( 10, 0, 0 )\n//);\n\n//const points = curve.getPoints( 50 );\n//const geometry_a = new THREE.BufferGeometry().setFromPoints( points );\n\n// const material_a = new THREE.LineBasicMaterial( { color : 0x000000 } );\n\n// Create the final object to add to the scene\n// const curveObject = new THREE.Line( geometry_a, material_a );\n//scene.add(curveObject);\n\n\n\n// ----------------------------------------\n\nconst controls = new https_unpkg_com_three_0_127_0_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__.OrbitControls( camera, renderer.domElement );\n//controls.update() must be called after any manual changes to the camera's transform\ncamera.position.set( 0, 20, 100 );\ncontrols.update();\ncamera.position.z = 10;\n\nconst animate = function () {\n    requestAnimationFrame( animate );\n\n    //cube.rotation.x += 0.01;\n    //cube.rotation.y += 0.01;\n\n    cube.rotation.z += 0.01;\n    controls.update()\n\n    renderer.render( scene, camera );\n};\n\nanimate();\n\n\n//# sourceURL=webpack://social_innovation_lab_ex/./src/index.js?");

/***/ }),

/***/ "https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js":
false,

/***/ "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;