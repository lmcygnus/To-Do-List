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

#newProject {
    border: 2px solid white;
}

#newProject:hover {
    background-color: white;
    border: var(--main-color);
    color: var(--main-color);
    box-shadow: rgba(255, 255, 255, 0.479) 0px 5px 10px;
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
input[type = "date"] {
    color: #515151;
}
input, textarea {
    border: none;
    border-bottom: 1px solid #515151;
    margin: 5%;
}
input:focus, textarea:focus{
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
    flex-direction: column;
    font-size: 1.5em;
    gap: 20px;
    align-items: center;
    width: 50%;
}
.deleteProject:hover {
    color: var(--main-color);
    background-color: white;
}

.projectLi {
    font-style: oblique;
}
.projectLi:focus {
    color: yellow  ;
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
    display: none;
    border: 1px dashed red;
}

.todoContainer {
    display: flex;
    justify-content: space-evenly;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;IACxB,mDAAmD;AACvD;;AAEA;IACI,UAAU;IACV,eAAe;IACf,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,4CAA4C;IAC5C,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,eAAe;IACf,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,UAAU;AACd;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,oBAAoB;AACxB;AACA;IACI,4CAA4C;IAC5C,wBAAwB;IACxB,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,0CAA0C;IAC1C,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n:root {\n    --main-color: rgb(0, 65, 119);\n}\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    margin: 0%;\n    color: white;\n    min-height: 100vh;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n.sidebar {\n    background-color: var(--main-color);\n    /*display: none;*/\n    padding: 15px;\n}\n\nh3 {\n    border-bottom: 1px solid #979797;\n    margin-left: 5%;\n    margin-right: 5%;\n    padding-left: 5%;\n    width: 80%;\n}\n\n#newProject {\n    border: 2px solid white;\n}\n\n#newProject:hover {\n    background-color: white;\n    border: var(--main-color);\n    color: var(--main-color);\n    box-shadow: rgba(255, 255, 255, 0.479) 0px 5px 10px;\n}\n\n.mainContent {\n    margin: 5%;\n    margin-left: 0%;\n    color: #515151;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5%;\n}\n\ndialog {\n    max-width: 210px;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 20px;\n    padding: 20px;\n}\nlabel {\n    margin-left: 5%;\n    color: #515151;\n}\ninput[type = \"date\"] {\n    color: #515151;\n}\ninput, textarea {\n    border: none;\n    border-bottom: 1px solid #515151;\n    margin: 5%;\n}\ninput:focus, textarea:focus{\n    border: none;\n    border-bottom: 1px solid #515151;\n    outline: none;\n}\nbutton {\n    border: none;\n    padding: 10px;\n    border-radius: 20px;\n    background-color: var(--main-color);\n    color: white;\n    font-weight: bolder;\n    max-height: 40px;\n    font-size: 18px;\n}\n\n.taskData {\n    display: flex;\n    gap: 5%;\n    color: rebeccapurple;\n}\n.taskDiv {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    color: var(--main-color);\n    margin: 2%;\n    padding: 10px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5em;\n    gap: 20px;\n    align-items: center;\n    width: 50%;\n}\n.deleteProject:hover {\n    color: var(--main-color);\n    background-color: white;\n}\n\n.projectLi {\n    font-style: oblique;\n}\n.projectLi:focus {\n    color: yellow  ;\n}\n.projectTitle {\n    background-color: var(--main-color);\n    color: white;\n    font-size: 2rem;\n    font-weight: bolder;\n    box-shadow: var(--main-color) 0px 5px 15px;\n    border-radius: 20px;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    width: 50%;\n}\n\n.Details {\n    display: none;\n    border: 1px dashed red;\n}\n\n.todoContainer {\n    display: flex;\n    justify-content: space-evenly;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   mainContent: () => (/* binding */ mainContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.css */ "./src/checkbox.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");






const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".mainContent");
const dialog = document.querySelector(".newTodoDialog");
const newTodo = document.querySelector(".newToDo");
const closeBt = document.querySelector(".close");
const toggleButton = document.querySelector(".burger");

//New Projects variables

const newProjectBt = document.querySelector("#newProject");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const projectForm = document.querySelector("#Project");
let currentProject = "Default";
const acceptBt = document.querySelector(".accept");

//New to do variables

const taskForm = document.querySelector(".createTask")
const titleImput = document.querySelector(".title");
const descriptionImput = document.querySelector(".description");
const dueDateImput = document.querySelector(".date");


newTodo.onclick = () => {
  dialog.show();
  (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.todayDate)();
}

closeBt.onclick = () => {
  dialog.close();
}

newProjectBt.onclick = () => {
  projectDialog.show();
};

cancel.onclick = () => {
  projectDialog.close();
};

/*document.addEventListener("DOMContentLoaded", (event) => {
  const projectProperty = "project";
  recoverObjects(projectsArray, ul, newProjectDOM, projectProperty);
  const projectName = event.target.textContent;
  projectAddTask(mainContent, projectName);
}); */

projectForm.addEventListener("submit", (e) => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectImput, ul, e);
  currentProject = projectImput.value;
  projectForm.reset();
  projectDialog.close();
});

