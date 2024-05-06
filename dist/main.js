/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/checkbox.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/checkbox.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-color: rgb(4, 55, 75);
}

.checkbox-wrapper-19 {
    box-sizing: border-box;
    --background-color: #fff;
    --checkbox-height: 25px;
  }
  
  @-moz-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }
  
  @-webkit-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }
  
  @keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }
  
  @keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
  
    50% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }
  
  @-webkit-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
  
    50% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }
  
  @-moz-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
  
    50% {
      height: 0;
    }
  
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }
  
  .checkbox-wrapper-19 input[type=checkbox] {
    display: none;
  }
  
  .checkbox-wrapper-19 .check-box {
    height: var(--checkbox-height);
    width: var(--checkbox-height);
    background-color: transparent;
    border: calc(var(--checkbox-height) * .1) solid #000;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor: pointer;
  }
  
  .checkbox-wrapper-19 .check-box::before,
    .checkbox-wrapper-19 .check-box::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: calc(var(--checkbox-height) * .2);
    background-color: var(--main-color);
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5;
    -moz-transition: opacity ease 0.5;
    transition: opacity ease 0.5;
  }
  
  .checkbox-wrapper-19 .check-box::before {
    top: calc(var(--checkbox-height) * .72);
    left: calc(var(--checkbox-height) * .41);
    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  
  .checkbox-wrapper-19 .check-box::after {
    top: calc(var(--checkbox-height) * .37);
    left: calc(var(--checkbox-height) * .05);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,
    .checkbox-wrapper-19 .check-box.checked {
    border-color: var(--main-color);
  }
  
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,
    .checkbox-wrapper-19 .check-box.checked::after {
    height: calc(var(--checkbox-height) / 2);
    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    animation: dothabottomcheck-19 0.2s ease 0s forwards;
  }
  
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,
    .checkbox-wrapper-19 .check-box.checked::before {
    height: calc(var(--checkbox-height) * 1.2);
    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
    animation: dothatopcheck-19 0.4s ease 0s forwards;
  }`, "",{"version":3,"sources":["webpack://./src/checkbox.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE;MACE,SAAS;IACX;;IAEA;MACE,SAAS;IACX;;IAEA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,8BAA8B;IAC9B,6BAA6B;IAC7B,6BAA6B;IAC7B,oDAAoD;IACpD,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;IACtB,uCAAuC;IACvC,qCAAqC;IACrC,0CAA0C;IAC1C,kCAAkC;IAClC,eAAe;EACjB;;EAEA;;IAEE,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,wCAAwC;IACxC,mCAAmC;IACnC,qBAAqB;IACrB,+BAA+B;IAC/B,8BAA8B;IAC9B,6BAA6B;IAC7B,kCAAkC;IAClC,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,iCAAiC;IACjC,4BAA4B;EAC9B;;EAEA;IACE,uCAAuC;IACvC,wCAAwC;IACxC,4EAA4E;IAC5E,+BAA+B;IAC/B,8BAA8B;IAC9B,6BAA6B;IAC7B,kCAAkC;IAClC,0BAA0B;EAC5B;;EAEA;IACE,uCAAuC;IACvC,wCAAwC;IACxC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,iCAAiC;IACjC,yBAAyB;EAC3B;;EAEA;;IAEE,+BAA+B;EACjC;;EAEA;;IAEE,wCAAwC;IACxC,yDAAyD;IACzD,uDAAuD;IACvD,4DAA4D;IAC5D,oDAAoD;EACtD;;EAEA;;IAEE,0CAA0C;IAC1C,sDAAsD;IACtD,oDAAoD;IACpD,yDAAyD;IACzD,iDAAiD;EACnD","sourcesContent":[":root {\n    --main-color: rgb(4, 55, 75);\n}\n\n.checkbox-wrapper-19 {\n    box-sizing: border-box;\n    --background-color: #fff;\n    --checkbox-height: 25px;\n  }\n  \n  @-moz-keyframes dothabottomcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) / 2);\n    }\n  }\n  \n  @-webkit-keyframes dothabottomcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) / 2);\n    }\n  }\n  \n  @keyframes dothabottomcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) / 2);\n    }\n  }\n  \n  @keyframes dothatopcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    50% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) * 1.2);\n    }\n  }\n  \n  @-webkit-keyframes dothatopcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    50% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) * 1.2);\n    }\n  }\n  \n  @-moz-keyframes dothatopcheck-19 {\n    0% {\n      height: 0;\n    }\n  \n    50% {\n      height: 0;\n    }\n  \n    100% {\n      height: calc(var(--checkbox-height) * 1.2);\n    }\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox] {\n    display: none;\n  }\n  \n  .checkbox-wrapper-19 .check-box {\n    height: var(--checkbox-height);\n    width: var(--checkbox-height);\n    background-color: transparent;\n    border: calc(var(--checkbox-height) * .1) solid #000;\n    border-radius: 5px;\n    position: relative;\n    display: inline-block;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    -moz-transition: border-color ease 0.2s;\n    -o-transition: border-color ease 0.2s;\n    -webkit-transition: border-color ease 0.2s;\n    transition: border-color ease 0.2s;\n    cursor: pointer;\n  }\n  \n  .checkbox-wrapper-19 .check-box::before,\n    .checkbox-wrapper-19 .check-box::after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    position: absolute;\n    height: 0;\n    width: calc(var(--checkbox-height) * .2);\n    background-color: var(--main-color);\n    display: inline-block;\n    -moz-transform-origin: left top;\n    -ms-transform-origin: left top;\n    -o-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    transform-origin: left top;\n    border-radius: 5px;\n    content: \" \";\n    -webkit-transition: opacity ease 0.5;\n    -moz-transition: opacity ease 0.5;\n    transition: opacity ease 0.5;\n  }\n  \n  .checkbox-wrapper-19 .check-box::before {\n    top: calc(var(--checkbox-height) * .72);\n    left: calc(var(--checkbox-height) * .41);\n    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);\n    -moz-transform: rotate(-135deg);\n    -ms-transform: rotate(-135deg);\n    -o-transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n  }\n  \n  .checkbox-wrapper-19 .check-box::after {\n    top: calc(var(--checkbox-height) * .37);\n    left: calc(var(--checkbox-height) * .05);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,\n    .checkbox-wrapper-19 .check-box.checked {\n    border-color: var(--main-color);\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,\n    .checkbox-wrapper-19 .check-box.checked::after {\n    height: calc(var(--checkbox-height) / 2);\n    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n    animation: dothabottomcheck-19 0.2s ease 0s forwards;\n  }\n  \n  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,\n    .checkbox-wrapper-19 .check-box.checked::before {\n    height: calc(var(--checkbox-height) * 1.2);\n    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;\n    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;\n    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;\n    animation: dothatopcheck-19 0.4s ease 0s forwards;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-color: rgb(0, 65, 119);
}
body {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  margin: 0%;
  color: white;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.sidebar {
  background-color: var(--main-color);
  /*display: none;*/
  padding: 15px;
}

h3 {
  border-bottom: 1px solid #979797;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 5%;
  width: 80%;
}

h4 {
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px;
  width: fit-content;
}

h4:hover {
  background-color: white;
  border: var(--main-color);
  color: var(--main-color);
  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;
}

#newProject {
  border: 2px solid white;
}

#newProject:hover {
  background-color: white;
  border: var(--main-color);
  color: var(--main-color);
  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;
}

.mainContent {
  margin: 5%;
  margin-left: 0%;
  color: #515151;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
}

dialog {
  max-width: 210px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  padding: 20px;
}

label {
  margin-left: 5%;
  color: #515151;
}
input[type="date"] {
  color: #515151;
}
input,
textarea {
  border: none;
  border-bottom: 1px solid #515151;
  margin: 5%;
}
input:focus,
textarea:focus {
  border: none;
  border-bottom: 1px solid #515151;
  outline: none;
}
button {
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--main-color);
  color: white;
  font-weight: bolder;
  max-height: 40px;
  font-size: 18px;
}

.taskData {
  display: flex;
  gap: 5%;
  color: rebeccapurple;
}
.taskDiv {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: var(--main-color);
  margin: 2%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  gap: 20px;
  width: 50%;
}

.checked {
  text-decoration: line-through;
  color: gray;
}
.deleteProject:hover {
  color: var(--main-color);
  background-color: white;
}

.projectLi {
  font-style: oblique;
}
.projectLi:focus {
  color: yellow;
}
.projectTitle {
  background-color: var(--main-color);
  color: white;
  font-size: 2rem;
  font-weight: bolder;
  box-shadow: var(--main-color) 0px 5px 15px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 50%;
}

.Details {
  font-size: 16px;
  border-top: 1px solid #919191;
}

.todoContainer {
  display: flex;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,mDAAmD;AACrD;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,mDAAmD;AACrD;;AAEA;EACE,UAAU;EACV,eAAe;EACf,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,4CAA4C;EAC5C,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,YAAY;EACZ,gCAAgC;EAChC,UAAU;AACZ;AACA;;EAEE,YAAY;EACZ,gCAAgC;EAChC,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,oBAAoB;AACtB;AACA;EACE,4CAA4C;EAC5C,wBAAwB;EACxB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,0CAA0C;EAC1C,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n:root {\n  --main-color: rgb(0, 65, 119);\n}\nbody {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr;\n  margin: 0%;\n  color: white;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.sidebar {\n  background-color: var(--main-color);\n  /*display: none;*/\n  padding: 15px;\n}\n\nh3 {\n  border-bottom: 1px solid #979797;\n  margin-left: 5%;\n  margin-right: 5%;\n  padding-left: 5%;\n  width: 80%;\n}\n\nh4 {\n  border: 2px solid white;\n  border-radius: 20px;\n  padding: 10px;\n  width: fit-content;\n}\n\nh4:hover {\n  background-color: white;\n  border: var(--main-color);\n  color: var(--main-color);\n  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;\n}\n\n#newProject {\n  border: 2px solid white;\n}\n\n#newProject:hover {\n  background-color: white;\n  border: var(--main-color);\n  color: var(--main-color);\n  box-shadow: rgba(255, 255, 255, 0.315) 0px 5px 10px;\n}\n\n.mainContent {\n  margin: 5%;\n  margin-left: 0%;\n  color: #515151;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5%;\n}\n\ndialog {\n  max-width: 210px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 20px;\n  padding: 20px;\n}\n\nlabel {\n  margin-left: 5%;\n  color: #515151;\n}\ninput[type=\"date\"] {\n  color: #515151;\n}\ninput,\ntextarea {\n  border: none;\n  border-bottom: 1px solid #515151;\n  margin: 5%;\n}\ninput:focus,\ntextarea:focus {\n  border: none;\n  border-bottom: 1px solid #515151;\n  outline: none;\n}\nbutton {\n  border: none;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: var(--main-color);\n  color: white;\n  font-weight: bolder;\n  max-height: 40px;\n  font-size: 18px;\n}\n\n.taskData {\n  display: flex;\n  gap: 5%;\n  color: rebeccapurple;\n}\n.taskDiv {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  color: var(--main-color);\n  margin: 2%;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.5em;\n  gap: 20px;\n  width: 50%;\n}\n\n.checked {\n  text-decoration: line-through;\n  color: gray;\n}\n.deleteProject:hover {\n  color: var(--main-color);\n  background-color: white;\n}\n\n.projectLi {\n  font-style: oblique;\n}\n.projectLi:focus {\n  color: yellow;\n}\n.projectTitle {\n  background-color: var(--main-color);\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  box-shadow: var(--main-color) 0px 5px 15px;\n  border-radius: 20px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  width: 50%;\n}\n\n.Details {\n  font-size: 16px;\n  border-top: 1px solid #919191;\n}\n\n.todoContainer {\n  display: flex;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/checkbox.css":
/*!**************************!*\
  !*** ./src/checkbox.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./src/checkbox.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContent: () => (/* binding */ mainContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.css */ "./src/checkbox.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* eslint-disable import/no-cycle */





const mainContent = document.querySelector('.mainContent');
const dialog = document.querySelector('.newTodoDialog');
const newTodo = document.querySelector('.newToDo');
const closeBt = document.querySelector('.cerrar');
const newProjectBt = document.querySelector('#newProject');
const cancel = document.querySelector('.cancel');
const projectDialog = document.querySelector('.projectDialog');
const ul = document.querySelector('ul');
const projectImput = document.querySelector('#NewProjectImput');
const projectForm = document.querySelector('#Project');
const titleImput = document.querySelector('.title');
const descriptionImput = document.querySelector('.description');
const dueDateImput = document.querySelector('.date');

newTodo.onclick = () => {
  dialog.show();
  (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.todayDate)();
};

newProjectBt.onclick = () => {
  projectDialog.show();
};

cancel.onclick = () => {
  projectDialog.close();
};

document.addEventListener('DOMContentLoaded', (e) => {
  const projectProperty = 'project';
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.recoverProjects)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectsArray, ul, projectProperty);

  const defaultProjectName = ' All';
  const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.filterTasks)(
    _projects__WEBPACK_IMPORTED_MODULE_2__.projectsArray,
    defaultProjectName,
    projectProperty,
  );
  if (defaultProject.length === 0) {
    const defaultImput = document.querySelector('#newProject');
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(defaultImput, ul, e);
  }
  const allProjectBt = document.querySelector('.projectLi');
  allProjectBt.click();
});

projectForm.addEventListener('submit', (e) => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectImput, ul, e);
  projectForm.reset();
  projectDialog.close();
});

taskForm.addEventListener('submit', (e) => {
  (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.createNewToDo)(
    titleImput,
    descriptionImput,
    dueDateImput,
    currentProject,
    e,
    mainContent,
  );
  dialog.close();
  taskForm.reset();
});

(0,_toDo__WEBPACK_IMPORTED_MODULE_3__.showTodayTasks)(mainContent);




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteFromLocalStorage: () => (/* binding */ deleteFromLocalStorage),
/* harmony export */   lookData: () => (/* binding */ lookData),
/* harmony export */   setData: () => (/* binding */ setData)
/* harmony export */ });
const setData = (name, object) => {
  localStorage.setItem(name, JSON.stringify(object));
};

const lookData = (object) => {
  const data = localStorage.getItem(object);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

const deleteFromLocalStorage = (
  array,
  propertyName,
  currentProject,
  setName
) => {
  let objectIndex = array.findIndex(
    (obj) => obj[propertyName] === currentProject
  );
  if (objectIndex !== -1) {
    array.splice(objectIndex, 1);
  }
  setData(setName, array);
};



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTasks: () => (/* reexport safe */ _toDo__WEBPACK_IMPORTED_MODULE_2__.addNewTasks),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   dateProperty: () => (/* binding */ dateProperty),
/* harmony export */   deleteTasks: () => (/* binding */ deleteTasks),
/* harmony export */   descriptionProperty: () => (/* binding */ descriptionProperty),
/* harmony export */   filterTasks: () => (/* binding */ filterTasks),
/* harmony export */   newProjectDOM: () => (/* binding */ newProjectDOM),
/* harmony export */   projectAddTask: () => (/* binding */ projectAddTask),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   recoverProjects: () => (/* binding */ recoverProjects),
/* harmony export */   recoverTasks: () => (/* binding */ recoverTasks),
/* harmony export */   titleProperty: () => (/* binding */ titleProperty)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");




let currentProject = ' All';
const titleProperty = 'title';
const descriptionProperty = 'description';
const dateProperty = 'dueDate';

class projects {
  constructor(project) {
    this.project = project;
  }
}

const deleteElements = (mainContent) => {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
};

const projectsArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)('projects') || [];

const filterTasks = (array, currentProject, property) => array.filter((object) => object[property] === currentProject);

const deleteTasks = () => {
  const taskstoDelete = Array.from(document.querySelectorAll('.taskDiv'));
  taskstoDelete.forEach((element) => {
    element.parentNode.removeChild(element);
  });
};

const recoverProjects = (array, parent, propertyName) => {
  array.forEach((element) => {
    newProjectDOM(element, parent, propertyName);
  });
};

const recoverTasks = (
  array,
  titleProperty,
  descriptionProperty,
  dateProperty,
  mainContent,
) => {
  array.forEach((element) => {
    (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.newTodoDOM)(
      element[titleProperty],
      element[descriptionProperty],
      element[dateProperty],
      element,
      mainContent,
    );
  });
};

const newProjectDOM = (input, parent, propertyName) => {
  const newProjectLi = document.createElement('li');

  const libutton = document.createElement('button');
  libutton.textContent = input[propertyName];
  libutton.classList.add('projectLi');

  const deleteProject = document.createElement('button');
  deleteProject.textContent = '🗑️';
  deleteProject.classList.add('deleteProject');

  deleteProject.addEventListener('click', () => {
    const projectProperty = 'project';
    const setName = 'projects';
    const setName2 = 'tasks';
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      projectsArray,
      projectProperty,
      libutton.textContent,
      setName,
    );
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      _toDo__WEBPACK_IMPORTED_MODULE_2__.toDoArray,
      projectProperty,
      libutton.textContent,
      setName2,
    );
    parent.removeChild(newProjectLi);
  });

  let filteredTasks;

  newProjectLi.appendChild(libutton);
  newProjectLi.appendChild(deleteProject);
  parent.appendChild(newProjectLi);
  libutton.click();

  libutton.addEventListener('click', (event) => {
    currentProject = event.target.textContent;
    if (currentProject === 'All') {
      const tasks = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)('tasks');
      deleteTasks();
      projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, titleProperty);
      recoverTasks(
        tasks,
        titleProperty,
        descriptionProperty,
        dateProperty,
        ___WEBPACK_IMPORTED_MODULE_1__.mainContent,
      );
      const projectTitleDiv = document.querySelector('.projectTitle');
      projectTitleDiv.textContent = currentProject;
      newProjectLi.removeChild(deleteProject);
    } else {
      const projectProperty = 'project';
      filteredTasks = filterTasks(_toDo__WEBPACK_IMPORTED_MODULE_2__.toDoArray, currentProject, projectProperty);
      deleteTasks();
      projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, titleProperty);
      recoverTasks(
        filteredTasks,
        titleProperty,
        descriptionProperty,
        dateProperty,
        ___WEBPACK_IMPORTED_MODULE_1__.mainContent,
      );
      const projectTitleDiv = document.querySelector('.projectTitle');
      projectTitleDiv.textContent = currentProject;
    }
  });
};

const projectAddTask = (mainContent, input, propertyName) => {
  deleteElements(mainContent);

  const projectTitle = document.createElement('div');

  if (propertyName === 'value') {
    projectTitle.textContent = `${input.value}`;
  } else if (propertyName === 'textContent') {
    projectTitle.textContent = `${input.textContent}`;
  } else if (propertyName === 'project') {
    projectTitle.textContent = `${input.project}`;
  }

  projectTitle.classList.add('projectTitle');

  const addTask = document.createElement('button');
  addTask.classList.add('newToDo');
  addTask.textContent = '+Add Task';
  addTask.style.display = 'block';

  mainContent.appendChild(projectTitle);
  mainContent.appendChild(addTask);
  addTask.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.addNewTasks)(mainContent);
  });
};

const createNewProject = (input, parent, e) => {
  e.preventDefault();
  if (projectsArray.some((object) => object.project === input.value)) {

  } else {
    const newProject = new projects(input.value);
    const newProperty = 'value';
    projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, newProperty);
    newProjectDOM(input, parent, newProperty);
    projectsArray.push(newProject);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setData)('projects', projectsArray);
  }
};




/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo),
/* harmony export */   addNewTasks: () => (/* binding */ addNewTasks),
/* harmony export */   closeDialogs: () => (/* binding */ closeDialogs),
/* harmony export */   createNewToDo: () => (/* binding */ createNewToDo),
/* harmony export */   newTodoDOM: () => (/* binding */ newTodoDOM),
/* harmony export */   showTodayTasks: () => (/* binding */ showTodayTasks),
/* harmony export */   taskChecked: () => (/* binding */ taskChecked),
/* harmony export */   taskDone: () => (/* binding */ taskDone),
/* harmony export */   toDoArray: () => (/* binding */ toDoArray),
/* harmony export */   todayDate: () => (/* binding */ todayDate)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




let taskChecked;

class ToDo {
  constructor(title, description, dueDate, project, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.completed = completed;
  }
}

const seeDetails = (parent) => {
  const detailsDi = document.createElement('dialog');
  detailsDi.classList.add('Details');

  const title = document.createElement('div');
  title.classList.add('detailsTitle');

  const description = document.createElement('div');
  description.classList.add('descriptionDetails');

  const dueDate = document.createElement('div');
  dueDate.classList.add('duedateDescription');

  const closeDetails = document.createElement('button');
  closeDetails.textContent = 'Close';
  closeDetails.addEventListener('click', () => {
    detailsDi.close();
  });

  detailsDi.appendChild(title);
  detailsDi.appendChild(description);
  detailsDi.appendChild(dueDate);
  detailsDi.appendChild(closeDetails);
  parent.appendChild(detailsDi);

  return detailsDi;
};

let numberForId = 0;
const toDoArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)('tasks') || [];

const newTodoDOM = (titleImput, descriptionImput, dateInput, obj, parent) => {
  numberForId++;

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('taskDiv');

  const container = document.createElement('div');
  container.classList.add('container1');

  const container2 = document.createElement('div');
  container2.classList.add('container2');

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todoContainer');

  const checkboxWrapper = document.createElement('div');
  checkboxWrapper.classList.add('checkbox-wrapper-19');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('id', `${numberForId}cbtest-19`);
  checkbox.setAttribute('type', 'checkbox');

  const taskName = document.createElement('div');
  taskName.textContent = titleImput;

  checkbox.addEventListener('change', () => {
    taskDone(checkbox, taskName, toDoDiv);
  });

  const label = document.createElement('label');
  label.classList.add('check-box');
  label.setAttribute('for', `${numberForId}cbtest-19`);

  const seeDetailsbt = document.createElement('button');
  seeDetailsbt.classList.add('seeDetails');
  seeDetailsbt.textContent = '▼';

  const detailsDialog = seeDetails(toDoDiv);

  seeDetailsbt.addEventListener('click', (event) => {
    const toDoDiv = event.currentTarget.closest('.taskDiv');
    const descriptionDiv = toDoDiv.querySelector('.descriptionDetails');
    const dateDiv = toDoDiv.querySelector('.duedateDescription');

    descriptionDiv.textContent = `Description: ${descriptionImput}`;
    dateDiv.textContent = `Due Date: ${dateInput}`;

    detailsDialog.showModal();
  });

  const deleteTasks = document.createElement('button');
  deleteTasks.textContent = '🗑️';
  deleteTasks.addEventListener('click', () => {
    const titleProperty = 'title';
    const setName = 'tasks';
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      toDoArray,
      titleProperty,
      taskName.textContent,
      setName,
    );
    parent.removeChild(toDoDiv);
  });
  checkboxWrapper.appendChild(checkbox);
  checkboxWrapper.appendChild(label);
  todoContainer.appendChild(checkboxWrapper);
  todoContainer.appendChild(taskName);
  container2.appendChild(seeDetailsbt);
  container2.appendChild(deleteTasks);
  toDoDiv.appendChild(todoContainer);
  toDoDiv.appendChild(container2);

  parent.appendChild(toDoDiv);
};

const createNewToDo = (
  titleImput,
  descriptionImput,
  dueDateImput,
  currentProject,
  e,
  completed,
  parent,
) => {
  e.preventDefault();
  const newToDo = new ToDo(
    titleImput.value,
    descriptionImput.value,
    dueDateImput.value,
    currentProject,
    completed,
  );
  newTodoDOM(
    titleImput.value,
    descriptionImput.value,
    dueDateImput.value,
    false,
    parent,
  );
  toDoArray.push(newToDo);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setData)('tasks', toDoArray);
};

const todayDate = (input) => {
  const currentDate = new Date().toISOString().split('T')[0];
  input.value = currentDate;
};

const showTodayTasks = () => {
  const todayBt = document.querySelector('h4');
  const dateProperty = 'dueDate';
  todayBt.addEventListener('click', () => {
    const currentDate = new Date().toISOString().split('T')[0];
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.deleteTasks)();
    const todayTasks = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.filterTasks)(toDoArray, currentDate, dateProperty);
    console.log(todayTasks);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.recoverTasks)(
      todayTasks,
      _projects__WEBPACK_IMPORTED_MODULE_1__.titleProperty,
      _projects__WEBPACK_IMPORTED_MODULE_1__.descriptionProperty,
      dateProperty,
      ___WEBPACK_IMPORTED_MODULE_2__.mainContent,
    );
    const projectTitleDiv = document.querySelector('.projectTitle');
    projectTitleDiv.textContent = 'Today';
    const addTaskButton = document.querySelector('.newToDo');
    addTaskButton.style.display = 'none';
  });
};

const closeDialogs = (dialogs, forms) => {
  forms.reset();
  dialogs.close();
};

const taskDone = (myCheckbox, taskText, toDoDiv) => {
  if (myCheckbox.checked) {
    taskText.style.textDecoration = 'line-through';
    taskText.style.color = 'gray';
    myCheckbox.classList.add('checked');
    setTimeout(() => {
      toDoDiv.style.display = 'none';
    }, 3000);
    const titleProperty = 'title';
    const setName = 'tasks';
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(
      toDoArray,
      titleProperty,
      taskText.textContent,
      setName,
    );
  } else {
    taskText.style.textDecoration = 'none';
    taskText.style.color = 'rgb(0, 65, 119)';
    myCheckbox.classList.remove('checked');
  }
};

const addNewTasks = (mainContent) => {
  const newTodoDialog = document.createElement('dialog');
  newTodoDialog.classList.add('newTodoDialog');
  newTodoDialog.style.width = '210px';
  newTodoDialog.open = true;

  const createTaskForm = document.createElement('form');
  createTaskForm.action = 'submit';
  createTaskForm.classList.add('createTask');

  createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createNewToDo(
      titleInput,
      descriptionTextarea,
      dateInput,
      _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject,
      e,
      false,
      mainContent,
    );
    closeDialogs(newTodoDialog, createTaskForm);
  });

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.classList.add('title');
  titleInput.required = true;
  titleInput.placeholder = 'Nombre';

  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.name = 'descripción';
  descriptionTextarea.classList.add('description');
  descriptionTextarea.cols = '20';
  descriptionTextarea.rows = '2';
  descriptionTextarea.placeholder = 'Descripción';

  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Due Date:';

  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.classList.add('date');
  dateInput.required = true;
  todayDate(dateInput);

  const addButton = document.createElement('button');
  addButton.type = 'submit';
  addButton.textContent = 'Add';

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cerrar');
  cancelButton.type = 'button';
  cancelButton.textContent = 'Close';

  cancelButton.addEventListener('click', () => {
    newTodoDialog.close();
  });

  dateLabel.appendChild(dateInput);
  createTaskForm.appendChild(titleInput);
  createTaskForm.appendChild(descriptionTextarea);
  createTaskForm.appendChild(document.createElement('br'));
  createTaskForm.appendChild(dateLabel);
  createTaskForm.appendChild(document.createElement('br'));
  createTaskForm.appendChild(addButton);
  createTaskForm.appendChild(cancelButton);
  newTodoDialog.appendChild(createTaskForm);
  mainContent.appendChild(newTodoDialog);
};




/***/ })

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZ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O0FBQ0E7QUFDQTs7QUFhRTs7Ozs7OztVQ3RTRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tib3guY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NoZWNrYm94LmNzcz9hOTZkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1jb2xvcjogcmdiKDQsIDU1LCA3NSk7XG59XG5cbi5jaGVja2JveC13cmFwcGVyLTE5IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWNoZWNrYm94LWhlaWdodDogMjVweDtcbiAgfVxuICBcbiAgQC1tb3ota2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcbiAgICAwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZG90aGF0b3BjaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDUwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtbW96LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcbiAgICAwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XG4gICAgfVxuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveCB7XG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xuICAgIHdpZHRoOiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjEpIHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcbiAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlLFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNzIpO1xuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC40MSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjA1KSB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XG4gICAgdG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMzcpO1xuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94LFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmFmdGVyLFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZDo6YWZ0ZXIge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XG4gICAgLW1vei1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjpiZWZvcmUsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjpiZWZvcmUge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbiAgICAtbW96LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NoZWNrYm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSx3Q0FBd0M7SUFDMUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0Usd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLHdDQUF3QztJQUMxQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsMENBQTBDO0lBQzVDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0Isb0RBQW9EO0lBQ3BELGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyw0RUFBNEU7SUFDNUUsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7O0lBRUUsd0NBQXdDO0lBQ3hDLHlEQUF5RDtJQUN6RCx1REFBdUQ7SUFDdkQsNERBQTREO0lBQzVELG9EQUFvRDtFQUN0RDs7RUFFQTs7SUFFRSwwQ0FBMEM7SUFDMUMsc0RBQXNEO0lBQ3RELG9EQUFvRDtJQUNwRCx5REFBeUQ7SUFDekQsaURBQWlEO0VBQ25EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiByZ2IoNCwgNTUsIDc1KTtcXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXItMTkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIC0tY2hlY2tib3gtaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbiAgXFxuICBALW1vei1rZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XFxuICAgIDAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDUwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDUwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDUwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveCB7XFxuICAgIGhlaWdodDogdmFyKC0tY2hlY2tib3gtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4xKSBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xcbiAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlLFxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlIHtcXG4gICAgdG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNzIpO1xcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNDEpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMDUpIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YWZ0ZXIge1xcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4zNyk7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3gsXFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjphZnRlcixcXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjphZnRlciB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgLW8tYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveDo6YmVmb3JlLFxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcXG4gICAgLW1vei1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtby1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLW1haW4tY29sb3I6IHJnYigwLCA2NSwgMTE5KTtcbn1cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBtYXJnaW46IDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbiAgcGFkZGluZzogMTVweDtcbn1cblxuaDMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB3aWR0aDogODAlO1xufVxuXG5oNCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbmg0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxNSkgMHB4IDVweCAxMHB4O1xufVxuXG4jbmV3UHJvamVjdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4jbmV3UHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMTUpIDBweCA1cHggMTBweDtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICBjb2xvcjogIzUxNTE1MTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1JTtcbn1cblxuZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjNTE1MTUxO1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBjb2xvcjogIzUxNTE1MTtcbn1cbmlucHV0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxO1xuICBtYXJnaW46IDUlO1xufVxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRhc2tEYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1JTtcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XG59XG4udGFza0RpdiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbjogMiU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4uY2hlY2tlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogZ3JheTtcbn1cbi5kZWxldGVQcm9qZWN0OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3RMaSB7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG4ucHJvamVjdExpOmZvY3VzIHtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5wcm9qZWN0VGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tY29sb3IpIDBweCA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5EZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzkxOTE5MTtcbn1cblxuLnRvZG9Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiByZ2IoMCwgNjUsIDExOSk7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgbWFyZ2luOiAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAvKmRpc3BsYXk6IG5vbmU7Ki9cXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbmgzIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5oNCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5oNDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzE1KSAwcHggNXB4IDEwcHg7XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jbmV3UHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzE1KSAwcHggNXB4IDEwcHg7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBtYXJnaW46IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDAlO1xcbiAgY29sb3I6ICM1MTUxNTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWF4LXdpZHRoOiAyMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGNvbG9yOiAjNTE1MTUxO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgY29sb3I6ICM1MTUxNTE7XFxufVxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxO1xcbiAgbWFyZ2luOiA1JTtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGFza0RhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNSU7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG59XFxuLnRhc2tEaXYge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBtYXJnaW46IDIlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5kZWxldGVQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdExpIHtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcbi5wcm9qZWN0TGk6Zm9jdXMge1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuLnByb2plY3RUaXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLWNvbG9yKSAwcHggNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5EZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTE5MTkxO1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGVja2JveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoZWNrYm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jaGVja2JveC5jc3MnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTmV3UHJvamVjdCxcbiAgZmlsdGVyVGFza3MsXG4gIHByb2plY3RzQXJyYXksXG4gIHJlY292ZXJQcm9qZWN0cyxcbn0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdUb0RvLCB0b2RheURhdGUsIHNob3dUb2RheVRhc2tzIH0gZnJvbSAnLi90b0RvJztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKTtcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvRGlhbG9nJyk7XG5jb25zdCBuZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvRG8nKTtcbmNvbnN0IGNsb3NlQnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VycmFyJyk7XG5jb25zdCBuZXdQcm9qZWN0QnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdCcpO1xuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RGlhbG9nJyk7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5jb25zdCBwcm9qZWN0SW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmV3UHJvamVjdEltcHV0Jyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0Jyk7XG5jb25zdCB0aXRsZUltcHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5jb25zdCBkZXNjcmlwdGlvbkltcHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG5jb25zdCBkdWVEYXRlSW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuXG5uZXdUb2RvLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGRpYWxvZy5zaG93KCk7XG4gIHRvZGF5RGF0ZSgpO1xufTtcblxubmV3UHJvamVjdEJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvdygpO1xufTtcblxuY2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0UHJvcGVydHkgPSAncHJvamVjdCc7XG4gIHJlY292ZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5LCB1bCwgcHJvamVjdFByb3BlcnR5KTtcblxuICBjb25zdCBkZWZhdWx0UHJvamVjdE5hbWUgPSAnIEFsbCc7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZmlsdGVyVGFza3MoXG4gICAgcHJvamVjdHNBcnJheSxcbiAgICBkZWZhdWx0UHJvamVjdE5hbWUsXG4gICAgcHJvamVjdFByb3BlcnR5LFxuICApO1xuICBpZiAoZGVmYXVsdFByb2plY3QubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZGVmYXVsdEltcHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3QnKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KGRlZmF1bHRJbXB1dCwgdWwsIGUpO1xuICB9XG4gIGNvbnN0IGFsbFByb2plY3RCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGknKTtcbiAgYWxsUHJvamVjdEJ0LmNsaWNrKCk7XG59KTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0SW1wdXQsIHVsLCBlKTtcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xufSk7XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGNyZWF0ZU5ld1RvRG8oXG4gICAgdGl0bGVJbXB1dCxcbiAgICBkZXNjcmlwdGlvbkltcHV0LFxuICAgIGR1ZURhdGVJbXB1dCxcbiAgICBjdXJyZW50UHJvamVjdCxcbiAgICBlLFxuICAgIG1haW5Db250ZW50LFxuICApO1xuICBkaWFsb2cuY2xvc2UoKTtcbiAgdGFza0Zvcm0ucmVzZXQoKTtcbn0pO1xuXG5zaG93VG9kYXlUYXNrcyhtYWluQ29udGVudCk7XG5cbmV4cG9ydCB7IG1haW5Db250ZW50IH07XG4iLCJjb25zdCBzZXREYXRhID0gKG5hbWUsIG9iamVjdCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbn07XG5cbmNvbnN0IGxvb2tEYXRhID0gKG9iamVjdCkgPT4ge1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob2JqZWN0KTtcbiAgaWYgKGRhdGEpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZSA9IChcbiAgYXJyYXksXG4gIHByb3BlcnR5TmFtZSxcbiAgY3VycmVudFByb2plY3QsXG4gIHNldE5hbWVcbikgPT4ge1xuICBsZXQgb2JqZWN0SW5kZXggPSBhcnJheS5maW5kSW5kZXgoXG4gICAgKG9iaikgPT4gb2JqW3Byb3BlcnR5TmFtZV0gPT09IGN1cnJlbnRQcm9qZWN0XG4gICk7XG4gIGlmIChvYmplY3RJbmRleCAhPT0gLTEpIHtcbiAgICBhcnJheS5zcGxpY2Uob2JqZWN0SW5kZXgsIDEpO1xuICB9XG4gIHNldERhdGEoc2V0TmFtZSwgYXJyYXkpO1xufTtcbmV4cG9ydCB7IHNldERhdGEsIGxvb2tEYXRhLCBkZWxldGVGcm9tTG9jYWxTdG9yYWdlIH07XG4iLCJpbXBvcnQgeyBzZXREYXRhLCBsb29rRGF0YSwgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IG1haW5Db250ZW50IH0gZnJvbSAnLic7XG5pbXBvcnQge1xuICBuZXdUb2RvRE9NLFxuICB0b0RvQXJyYXksXG4gIGFkZE5ld1Rhc2tzLFxufSBmcm9tICcuL3RvRG8nO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSAnIEFsbCc7XG5jb25zdCB0aXRsZVByb3BlcnR5ID0gJ3RpdGxlJztcbmNvbnN0IGRlc2NyaXB0aW9uUHJvcGVydHkgPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgZGF0ZVByb3BlcnR5ID0gJ2R1ZURhdGUnO1xuXG5jbGFzcyBwcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbmNvbnN0IGRlbGV0ZUVsZW1lbnRzID0gKG1haW5Db250ZW50KSA9PiB7XG4gIHdoaWxlIChtYWluQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHByb2plY3RzQXJyYXkgPSBsb29rRGF0YSgncHJvamVjdHMnKSB8fCBbXTtcblxuY29uc3QgZmlsdGVyVGFza3MgPSAoYXJyYXksIGN1cnJlbnRQcm9qZWN0LCBwcm9wZXJ0eSkgPT4gYXJyYXkuZmlsdGVyKChvYmplY3QpID0+IG9iamVjdFtwcm9wZXJ0eV0gPT09IGN1cnJlbnRQcm9qZWN0KTtcblxuY29uc3QgZGVsZXRlVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzdG9EZWxldGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGl2JykpO1xuICB0YXNrc3RvRGVsZXRlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVjb3ZlclByb2plY3RzID0gKGFycmF5LCBwYXJlbnQsIHByb3BlcnR5TmFtZSkgPT4ge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbmV3UHJvamVjdERPTShlbGVtZW50LCBwYXJlbnQsIHByb3BlcnR5TmFtZSk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVjb3ZlclRhc2tzID0gKFxuICBhcnJheSxcbiAgdGl0bGVQcm9wZXJ0eSxcbiAgZGVzY3JpcHRpb25Qcm9wZXJ0eSxcbiAgZGF0ZVByb3BlcnR5LFxuICBtYWluQ29udGVudCxcbikgPT4ge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbmV3VG9kb0RPTShcbiAgICAgIGVsZW1lbnRbdGl0bGVQcm9wZXJ0eV0sXG4gICAgICBlbGVtZW50W2Rlc2NyaXB0aW9uUHJvcGVydHldLFxuICAgICAgZWxlbWVudFtkYXRlUHJvcGVydHldLFxuICAgICAgZWxlbWVudCxcbiAgICAgIG1haW5Db250ZW50LFxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgbmV3UHJvamVjdERPTSA9IChpbnB1dCwgcGFyZW50LCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBsaWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsaWJ1dHRvbi50ZXh0Q29udGVudCA9IGlucHV0W3Byb3BlcnR5TmFtZV07XG4gIGxpYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaScpO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICfwn5eR77iPJztcbiAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0Jyk7XG5cbiAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0UHJvcGVydHkgPSAncHJvamVjdCc7XG4gICAgY29uc3Qgc2V0TmFtZSA9ICdwcm9qZWN0cyc7XG4gICAgY29uc3Qgc2V0TmFtZTIgPSAndGFza3MnO1xuICAgIGRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICBwcm9qZWN0c0FycmF5LFxuICAgICAgcHJvamVjdFByb3BlcnR5LFxuICAgICAgbGlidXR0b24udGV4dENvbnRlbnQsXG4gICAgICBzZXROYW1lLFxuICAgICk7XG4gICAgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZShcbiAgICAgIHRvRG9BcnJheSxcbiAgICAgIHByb2plY3RQcm9wZXJ0eSxcbiAgICAgIGxpYnV0dG9uLnRleHRDb250ZW50LFxuICAgICAgc2V0TmFtZTIsXG4gICAgKTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobmV3UHJvamVjdExpKTtcbiAgfSk7XG5cbiAgbGV0IGZpbHRlcmVkVGFza3M7XG5cbiAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKGxpYnV0dG9uKTtcbiAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdExpKTtcbiAgbGlidXR0b24uY2xpY2soKTtcblxuICBsaWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gJ0FsbCcpIHtcbiAgICAgIGNvbnN0IHRhc2tzID0gbG9va0RhdGEoJ3Rhc2tzJyk7XG4gICAgICBkZWxldGVUYXNrcygpO1xuICAgICAgcHJvamVjdEFkZFRhc2sobWFpbkNvbnRlbnQsIGlucHV0LCB0aXRsZVByb3BlcnR5KTtcbiAgICAgIHJlY292ZXJUYXNrcyhcbiAgICAgICAgdGFza3MsXG4gICAgICAgIHRpdGxlUHJvcGVydHksXG4gICAgICAgIGRlc2NyaXB0aW9uUHJvcGVydHksXG4gICAgICAgIGRhdGVQcm9wZXJ0eSxcbiAgICAgICAgbWFpbkNvbnRlbnQsXG4gICAgICApO1xuICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZScpO1xuICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3Q7XG4gICAgICBuZXdQcm9qZWN0TGkucmVtb3ZlQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2plY3RQcm9wZXJ0eSA9ICdwcm9qZWN0JztcbiAgICAgIGZpbHRlcmVkVGFza3MgPSBmaWx0ZXJUYXNrcyh0b0RvQXJyYXksIGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0UHJvcGVydHkpO1xuICAgICAgZGVsZXRlVGFza3MoKTtcbiAgICAgIHByb2plY3RBZGRUYXNrKG1haW5Db250ZW50LCBpbnB1dCwgdGl0bGVQcm9wZXJ0eSk7XG4gICAgICByZWNvdmVyVGFza3MoXG4gICAgICAgIGZpbHRlcmVkVGFza3MsXG4gICAgICAgIHRpdGxlUHJvcGVydHksXG4gICAgICAgIGRlc2NyaXB0aW9uUHJvcGVydHksXG4gICAgICAgIGRhdGVQcm9wZXJ0eSxcbiAgICAgICAgbWFpbkNvbnRlbnQsXG4gICAgICApO1xuICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZScpO1xuICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3Q7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3RBZGRUYXNrID0gKG1haW5Db250ZW50LCBpbnB1dCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gIGRlbGV0ZUVsZW1lbnRzKG1haW5Db250ZW50KTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpZiAocHJvcGVydHlOYW1lID09PSAndmFsdWUnKSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7aW5wdXQudmFsdWV9YDtcbiAgfSBlbHNlIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dC50ZXh0Q29udGVudH1gO1xuICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7aW5wdXQucHJvamVjdH1gO1xuICB9XG5cbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCduZXdUb0RvJyk7XG4gIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnK0FkZCBUYXNrJztcbiAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Rhc2tzKG1haW5Db250ZW50KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKGlucHV0LCBwYXJlbnQsIGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAocHJvamVjdHNBcnJheS5zb21lKChvYmplY3QpID0+IG9iamVjdC5wcm9qZWN0ID09PSBpbnB1dC52YWx1ZSkpIHtcblxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdHMoaW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gJ3ZhbHVlJztcbiAgICBwcm9qZWN0QWRkVGFzayhtYWluQ29udGVudCwgaW5wdXQsIG5ld1Byb3BlcnR5KTtcbiAgICBuZXdQcm9qZWN0RE9NKGlucHV0LCBwYXJlbnQsIG5ld1Byb3BlcnR5KTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgc2V0RGF0YSgncHJvamVjdHMnLCBwcm9qZWN0c0FycmF5KTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdHMsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIG5ld1Byb2plY3RET00sXG4gIGFkZE5ld1Rhc2tzLFxuICBwcm9qZWN0QWRkVGFzayxcbiAgZGVsZXRlVGFza3MsXG4gIGZpbHRlclRhc2tzLFxuICBwcm9qZWN0c0FycmF5LFxuICByZWNvdmVyUHJvamVjdHMsXG4gIHJlY292ZXJUYXNrcyxcbiAgY3VycmVudFByb2plY3QsXG4gIHRpdGxlUHJvcGVydHksXG4gIGRlc2NyaXB0aW9uUHJvcGVydHksXG4gIGRhdGVQcm9wZXJ0eSxcbn07XG4iLCJpbXBvcnQgeyBzZXREYXRhLCBsb29rRGF0YSwgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7XG4gIGN1cnJlbnRQcm9qZWN0LFxuICBmaWx0ZXJUYXNrcyxcbiAgdGl0bGVQcm9wZXJ0eSxcbiAgZGVzY3JpcHRpb25Qcm9wZXJ0eSxcbiAgcmVjb3ZlclRhc2tzLFxuICBkZWxldGVUYXNrcyxcbn0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBtYWluQ29udGVudCB9IGZyb20gJy4nO1xuXG5sZXQgdGFza0NoZWNrZWQ7XG5cbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIGNvbXBsZXRlZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG59XG5cbmNvbnN0IHNlZURldGFpbHMgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGRldGFpbHNEaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBkZXRhaWxzRGkuY2xhc3NMaXN0LmFkZCgnRGV0YWlscycpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNUaXRsZScpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uRGV0YWlscycpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVkYXRlRGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBjbG9zZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VEZXRhaWxzLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgY2xvc2VEZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRldGFpbHNEaS5jbG9zZSgpO1xuICB9KTtcblxuICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGRldGFpbHNEaS5hcHBlbmRDaGlsZChjbG9zZURldGFpbHMpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsc0RpKTtcblxuICByZXR1cm4gZGV0YWlsc0RpO1xufTtcblxubGV0IG51bWJlckZvcklkID0gMDtcbmNvbnN0IHRvRG9BcnJheSA9IGxvb2tEYXRhKCd0YXNrcycpIHx8IFtdO1xuXG5jb25zdCBuZXdUb2RvRE9NID0gKHRpdGxlSW1wdXQsIGRlc2NyaXB0aW9uSW1wdXQsIGRhdGVJbnB1dCwgb2JqLCBwYXJlbnQpID0+IHtcbiAgbnVtYmVyRm9ySWQrKztcblxuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyMScpO1xuXG4gIGNvbnN0IGNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXIyJyk7XG5cbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcblxuICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXdyYXBwZXItMTknKTtcblxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW1iZXJGb3JJZH1jYnRlc3QtMTlgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0aXRsZUltcHV0O1xuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICB0YXNrRG9uZShjaGVja2JveCwgdGFza05hbWUsIHRvRG9EaXYpO1xuICB9KTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke251bWJlckZvcklkfWNidGVzdC0xOWApO1xuXG4gIGNvbnN0IHNlZURldGFpbHNidCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWVEZXRhaWxzYnQuY2xhc3NMaXN0LmFkZCgnc2VlRGV0YWlscycpO1xuICBzZWVEZXRhaWxzYnQudGV4dENvbnRlbnQgPSAn4pa8JztcblxuICBjb25zdCBkZXRhaWxzRGlhbG9nID0gc2VlRGV0YWlscyh0b0RvRGl2KTtcblxuICBzZWVEZXRhaWxzYnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b0RvRGl2ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFza0RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gdG9Eb0Rpdi5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25EZXRhaWxzJyk7XG4gICAgY29uc3QgZGF0ZURpdiA9IHRvRG9EaXYucXVlcnlTZWxlY3RvcignLmR1ZWRhdGVEZXNjcmlwdGlvbicpO1xuXG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb25JbXB1dH1gO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZGF0ZUlucHV0fWA7XG5cbiAgICBkZXRhaWxzRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVUYXNrcy50ZXh0Q29udGVudCA9ICfwn5eR77iPJztcbiAgZGVsZXRlVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVQcm9wZXJ0eSA9ICd0aXRsZSc7XG4gICAgY29uc3Qgc2V0TmFtZSA9ICd0YXNrcyc7XG4gICAgZGVsZXRlRnJvbUxvY2FsU3RvcmFnZShcbiAgICAgIHRvRG9BcnJheSxcbiAgICAgIHRpdGxlUHJvcGVydHksXG4gICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHNldE5hbWUsXG4gICAgKTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodG9Eb0Rpdik7XG4gIH0pO1xuICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94V3JhcHBlcik7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICBjb250YWluZXIyLmFwcGVuZENoaWxkKHNlZURldGFpbHNidCk7XG4gIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza3MpO1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcjIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1RvRG8gPSAoXG4gIHRpdGxlSW1wdXQsXG4gIGRlc2NyaXB0aW9uSW1wdXQsXG4gIGR1ZURhdGVJbXB1dCxcbiAgY3VycmVudFByb2plY3QsXG4gIGUsXG4gIGNvbXBsZXRlZCxcbiAgcGFyZW50LFxuKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VG9EbyA9IG5ldyBUb0RvKFxuICAgIHRpdGxlSW1wdXQudmFsdWUsXG4gICAgZGVzY3JpcHRpb25JbXB1dC52YWx1ZSxcbiAgICBkdWVEYXRlSW1wdXQudmFsdWUsXG4gICAgY3VycmVudFByb2plY3QsXG4gICAgY29tcGxldGVkLFxuICApO1xuICBuZXdUb2RvRE9NKFxuICAgIHRpdGxlSW1wdXQudmFsdWUsXG4gICAgZGVzY3JpcHRpb25JbXB1dC52YWx1ZSxcbiAgICBkdWVEYXRlSW1wdXQudmFsdWUsXG4gICAgZmFsc2UsXG4gICAgcGFyZW50LFxuICApO1xuICB0b0RvQXJyYXkucHVzaChuZXdUb0RvKTtcbiAgc2V0RGF0YSgndGFza3MnLCB0b0RvQXJyYXkpO1xufTtcblxuY29uc3QgdG9kYXlEYXRlID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGlucHV0LnZhbHVlID0gY3VycmVudERhdGU7XG59O1xuXG5jb25zdCBzaG93VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdG9kYXlCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0Jyk7XG4gIGNvbnN0IGRhdGVQcm9wZXJ0eSA9ICdkdWVEYXRlJztcbiAgdG9kYXlCdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIGRlbGV0ZVRhc2tzKCk7XG4gICAgY29uc3QgdG9kYXlUYXNrcyA9IGZpbHRlclRhc2tzKHRvRG9BcnJheSwgY3VycmVudERhdGUsIGRhdGVQcm9wZXJ0eSk7XG4gICAgY29uc29sZS5sb2codG9kYXlUYXNrcyk7XG4gICAgcmVjb3ZlclRhc2tzKFxuICAgICAgdG9kYXlUYXNrcyxcbiAgICAgIHRpdGxlUHJvcGVydHksXG4gICAgICBkZXNjcmlwdGlvblByb3BlcnR5LFxuICAgICAgZGF0ZVByb3BlcnR5LFxuICAgICAgbWFpbkNvbnRlbnQsXG4gICAgKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvRG8nKTtcbiAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufTtcblxuY29uc3QgY2xvc2VEaWFsb2dzID0gKGRpYWxvZ3MsIGZvcm1zKSA9PiB7XG4gIGZvcm1zLnJlc2V0KCk7XG4gIGRpYWxvZ3MuY2xvc2UoKTtcbn07XG5cbmNvbnN0IHRhc2tEb25lID0gKG15Q2hlY2tib3gsIHRhc2tUZXh0LCB0b0RvRGl2KSA9PiB7XG4gIGlmIChteUNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIHRhc2tUZXh0LnN0eWxlLmNvbG9yID0gJ2dyYXknO1xuICAgIG15Q2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9Eb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDMwMDApO1xuICAgIGNvbnN0IHRpdGxlUHJvcGVydHkgPSAndGl0bGUnO1xuICAgIGNvbnN0IHNldE5hbWUgPSAndGFza3MnO1xuICAgIGRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICB0b0RvQXJyYXksXG4gICAgICB0aXRsZVByb3BlcnR5LFxuICAgICAgdGFza1RleHQudGV4dENvbnRlbnQsXG4gICAgICBzZXROYW1lLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGFza1RleHQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgdGFza1RleHQuc3R5bGUuY29sb3IgPSAncmdiKDAsIDY1LCAxMTkpJztcbiAgICBteUNoZWNrYm94LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTmV3VGFza3MgPSAobWFpbkNvbnRlbnQpID0+IHtcbiAgY29uc3QgbmV3VG9kb0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBuZXdUb2RvRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ25ld1RvZG9EaWFsb2cnKTtcbiAgbmV3VG9kb0RpYWxvZy5zdHlsZS53aWR0aCA9ICcyMTBweCc7XG4gIG5ld1RvZG9EaWFsb2cub3BlbiA9IHRydWU7XG5cbiAgY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFjdGlvbiA9ICdzdWJtaXQnO1xuICBjcmVhdGVUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrJyk7XG5cbiAgY3JlYXRlVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlTmV3VG9EbyhcbiAgICAgIHRpdGxlSW5wdXQsXG4gICAgICBkZXNjcmlwdGlvblRleHRhcmVhLFxuICAgICAgZGF0ZUlucHV0LFxuICAgICAgY3VycmVudFByb2plY3QsXG4gICAgICBlLFxuICAgICAgZmFsc2UsXG4gICAgICBtYWluQ29udGVudCxcbiAgICApO1xuICAgIGNsb3NlRGlhbG9ncyhuZXdUb2RvRGlhbG9nLCBjcmVhdGVUYXNrRm9ybSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnTm9tYnJlJztcblxuICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gJ2Rlc2NyaXBjacOzbic7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gJzIwJztcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gJzInO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXBjacOzbic7XG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRvZGF5RGF0ZShkYXRlSW5wdXQpO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NlcnJhcicpO1xuICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUb2RvRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG4gIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgbmV3VG9kb0RpYWxvZy5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9ybSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG5ld1RvZG9EaWFsb2cpO1xufTtcblxuZXhwb3J0IHtcbiAgVG9EbyxcbiAgc2hvd1RvZGF5VGFza3MsXG4gIGNyZWF0ZU5ld1RvRG8sXG4gIG5ld1RvZG9ET00sXG4gIHRvZGF5RGF0ZSxcbiAgdGFza0RvbmUsXG4gIGNsb3NlRGlhbG9ncyxcbiAgdG9Eb0FycmF5LFxuICBhZGROZXdUYXNrcyxcbiAgdGFza0NoZWNrZWQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=