//toggleButton.addEventListener('click', function () {
  //sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
//});

taskForm.addEventListener("submit", (e) => {
  (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.createNewToDo)(titleImput, descriptionImput, dueDateImput, currentProject, e, mainContent)
  dialog.close();
  taskForm.reset();
});



  


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lookData: () => (/* binding */ lookData),
/* harmony export */   setData: () => (/* binding */ setData)
/* harmony export */ });
const setData = (name, object) => {
    localStorage.setItem( name, JSON.stringify(object));
}

const lookData = (object) => {
    const data = localStorage.getItem(object);
    if(data) {
        return JSON.parse(data);
    }
    else {
        return null;
    }
}


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
/* harmony export */   filterTasks: () => (/* binding */ filterTasks),
/* harmony export */   newProjectDOM: () => (/* binding */ newProjectDOM),
/* harmony export */   projectAddTask: () => (/* binding */ projectAddTask),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   recoverObjects: () => (/* binding */ recoverObjects)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");




class projects {
    constructor(project){
        this.project = project;
    };
};

const deleteElements = (mainContent) => {
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

let projectsArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)("projects") || [];

const filterTasks = (array, currentProject) => {
    return array.filter(function(object) {
        return object.project === currentProject;
    });
};

const deleteTasks = () => {
    const taskstoDelete = Array.from(document.querySelectorAll(".taskDiv"));
    taskstoDelete.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
};

const recoverObjects = (array, parent, functions, propertyName) => {
    array.forEach(element => {
        functions(element[propertyName], parent, propertyName);
    });
};

const newProjectDOM = (input, parent, propertyName) => {
    const newProjectLi = document.createElement("li");

    const libutton = document.createElement("button");
    libutton.textContent = input[propertyName];
    libutton.classList.add("projectLi");

    const newPropertyName = "title"; 

    libutton.addEventListener("click",  (event) => {
        let currentProject = event.target.textContent;
        let filteredTasks = filterTasks(_toDo__WEBPACK_IMPORTED_MODULE_2__.toDoArray, currentProject);
        deleteTasks();
        recoverObjects(filteredTasks, ___WEBPACK_IMPORTED_MODULE_1__.mainContent, _toDo__WEBPACK_IMPORTED_MODULE_2__.newTodoDOM, newPropertyName);
        const projectTitleDiv = document.querySelector(".projectTitle");
        projectTitleDiv.textContent = currentProject;
        }
    );

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "🗑️";
    deleteProject.classList.add("deleteProject");

    newProjectLi.appendChild(libutton);
    newProjectLi.appendChild(deleteProject);
    parent.appendChild(newProjectLi);
};

const projectAddTask = (mainContent, input, propertyName) => {
    deleteElements(mainContent);

    const projectTitle = document.createElement("div");
 
    if (propertyName === 'value') {
        projectTitle.textContent = `${input.value}`;
    } 
    else if (propertyName === 'textContent') {
        projectTitle.textContent = `${input.textContent}`;
    }

    projectTitle.classList.add("projectTitle");

    const addTask = document.createElement("button");
    addTask.classList.add("newToDo");
    addTask.textContent= "+Add Task";

    mainContent.appendChild(projectTitle);
    mainContent.appendChild(addTask);
    addTask.addEventListener("click", () => {
        (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.addNewTasks)(mainContent);
        (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.todayDate)();
    });
};

const createNewProject = (input, parent, e) => {
    e.preventDefault();
    if(projectsArray.some(object => object.project === input.value)) {
        alert("ERROR");
    }
    else {
        const newProject = new projects (
            input.value,
        );
        const newProperty = "value";
        projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, newProperty);
        newProjectDOM(input, parent, newProperty);
        projectsArray.push(newProject);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setData)("projects", projectsArray);
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
/* harmony export */   taskDone: () => (/* binding */ taskDone),
/* harmony export */   toDoArray: () => (/* binding */ toDoArray),
/* harmony export */   todayDate: () => (/* binding */ todayDate)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


class ToDo {
    constructor(title, description, dueDate, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
    };
};

const seeDetails = (parent) => {
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("Details");

    const title = document.createElement("div");
    title.classList.add("detailsTitle");

    const description = document.createElement("div");
    description.classList.add("descriptionDetails");
    
    const dueDate = document.createElement("div");
    dueDate.classList.add("duedateDescription");

    detailsDiv.appendChild(title);
    detailsDiv.appendChild(description);
    detailsDiv.appendChild(dueDate);
    parent.appendChild(detailsDiv);
};

let numberForId = 0;
let toDoArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)("tasks") || [];

const newTodoDOM = (titleImput, descriptionImput, dateInput,  parent) => {
    numberForId ++;

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todoContainer");

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', `${numberForId}cbtest-19`);
    checkbox.setAttribute('type', 'checkbox');

    const taskName = document.createElement('div');
    taskName.textContent = titleImput;

    checkbox.addEventListener("change", () => {
        taskDone(checkbox, taskName);
    })

    const label = document.createElement('label');
    label.classList.add('check-box');
    label.setAttribute('for', `${numberForId}cbtest-19`);

    const seeDetailsbt = document.createElement("button");
    seeDetailsbt.classList.add("seeDetails");
    seeDetailsbt.textContent = "▼";

    seeDetailsbt.addEventListener("click", (event) => {
        const toDoDiv = event.currentTarget.closest('.taskDiv');
        const descriptionDiv = toDoDiv.querySelector(".descriptionDetails");
        const dateDiv = toDoDiv.querySelector(".duedateDescription");

        descriptionDiv.textContent = `Description: ${descriptionImput}`;
        dateDiv.textContent = `Due Date: ${dateInput}`;

        const detailsContainer = toDoDiv.querySelector('.Details');
        detailsContainer.style.display = (detailsContainer.style.display === 'none' || detailsContainer.style.display === '') ? 'block' : 'none';
    });
    
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    todoContainer.appendChild(checkboxWrapper);
    todoContainer.appendChild(taskName);
    todoContainer.appendChild(seeDetailsbt);
    toDoDiv.appendChild(todoContainer);
    seeDetails(toDoDiv);

    parent.appendChild(toDoDiv);
};

const createNewToDo = (titleImput, descriptionImput, dueDateImput, currentProject, e, parent) => {
    e.preventDefault();
    const newToDo = new ToDo(
        titleImput.value,
        descriptionImput.value,
        dueDateImput.value,
        currentProject,
    );
    newTodoDOM(titleImput.value, descriptionImput.value, dueDateImput.value,  parent);
    toDoArray.push(newToDo);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setData)(`tasks`, toDoArray);
};

const todayDate = () => {
    let currentDate = new Date().toISOString().split('T')[0];
    document.querySelector('.date').value = currentDate;
};

const closeDialogs = (dialogs, forms) => {
    forms.reset();
    dialogs.close();
  }

const taskDone = (myCheckbox, taskText) => {
    if (myCheckbox.checked) {
        taskText.style.textDecoration = "line-through"
        taskText.style.color = "gray";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "rgb(0, 65, 119)";
    }
};

const addNewTasks = (mainContent) => {
    const newTodoDialog = document.createElement("dialog");
    newTodoDialog.classList.add("newTodoDialog");
    newTodoDialog.style.width = "210px";
    newTodoDialog.open = true;
  
    const createTaskForm = document.createElement("form");
    createTaskForm.action = "submit";
    createTaskForm.classList.add("createTask");
  
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.classList.add("title");
    titleInput.required = true;
    titleInput.placeholder = "Nombre";
  
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.name = "descripción";
    descriptionTextarea.classList.add("description");
    descriptionTextarea.cols = "20";
    descriptionTextarea.rows = "2";
    descriptionTextarea.placeholder = "Descripción";
  
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due Date:";
  
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("date");
    dateInput.required = true;
  
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Agregar";
    addButton.addEventListener("click", (e) => {
        createNewToDo(titleInput, descriptionTextarea, dateInput, currentProject, e, mainContent);
        closeDialogs(newTodoDialog, createTaskForm);
    });
  
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cerrar");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancelar";
  
    dateLabel.appendChild(dateInput);
    createTaskForm.appendChild(titleInput);
    createTaskForm.appendChild(descriptionTextarea);
    createTaskForm.appendChild(document.createElement("br"));
    createTaskForm.appendChild(dateLabel);
    createTaskForm.appendChild(document.createElement("br"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVks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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQy9LQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tib3guY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NoZWNrYm94LmNzcz9hOTZkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1jb2xvcjogcmdiKDQsIDU1LCA3NSk7XG59XG5cbi5jaGVja2JveC13cmFwcGVyLTE5IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWNoZWNrYm94LWhlaWdodDogMjVweDtcbiAgfVxuICBcbiAgQC1tb3ota2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcbiAgICAwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZG90aGF0b3BjaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDUwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtbW96LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcbiAgICAwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XG4gICAgfVxuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveCB7XG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xuICAgIHdpZHRoOiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjEpIHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcbiAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlLFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNzIpO1xuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC40MSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjA1KSB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XG4gICAgdG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMzcpO1xuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94LFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmFmdGVyLFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZDo6YWZ0ZXIge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XG4gICAgLW1vei1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjpiZWZvcmUsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjpiZWZvcmUge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbiAgICAtbW96LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NoZWNrYm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSx3Q0FBd0M7SUFDMUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0Usd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLHdDQUF3QztJQUMxQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsMENBQTBDO0lBQzVDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0Isb0RBQW9EO0lBQ3BELGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyw0RUFBNEU7SUFDNUUsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7O0lBRUUsd0NBQXdDO0lBQ3hDLHlEQUF5RDtJQUN6RCx1REFBdUQ7SUFDdkQsNERBQTREO0lBQzVELG9EQUFvRDtFQUN0RDs7RUFFQTs7SUFFRSwwQ0FBMEM7SUFDMUMsc0RBQXNEO0lBQ3RELG9EQUFvRDtJQUNwRCx5REFBeUQ7SUFDekQsaURBQWlEO0VBQ25EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiByZ2IoNCwgNTUsIDc1KTtcXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXItMTkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIC0tY2hlY2tib3gtaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbiAgXFxuICBALW1vei1rZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XFxuICAgIDAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDUwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDUwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDUwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveCB7XFxuICAgIGhlaWdodDogdmFyKC0tY2hlY2tib3gtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4xKSBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xcbiAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlLFxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlIHtcXG4gICAgdG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNzIpO1xcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNDEpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMDUpIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YWZ0ZXIge1xcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4zNyk7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3gsXFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjphZnRlcixcXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjphZnRlciB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgLW8tYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveDo6YmVmb3JlLFxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcXG4gICAgLW1vei1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtby1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1jb2xvcjogcmdiKDAsIDY1LCAxMTkpO1xufVxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAvKmRpc3BsYXk6IG5vbmU7Ki9cbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG5oMyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jbmV3UHJvamVjdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbiNuZXdQcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc5KSAwcHggNXB4IDEwcHg7XG59XG5cbi5tYWluQ29udGVudCB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgY29sb3I6ICM1MTUxNTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1JTtcbn1cblxuZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGNvbG9yOiAjNTE1MTUxO1xufVxuaW5wdXRbdHlwZSA9IFwiZGF0ZVwiXSB7XG4gICAgY29sb3I6ICM1MTUxNTE7XG59XG5pbnB1dCwgdGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcbiAgICBtYXJnaW46IDUlO1xufVxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3Vze1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFza0RhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1JTtcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cbi50YXNrRGl2IHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5kZWxldGVQcm9qZWN0OmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0TGkge1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG4ucHJvamVjdExpOmZvY3VzIHtcbiAgICBjb2xvcjogeWVsbG93ICA7XG59XG4ucHJvamVjdFRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1jb2xvcikgMHB4IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XG59XG5cbi50b2RvQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1Qyx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiKDAsIDY1LCAxMTkpO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIC8qZGlzcGxheTogbm9uZTsqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNuZXdQcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3OSkgMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBtYXJnaW46IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogMCU7XFxuICAgIGNvbG9yOiAjNTE1MTUxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgY29sb3I6ICM1MTUxNTE7XFxufVxcbmlucHV0W3R5cGUgPSBcXFwiZGF0ZVxcXCJdIHtcXG4gICAgY29sb3I6ICM1MTUxNTE7XFxufVxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxuICAgIG1hcmdpbjogNSU7XFxufVxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1c3tcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrRGF0YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNSU7XFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbn1cXG4udGFza0RpdiB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuLmRlbGV0ZVByb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdExpIHtcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuLnByb2plY3RMaTpmb2N1cyB7XFxuICAgIGNvbG9yOiB5ZWxsb3cgIDtcXG59XFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1jb2xvcikgMHB4IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLkRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGVja2JveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoZWNrYm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY2hlY2tib3guY3NzXCJcbmltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgbmV3UHJvamVjdERPTSwgcHJvamVjdEFkZFRhc2ssIHByb2plY3RzQXJyYXksIHJlY292ZXJPYmplY3RzfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHtjcmVhdGVOZXdUb0RvLCB0b2RheURhdGUsIHRhc2tEb25lIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHsgbG9va0RhdGEgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VG9kb0RpYWxvZ1wiKTtcbmNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1RvRG9cIik7XG5jb25zdCBjbG9zZUJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xuXG4vL05ldyBQcm9qZWN0cyB2YXJpYWJsZXNcblxuY29uc3QgbmV3UHJvamVjdEJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qZWN0XCIpO1xuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0RGlhbG9nXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBwcm9qZWN0SW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI05ld1Byb2plY3RJbXB1dFwiKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0XCIpO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJEZWZhdWx0XCI7XG5jb25zdCBhY2NlcHRCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjZXB0XCIpO1xuXG4vL05ldyB0byBkbyB2YXJpYWJsZXNcblxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVRhc2tcIilcbmNvbnN0IHRpdGxlSW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbXB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5cblxubmV3VG9kby5vbmNsaWNrID0gKCkgPT4ge1xuICBkaWFsb2cuc2hvdygpO1xuICB0b2RheURhdGUoKTtcbn1cblxuY2xvc2VCdC5vbmNsaWNrID0gKCkgPT4ge1xuICBkaWFsb2cuY2xvc2UoKTtcbn1cblxubmV3UHJvamVjdEJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvdygpO1xufTtcblxuY2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn07XG5cbi8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHByb2plY3RQcm9wZXJ0eSA9IFwicHJvamVjdFwiO1xuICByZWNvdmVyT2JqZWN0cyhwcm9qZWN0c0FycmF5LCB1bCwgbmV3UHJvamVjdERPTSwgcHJvamVjdFByb3BlcnR5KTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gIHByb2plY3RBZGRUYXNrKG1haW5Db250ZW50LCBwcm9qZWN0TmFtZSk7XG59KTsgKi9cblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RJbXB1dCwgdWwsIGUpO1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbXB1dC52YWx1ZTtcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xufSk7XG5cbi8vdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAvL3NpZGViYXIuc3R5bGUuZGlzcGxheSA9IChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICcnKSA/ICdibG9jaycgOiAnbm9uZSc7XG4vL30pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGNyZWF0ZU5ld1RvRG8odGl0bGVJbXB1dCwgZGVzY3JpcHRpb25JbXB1dCwgZHVlRGF0ZUltcHV0LCBjdXJyZW50UHJvamVjdCwgZSwgbWFpbkNvbnRlbnQpXG4gIGRpYWxvZy5jbG9zZSgpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xufSk7XG5cbmV4cG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBtYWluQ29udGVudH1cblxuICBcbiIsImNvbnN0IHNldERhdGEgPSAobmFtZSwgb2JqZWN0KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIG5hbWUsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufVxuXG5jb25zdCBsb29rRGF0YSA9IChvYmplY3QpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob2JqZWN0KTtcbiAgICBpZihkYXRhKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IHtzZXREYXRhLCBsb29rRGF0YX07IiwiaW1wb3J0IHsgc2V0RGF0YSwgbG9va0RhdGEgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBtYWluQ29udGVudCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUb0RvLCBuZXdUb2RvRE9NLCB0b2RheURhdGUsIGNsb3NlRGlhbG9ncywgdG9Eb0FycmF5LCBhZGROZXdUYXNrcyB9IGZyb20gXCIuL3RvRG9cIjtcblxuY2xhc3MgcHJvamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH07XG59O1xuXG5jb25zdCBkZWxldGVFbGVtZW50cyA9IChtYWluQ29udGVudCkgPT4ge1xuICAgIHdoaWxlIChtYWluQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubGV0IHByb2plY3RzQXJyYXkgPSBsb29rRGF0YShcInByb2plY3RzXCIpIHx8IFtdO1xuXG5jb25zdCBmaWx0ZXJUYXNrcyA9IChhcnJheSwgY3VycmVudFByb2plY3QpID0+IHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0LnByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3N0b0RlbGV0ZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrRGl2XCIpKTtcbiAgICB0YXNrc3RvRGVsZXRlLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCByZWNvdmVyT2JqZWN0cyA9IChhcnJheSwgcGFyZW50LCBmdW5jdGlvbnMsIHByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGZ1bmN0aW9ucyhlbGVtZW50W3Byb3BlcnR5TmFtZV0sIHBhcmVudCwgcHJvcGVydHlOYW1lKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IG5ld1Byb2plY3RET00gPSAoaW5wdXQsIHBhcmVudCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgbGlidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxpYnV0dG9uLnRleHRDb250ZW50ID0gaW5wdXRbcHJvcGVydHlOYW1lXTtcbiAgICBsaWJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExpXCIpO1xuXG4gICAgY29uc3QgbmV3UHJvcGVydHlOYW1lID0gXCJ0aXRsZVwiOyBcblxuICAgIGxpYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IGZpbHRlcmVkVGFza3MgPSBmaWx0ZXJUYXNrcyh0b0RvQXJyYXksIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgZGVsZXRlVGFza3MoKTtcbiAgICAgICAgcmVjb3Zlck9iamVjdHMoZmlsdGVyZWRUYXNrcywgbWFpbkNvbnRlbnQsIG5ld1RvZG9ET00sIG5ld1Byb3BlcnR5TmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdDtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCLwn5eR77iPXCI7XG4gICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlUHJvamVjdFwiKTtcblxuICAgIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChsaWJ1dHRvbik7XG4gICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TGkpO1xufTtcblxuY29uc3QgcHJvamVjdEFkZFRhc2sgPSAobWFpbkNvbnRlbnQsIGlucHV0LCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBkZWxldGVFbGVtZW50cyhtYWluQ29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuIFxuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7aW5wdXQudmFsdWV9YDtcbiAgICB9IFxuICAgIGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3RleHRDb250ZW50Jykge1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dC50ZXh0Q29udGVudH1gO1xuICAgIH1cblxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwibmV3VG9Eb1wiKTtcbiAgICBhZGRUYXNrLnRleHRDb250ZW50PSBcIitBZGQgVGFza1wiO1xuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZE5ld1Rhc2tzKG1haW5Db250ZW50KTtcbiAgICAgICAgdG9kYXlEYXRlKCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKGlucHV0LCBwYXJlbnQsIGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYocHJvamVjdHNBcnJheS5zb21lKG9iamVjdCA9PiBvYmplY3QucHJvamVjdCA9PT0gaW5wdXQudmFsdWUpKSB7XG4gICAgICAgIGFsZXJ0KFwiRVJST1JcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3RzIChcbiAgICAgICAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IFwidmFsdWVcIjtcbiAgICAgICAgcHJvamVjdEFkZFRhc2sobWFpbkNvbnRlbnQsIGlucHV0LCBuZXdQcm9wZXJ0eSk7XG4gICAgICAgIG5ld1Byb2plY3RET00oaW5wdXQsIHBhcmVudCwgbmV3UHJvcGVydHkpO1xuICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHNldERhdGEoXCJwcm9qZWN0c1wiLCBwcm9qZWN0c0FycmF5KTtcbiAgICB9XG59OyBcbiAgICBcbmV4cG9ydCB7cHJvamVjdHMsIGNyZWF0ZU5ld1Byb2plY3QsIG5ld1Byb2plY3RET00sIGFkZE5ld1Rhc2tzLCBwcm9qZWN0QWRkVGFzaywgZmlsdGVyVGFza3MsIHByb2plY3RzQXJyYXksIHJlY292ZXJPYmplY3RzfTtcblxuIiwiaW1wb3J0IHsgc2V0RGF0YSxsb29rRGF0YSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfTtcbn07XG5cbmNvbnN0IHNlZURldGFpbHMgPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKFwiRGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1RpdGxlXCIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbkRldGFpbHNcIik7XG4gICAgXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlZGF0ZURlc2NyaXB0aW9uXCIpO1xuXG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG59O1xuXG5sZXQgbnVtYmVyRm9ySWQgPSAwO1xubGV0IHRvRG9BcnJheSA9IGxvb2tEYXRhKFwidGFza3NcIikgfHwgW107XG5cbmNvbnN0IG5ld1RvZG9ET00gPSAodGl0bGVJbXB1dCwgZGVzY3JpcHRpb25JbXB1dCwgZGF0ZUlucHV0LCAgcGFyZW50KSA9PiB7XG4gICAgbnVtYmVyRm9ySWQgKys7XG5cbiAgICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGl2XCIpO1xuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kb0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC13cmFwcGVyLTE5Jyk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGAke251bWJlckZvcklkfWNidGVzdC0xOWApO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlSW1wdXQ7XG5cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgdGFza0RvbmUoY2hlY2tib3gsIHRhc2tOYW1lKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7bnVtYmVyRm9ySWR9Y2J0ZXN0LTE5YCk7XG5cbiAgICBjb25zdCBzZWVEZXRhaWxzYnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNlZURldGFpbHNidC5jbGFzc0xpc3QuYWRkKFwic2VlRGV0YWlsc1wiKTtcbiAgICBzZWVEZXRhaWxzYnQudGV4dENvbnRlbnQgPSBcIuKWvFwiO1xuXG4gICAgc2VlRGV0YWlsc2J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb0RpdiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2tEaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSB0b0RvRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25EZXRhaWxzXCIpO1xuICAgICAgICBjb25zdCBkYXRlRGl2ID0gdG9Eb0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmR1ZWRhdGVEZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbkltcHV0fWA7XG4gICAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZGF0ZUlucHV0fWA7XG5cbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IHRvRG9EaXYucXVlcnlTZWxlY3RvcignLkRldGFpbHMnKTtcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gKGRldGFpbHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGRldGFpbHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJycpID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcbiAgICBcbiAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VlRGV0YWlsc2J0KTtcbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIHNlZURldGFpbHModG9Eb0Rpdik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUb0RvID0gKHRpdGxlSW1wdXQsIGRlc2NyaXB0aW9uSW1wdXQsIGR1ZURhdGVJbXB1dCwgY3VycmVudFByb2plY3QsIGUsIHBhcmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8oXG4gICAgICAgIHRpdGxlSW1wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uSW1wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGVJbXB1dC52YWx1ZSxcbiAgICAgICAgY3VycmVudFByb2plY3QsXG4gICAgKTtcbiAgICBuZXdUb2RvRE9NKHRpdGxlSW1wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW1wdXQudmFsdWUsIGR1ZURhdGVJbXB1dC52YWx1ZSwgIHBhcmVudCk7XG4gICAgdG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgc2V0RGF0YShgdGFza3NgLCB0b0RvQXJyYXkpO1xufTtcblxuY29uc3QgdG9kYXlEYXRlID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJykudmFsdWUgPSBjdXJyZW50RGF0ZTtcbn07XG5cbmNvbnN0IGNsb3NlRGlhbG9ncyA9IChkaWFsb2dzLCBmb3JtcykgPT4ge1xuICAgIGZvcm1zLnJlc2V0KCk7XG4gICAgZGlhbG9ncy5jbG9zZSgpO1xuICB9XG5cbmNvbnN0IHRhc2tEb25lID0gKG15Q2hlY2tib3gsIHRhc2tUZXh0KSA9PiB7XG4gICAgaWYgKG15Q2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgdGFza1RleHQuc3R5bGUuY29sb3IgPSBcImdyYXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICB0YXNrVGV4dC5zdHlsZS5jb2xvciA9IFwicmdiKDAsIDY1LCAxMTkpXCI7XG4gICAgfVxufTtcblxuY29uc3QgYWRkTmV3VGFza3MgPSAobWFpbkNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBuZXdUb2RvRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJuZXdUb2RvRGlhbG9nXCIpO1xuICAgIG5ld1RvZG9EaWFsb2cuc3R5bGUud2lkdGggPSBcIjIxMHB4XCI7XG4gICAgbmV3VG9kb0RpYWxvZy5vcGVuID0gdHJ1ZTtcbiAgXG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjcmVhdGVUYXNrRm9ybS5hY3Rpb24gPSBcInN1Ym1pdFwiO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVUYXNrXCIpO1xuICBcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5vbWJyZVwiO1xuICBcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcGNpw7NuXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gXCIyMFwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IFwiMlwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXBjacOzblwiO1xuICBcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIFxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWdyZWdhclwiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY3JlYXRlTmV3VG9Ebyh0aXRsZUlucHV0LCBkZXNjcmlwdGlvblRleHRhcmVhLCBkYXRlSW5wdXQsIGN1cnJlbnRQcm9qZWN0LCBlLCBtYWluQ29udGVudCk7XG4gICAgICAgIGNsb3NlRGlhbG9ncyhuZXdUb2RvRGlhbG9nLCBjcmVhdGVUYXNrRm9ybSk7XG4gICAgfSk7XG4gIFxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZXJyYXJcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsYXJcIjtcbiAgXG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG4gICAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICBcbiAgICBuZXdUb2RvRGlhbG9nLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvRGlhbG9nKTtcbiAgfTsgXG5cbmV4cG9ydCB7VG9EbywgY3JlYXRlTmV3VG9EbywgbmV3VG9kb0RPTSwgdG9kYXlEYXRlLCB0YXNrRG9uZSwgY2xvc2VEaWFsb2dzLCB0b0RvQXJyYXksIGFkZE5ld1Rhc2tzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==