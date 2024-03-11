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
    justify-content: space-between;
    font-size: 1.5em;
    gap: 20px;
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;IACxB,mDAAmD;AACvD;;AAEA;IACI,UAAU;IACV,eAAe;IACf,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,4CAA4C;IAC5C,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,eAAe;IACf,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,UAAU;AACd;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,oBAAoB;AACxB;AACA;IACI,4CAA4C;IAC5C,wBAAwB;IACxB,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;AACA;IACI,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,0CAA0C;IAC1C,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,UAAU;AACd;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,SAAS;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n:root {\n    --main-color: rgb(0, 65, 119);\n}\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    margin: 0%;\n    color: white;\n    min-height: 100vh;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n.sidebar {\n    background-color: var(--main-color);\n    /*display: none;*/\n    padding: 15px;\n}\n\nh3 {\n    border-bottom: 1px solid #979797;\n    margin-left: 5%;\n    margin-right: 5%;\n    padding-left: 5%;\n    width: 80%;\n}\n\n#newProject {\n    border: 2px solid white;\n}\n\n#newProject:hover {\n    background-color: white;\n    border: var(--main-color);\n    color: var(--main-color);\n    box-shadow: rgba(255, 255, 255, 0.479) 0px 5px 10px;\n}\n\n.mainContent {\n    margin: 5%;\n    margin-left: 0%;\n    color: #515151;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5%;\n}\n\ndialog {\n    max-width: 210px;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 20px;\n    padding: 20px;\n}\nlabel {\n    margin-left: 5%;\n    color: #515151;\n}\ninput[type = \"date\"] {\n    color: #515151;\n}\ninput, textarea {\n    border: none;\n    border-bottom: 1px solid #515151;\n    margin: 5%;\n}\ninput:focus, textarea:focus{\n    border: none;\n    border-bottom: 1px solid #515151;\n    outline: none;\n}\nbutton {\n    border: none;\n    padding: 10px;\n    border-radius: 20px;\n    background-color: var(--main-color);\n    color: white;\n    font-weight: bolder;\n    max-height: 40px;\n    font-size: 18px;\n}\n\n.taskData {\n    display: flex;\n    gap: 5%;\n    color: rebeccapurple;\n}\n.taskDiv {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    color: var(--main-color);\n    margin: 2%;\n    padding: 10px;\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.5em;\n    gap: 20px;\n    width: 50%;\n}\n.deleteProject:hover {\n    color: var(--main-color);\n    background-color: white;\n}\n\n.projectLi {\n    font-style: oblique;\n}\n.projectLi:focus {\n    color: yellow  ;\n}\n.projectTitle {\n    background-color: var(--main-color);\n    color: white;\n    font-size: 2rem;\n    font-weight: bolder;\n    box-shadow: var(--main-color) 0px 5px 15px;\n    border-radius: 20px;\n    padding: 10px;\n    display: flex;\n    width: 50%;\n}\n\n.Details {\n    font-size: 16px;\n    border-top: 1px solid #919191;\n}\n\n.todoContainer {\n    display: flex;\n    gap: 10px;\n}\n\n"],"sourceRoot":""}]);
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

document.addEventListener("DOMContentLoaded", (e) => {
  const projectProperty = "project";
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.recoverProjects)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectsArray, ul, projectProperty);

  const defaultProjectName = " Default";
  const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.filterTasks)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectsArray, defaultProjectName);
  console.log(defaultProject);
  if(defaultProject.length === 0) {
    const defaultImput = document.querySelector("#newProject");
    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(defaultImput, ul, e);
  }
});

projectForm.addEventListener("submit", (e) => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectImput, ul, e);
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
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   filterTasks: () => (/* binding */ filterTasks),
/* harmony export */   newProjectDOM: () => (/* binding */ newProjectDOM),
/* harmony export */   projectAddTask: () => (/* binding */ projectAddTask),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   recoverProjects: () => (/* binding */ recoverProjects)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");




let currentProject = "Default";

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

const recoverProjects = (array, parent, propertyName) => {
    array.forEach(element => {
        newProjectDOM(element, parent, propertyName);
    });
};

const recoverTasks = (array, titleProperty, descriptionProperty, dateProperty, mainContent) => {
    array.forEach(element => {
        (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.newTodoDOM)(element[titleProperty], element[descriptionProperty], element[dateProperty], mainContent);
    });
}

const newProjectDOM = (input, parent, propertyName) => {
    const newProjectLi = document.createElement("li");

    const libutton = document.createElement("button");
    libutton.textContent = input[propertyName];
    libutton.classList.add("projectLi");

    const titleProperty = "title"; 
    const descriptionProperty = "description";
    const dateProperty = "dueDate";

    libutton.addEventListener("click",  (event) => {
        currentProject = event.target.textContent;
        let filteredTasks = filterTasks(_toDo__WEBPACK_IMPORTED_MODULE_2__.toDoArray, currentProject);
        deleteTasks();
        projectAddTask(___WEBPACK_IMPORTED_MODULE_1__.mainContent, input, titleProperty);
        recoverTasks(filteredTasks, titleProperty, descriptionProperty, dateProperty, ___WEBPACK_IMPORTED_MODULE_1__.mainContent)
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
    else if (propertyName === "project") {
        projectTitle.textContent = `${input[propertyName]}`
    }

    projectTitle.classList.add("projectTitle");

    const addTask = document.createElement("button");
    addTask.classList.add("newToDo");
    addTask.textContent= "+Add Task";

    mainContent.appendChild(projectTitle);
    mainContent.appendChild(addTask);
    addTask.addEventListener("click", (e) => {
        e.preventDefault();
        (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.addNewTasks)(mainContent);
        (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.todayDate)();
    });
};

const createNewProject = (input, parent, e) => {
    e.preventDefault();
    if(projectsArray.some(object => object.project === input.value)) {
        return;
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
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



class ToDo {
    constructor(title, description, dueDate, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
    };
};

const seeDetails = (parent) => {
    const detailsDi = document.createElement("dialog");
    detailsDi.classList.add("Details");

    const title = document.createElement("div");
    title.classList.add("detailsTitle");

    const description = document.createElement("div");
    description.classList.add("descriptionDetails");
    
    const dueDate = document.createElement("div");
    dueDate.classList.add("duedateDescription");

    const closeDetails = document.createElement("button");
    closeDetails.textContent = "Close";
    closeDetails.addEventListener("click", () => {
        detailsDi.close();
    })

    detailsDi.appendChild(title);
    detailsDi.appendChild(description);
    detailsDi.appendChild(dueDate);
    detailsDi.appendChild(closeDetails);
    parent.appendChild(detailsDi);

    return detailsDi;
};

let numberForId = 0;
let toDoArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookData)("tasks") || [];

const newTodoDOM = (titleImput, descriptionImput, dateInput,  parent) => {
    numberForId ++;

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");

    const container = document.createElement("div");
    container.classList.add("container1");

    const container2 = document.createElement("div");
    container2.classList.add("container2");

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

    const detailsDialog = seeDetails(toDoDiv);

    seeDetailsbt.addEventListener("click", (event) => {
        const toDoDiv = event.currentTarget.closest('.taskDiv');
        const descriptionDiv = toDoDiv.querySelector(".descriptionDetails");
        const dateDiv = toDoDiv.querySelector(".duedateDescription");

        descriptionDiv.textContent = `Description: ${descriptionImput}`;
        dateDiv.textContent = `Due Date: ${dateInput}`;

        detailsDialog.showModal();
    });
    
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    todoContainer.appendChild(checkboxWrapper);
    todoContainer.appendChild(taskName);
    container2.appendChild(seeDetailsbt);
    toDoDiv.appendChild(todoContainer);
    toDoDiv.appendChild(container2);

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

    createTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createNewToDo(titleInput, descriptionTextarea, dateInput, _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject, e, mainContent);
        closeDialogs(newTodoDialog, createTaskForm);
    });
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFX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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hlY2tib3guY3NzP2E5NmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWNvbG9yOiByZ2IoNCwgNTUsIDc1KTtcbn1cblxuLmNoZWNrYm94LXdyYXBwZXItMTkge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC0tY2hlY2tib3gtaGVpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICBALW1vei1rZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcbiAgICAwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZG90aGF0b3BjaGVjay0xOSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuICAgIH1cbiAgfVxuICBcbiAgQC1tb3ota2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIFxuICAgIDUwJSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94IHtcbiAgICBoZWlnaHQ6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XG4gICAgd2lkdGg6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMSkgc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC43Mik7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjQxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMDUpIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIH1cbiAgXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmFmdGVyIHtcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4zNyk7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjA1KTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3gsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB9XG4gIFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveDo6YWZ0ZXIsXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjphZnRlciB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbiAgICAtbW96LWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcbiAgfVxuICBcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmJlZm9yZSxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuICAgIC1tb3otYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2hlY2tib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLHdDQUF3QztJQUMxQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSx3Q0FBd0M7SUFDMUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0Usd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLFNBQVM7SUFDWDs7SUFFQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRSwwQ0FBMEM7SUFDNUM7RUFDRjs7RUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsMENBQTBDO0lBQzVDO0VBQ0Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixvREFBb0Q7SUFDcEQsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLDRFQUE0RTtJQUM1RSwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTs7SUFFRSx3Q0FBd0M7SUFDeEMseURBQXlEO0lBQ3pELHVEQUF1RDtJQUN2RCw0REFBNEQ7SUFDNUQsb0RBQW9EO0VBQ3REOztFQUVBOztJQUVFLDBDQUEwQztJQUMxQyxzREFBc0Q7SUFDdEQsb0RBQW9EO0lBQ3BELHlEQUF5RDtJQUN6RCxpREFBaUQ7RUFDbkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6IHJnYig0LCA1NSwgNzUpO1xcbn1cXG5cXG4uY2hlY2tib3gtd3JhcHBlci0xOSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgLS1jaGVja2JveC1oZWlnaHQ6IDI1cHg7XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4gICAgMCUge1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgNTAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgNTAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC1tb3ota2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbiAgICAwJSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICBcXG4gICAgNTAlIHtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94IHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tY2hlY2tib3gtaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjEpIHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUsXFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmFmdGVyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUge1xcbiAgICB0b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC43Mik7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC40MSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSkgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XFxuICAgIHRvcDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjM3KTtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjA1KTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgXFxuICAuY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveCxcXG4gICAgLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmFmdGVyLFxcbiAgICAuY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcXG4gICAgLW1vei1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtby1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICB9XFxuICBcXG4gIC5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjpiZWZvcmUsXFxuICAgIC5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbiAgICAtbW96LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIC1vLWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWNvbG9yOiByZ2IoMCwgNjUsIDExOSk7XG59XG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBtYXJnaW46IDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIC8qZGlzcGxheTogbm9uZTsqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbmgzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiNuZXdQcm9qZWN0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuI25ld1Byb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzkpIDBweCA1cHggMTBweDtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgICBtYXJnaW46IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICBjb2xvcjogIzUxNTE1MTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG5kaWFsb2cge1xuICAgIG1heC13aWR0aDogMjEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbmxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgY29sb3I6ICM1MTUxNTE7XG59XG5pbnB1dFt0eXBlID0gXCJkYXRlXCJdIHtcbiAgICBjb2xvcjogIzUxNTE1MTtcbn1cbmlucHV0LCB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxO1xuICAgIG1hcmdpbjogNSU7XG59XG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXN7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YXNrRGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUlO1xuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xufVxuLnRhc2tEaXYge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBtYXJnaW46IDIlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogNTAlO1xufVxuLmRlbGV0ZVByb2plY3Q6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3RMaSB7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cbi5wcm9qZWN0TGk6Zm9jdXMge1xuICAgIGNvbG9yOiB5ZWxsb3cgIDtcbn1cbi5wcm9qZWN0VGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tYWluLWNvbG9yKSAwcHggNXB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLkRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzkxOTE5MTtcbn1cblxuLnRvZG9Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLE9BQU87QUFDWDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiKDAsIDY1LCAxMTkpO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIC8qZGlzcGxheTogbm9uZTsqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNuZXdQcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3OSkgMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBtYXJnaW46IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogMCU7XFxuICAgIGNvbG9yOiAjNTE1MTUxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgY29sb3I6ICM1MTUxNTE7XFxufVxcbmlucHV0W3R5cGUgPSBcXFwiZGF0ZVxcXCJdIHtcXG4gICAgY29sb3I6ICM1MTUxNTE7XFxufVxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxuICAgIG1hcmdpbjogNSU7XFxufVxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1c3tcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrRGF0YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNSU7XFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbn1cXG4udGFza0RpdiB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG4uZGVsZXRlUHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0TGkge1xcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG4ucHJvamVjdExpOmZvY3VzIHtcXG4gICAgY29sb3I6IHllbGxvdyAgO1xcbn1cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tYWluLWNvbG9yKSAwcHggNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5EZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzkxOTE5MTtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoZWNrYm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hlY2tib3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9jaGVja2JveC5jc3NcIlxuaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0LCBmaWx0ZXJUYXNrcywgbmV3UHJvamVjdERPTSwgcHJvamVjdEFkZFRhc2ssIHByb2plY3RzLCBwcm9qZWN0c0FycmF5LCByZWNvdmVyT2JqZWN0cywgcmVjb3ZlclByb2plY3RzfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHtjcmVhdGVOZXdUb0RvLCB0b2RheURhdGUsIHRhc2tEb25lIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHsgbG9va0RhdGEsIHNldERhdGEgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VG9kb0RpYWxvZ1wiKTtcbmNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1RvRG9cIik7XG5jb25zdCBjbG9zZUJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xuXG4vL05ldyBQcm9qZWN0cyB2YXJpYWJsZXNcblxuY29uc3QgbmV3UHJvamVjdEJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qZWN0XCIpO1xuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0RGlhbG9nXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBwcm9qZWN0SW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI05ld1Byb2plY3RJbXB1dFwiKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0XCIpO1xuY29uc3QgYWNjZXB0QnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY2VwdFwiKTtcblxuLy9OZXcgdG8gZG8gdmFyaWFibGVzXG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUYXNrXCIpXG5jb25zdCB0aXRsZUltcHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW1wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZHVlRGF0ZUltcHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuXG5cbm5ld1RvZG8ub25jbGljayA9ICgpID0+IHtcbiAgZGlhbG9nLnNob3coKTtcbiAgdG9kYXlEYXRlKCk7XG59XG5cbmNsb3NlQnQub25jbGljayA9ICgpID0+IHtcbiAgZGlhbG9nLmNsb3NlKCk7XG59XG5cbm5ld1Byb2plY3RCdC5vbmNsaWNrID0gKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLnNob3coKTtcbn07XG5cbmNhbmNlbC5vbmNsaWNrID0gKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0UHJvcGVydHkgPSBcInByb2plY3RcIjtcbiAgcmVjb3ZlclByb2plY3RzKHByb2plY3RzQXJyYXksIHVsLCBwcm9qZWN0UHJvcGVydHkpO1xuXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0TmFtZSA9IFwiIERlZmF1bHRcIjtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBmaWx0ZXJUYXNrcyhwcm9qZWN0c0FycmF5LCBkZWZhdWx0UHJvamVjdE5hbWUpO1xuICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4gIGlmKGRlZmF1bHRQcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGRlZmF1bHRJbXB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UHJvamVjdFwiKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KGRlZmF1bHRJbXB1dCwgdWwsIGUpO1xuICB9XG59KTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RJbXB1dCwgdWwsIGUpO1xuICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59KTtcblxuLy90b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIC8vc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gKHNpZGViYXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHNpZGViYXIuc3R5bGUuZGlzcGxheSA9PT0gJycpID8gJ2Jsb2NrJyA6ICdub25lJztcbi8vfSk7XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgY3JlYXRlTmV3VG9Ebyh0aXRsZUltcHV0LCBkZXNjcmlwdGlvbkltcHV0LCBkdWVEYXRlSW1wdXQsIGN1cnJlbnRQcm9qZWN0LCBlLCBtYWluQ29udGVudClcbiAgZGlhbG9nLmNsb3NlKCk7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG59KTtcblxuZXhwb3J0IHttYWluQ29udGVudH1cblxuICBcbiIsImNvbnN0IHNldERhdGEgPSAobmFtZSwgb2JqZWN0KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIG5hbWUsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufVxuXG5jb25zdCBsb29rRGF0YSA9IChvYmplY3QpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob2JqZWN0KTtcbiAgICBpZihkYXRhKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IHtzZXREYXRhLCBsb29rRGF0YX07IiwiaW1wb3J0IHsgc2V0RGF0YSwgbG9va0RhdGEgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IG1haW5Db250ZW50IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1RvRG8sIG5ld1RvZG9ET00sIHRvZGF5RGF0ZSwgY2xvc2VEaWFsb2dzLCB0b0RvQXJyYXksIGFkZE5ld1Rhc2tzIH0gZnJvbSBcIi4vdG9Eb1wiO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBcIkRlZmF1bHRcIjtcblxuY2xhc3MgcHJvamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH07XG59O1xuXG5jb25zdCBkZWxldGVFbGVtZW50cyA9IChtYWluQ29udGVudCkgPT4ge1xuICAgIHdoaWxlIChtYWluQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubGV0IHByb2plY3RzQXJyYXkgPSBsb29rRGF0YShcInByb2plY3RzXCIpIHx8IFtdO1xuXG5jb25zdCBmaWx0ZXJUYXNrcyA9IChhcnJheSwgY3VycmVudFByb2plY3QpID0+IHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0LnByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3N0b0RlbGV0ZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrRGl2XCIpKTtcbiAgICB0YXNrc3RvRGVsZXRlLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCByZWNvdmVyUHJvamVjdHMgPSAoYXJyYXksIHBhcmVudCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbmV3UHJvamVjdERPTShlbGVtZW50LCBwYXJlbnQsIHByb3BlcnR5TmFtZSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCByZWNvdmVyVGFza3MgPSAoYXJyYXksIHRpdGxlUHJvcGVydHksIGRlc2NyaXB0aW9uUHJvcGVydHksIGRhdGVQcm9wZXJ0eSwgbWFpbkNvbnRlbnQpID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBuZXdUb2RvRE9NKGVsZW1lbnRbdGl0bGVQcm9wZXJ0eV0sIGVsZW1lbnRbZGVzY3JpcHRpb25Qcm9wZXJ0eV0sIGVsZW1lbnRbZGF0ZVByb3BlcnR5XSwgbWFpbkNvbnRlbnQpO1xuICAgIH0pO1xufVxuXG5jb25zdCBuZXdQcm9qZWN0RE9NID0gKGlucHV0LCBwYXJlbnQsIHByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGNvbnN0IGxpYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsaWJ1dHRvbi50ZXh0Q29udGVudCA9IGlucHV0W3Byb3BlcnR5TmFtZV07XG4gICAgbGlidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RMaVwiKTtcblxuICAgIGNvbnN0IHRpdGxlUHJvcGVydHkgPSBcInRpdGxlXCI7IFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvcGVydHkgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgY29uc3QgZGF0ZVByb3BlcnR5ID0gXCJkdWVEYXRlXCI7XG5cbiAgICBsaWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgIChldmVudCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IGZpbHRlcmVkVGFza3MgPSBmaWx0ZXJUYXNrcyh0b0RvQXJyYXksIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgZGVsZXRlVGFza3MoKTtcbiAgICAgICAgcHJvamVjdEFkZFRhc2sobWFpbkNvbnRlbnQsIGlucHV0LCB0aXRsZVByb3BlcnR5KTtcbiAgICAgICAgcmVjb3ZlclRhc2tzKGZpbHRlcmVkVGFza3MsIHRpdGxlUHJvcGVydHksIGRlc2NyaXB0aW9uUHJvcGVydHksIGRhdGVQcm9wZXJ0eSwgbWFpbkNvbnRlbnQpXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdDtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCLwn5eR77iPXCI7XG4gICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlUHJvamVjdFwiKTtcblxuICAgIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChsaWJ1dHRvbik7XG4gICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TGkpO1xufTtcblxuY29uc3QgcHJvamVjdEFkZFRhc2sgPSAobWFpbkNvbnRlbnQsIGlucHV0LCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBkZWxldGVFbGVtZW50cyhtYWluQ29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuIFxuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7aW5wdXQudmFsdWV9YDtcbiAgICB9IFxuICAgIGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3RleHRDb250ZW50Jykge1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dC50ZXh0Q29udGVudH1gO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwicHJvamVjdFwiKSB7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke2lucHV0W3Byb3BlcnR5TmFtZV19YFxuICAgIH1cblxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwibmV3VG9Eb1wiKTtcbiAgICBhZGRUYXNrLnRleHRDb250ZW50PSBcIitBZGQgVGFza1wiO1xuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZE5ld1Rhc2tzKG1haW5Db250ZW50KTtcbiAgICAgICAgdG9kYXlEYXRlKCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKGlucHV0LCBwYXJlbnQsIGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYocHJvamVjdHNBcnJheS5zb21lKG9iamVjdCA9PiBvYmplY3QucHJvamVjdCA9PT0gaW5wdXQudmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdHMgKFxuICAgICAgICAgICAgaW5wdXQudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gXCJ2YWx1ZVwiO1xuICAgICAgICBwcm9qZWN0QWRkVGFzayhtYWluQ29udGVudCwgaW5wdXQsIG5ld1Byb3BlcnR5KTtcbiAgICAgICAgbmV3UHJvamVjdERPTShpbnB1dCwgcGFyZW50LCBuZXdQcm9wZXJ0eSk7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgc2V0RGF0YShcInByb2plY3RzXCIsIHByb2plY3RzQXJyYXkpO1xuICAgIH1cbn07IFxuICAgIFxuZXhwb3J0IHtwcm9qZWN0cywgY3JlYXRlTmV3UHJvamVjdCwgbmV3UHJvamVjdERPTSwgYWRkTmV3VGFza3MsIHByb2plY3RBZGRUYXNrLCBmaWx0ZXJUYXNrcywgcHJvamVjdHNBcnJheSwgcmVjb3ZlclByb2plY3RzLCBjdXJyZW50UHJvamVjdH07XG5cbiIsImltcG9ydCB7IHNldERhdGEsbG9va0RhdGEgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH07XG59O1xuXG5jb25zdCBzZWVEZXRhaWxzID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGRldGFpbHNEaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgZGV0YWlsc0RpLmNsYXNzTGlzdC5hZGQoXCJEZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzVGl0bGVcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uRGV0YWlsc1wiKTtcbiAgICBcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVkYXRlRGVzY3JpcHRpb25cIik7XG5cbiAgICBjb25zdCBjbG9zZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlRGV0YWlscy50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgICBjbG9zZURldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsc0RpLmNsb3NlKCk7XG4gICAgfSlcblxuICAgIGRldGFpbHNEaS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGV0YWlsc0RpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXRhaWxzRGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZGV0YWlsc0RpLmFwcGVuZENoaWxkKGNsb3NlRGV0YWlscyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRldGFpbHNEaSk7XG5cbiAgICByZXR1cm4gZGV0YWlsc0RpO1xufTtcblxubGV0IG51bWJlckZvcklkID0gMDtcbmxldCB0b0RvQXJyYXkgPSBsb29rRGF0YShcInRhc2tzXCIpIHx8IFtdO1xuXG5jb25zdCBuZXdUb2RvRE9NID0gKHRpdGxlSW1wdXQsIGRlc2NyaXB0aW9uSW1wdXQsIGRhdGVJbnB1dCwgIHBhcmVudCkgPT4ge1xuICAgIG51bWJlckZvcklkICsrO1xuXG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RpdlwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXIxXCIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyMlwiKTtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9Db250YWluZXJcIik7XG5cbiAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja2JveFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtd3JhcHBlci0xOScpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW1iZXJGb3JJZH1jYnRlc3QtMTlgKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0aXRsZUltcHV0O1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEb25lKGNoZWNrYm94LCB0YXNrTmFtZSk7XG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke251bWJlckZvcklkfWNidGVzdC0xOWApO1xuXG4gICAgY29uc3Qgc2VlRGV0YWlsc2J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzZWVEZXRhaWxzYnQuY2xhc3NMaXN0LmFkZChcInNlZURldGFpbHNcIik7XG4gICAgc2VlRGV0YWlsc2J0LnRleHRDb250ZW50ID0gXCLilrxcIjtcblxuICAgIGNvbnN0IGRldGFpbHNEaWFsb2cgPSBzZWVEZXRhaWxzKHRvRG9EaXYpO1xuXG4gICAgc2VlRGV0YWlsc2J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb0RpdiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2tEaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSB0b0RvRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25EZXRhaWxzXCIpO1xuICAgICAgICBjb25zdCBkYXRlRGl2ID0gdG9Eb0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmR1ZWRhdGVEZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbkltcHV0fWA7XG4gICAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZGF0ZUlucHV0fWA7XG5cbiAgICAgICAgZGV0YWlsc0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBcbiAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoc2VlRGV0YWlsc2J0KTtcbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIHRvRG9EaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyMik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUb0RvID0gKHRpdGxlSW1wdXQsIGRlc2NyaXB0aW9uSW1wdXQsIGR1ZURhdGVJbXB1dCwgY3VycmVudFByb2plY3QsIGUsIHBhcmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8oXG4gICAgICAgIHRpdGxlSW1wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uSW1wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGVJbXB1dC52YWx1ZSxcbiAgICAgICAgY3VycmVudFByb2plY3QsXG4gICAgKTtcbiAgICBuZXdUb2RvRE9NKHRpdGxlSW1wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW1wdXQudmFsdWUsIGR1ZURhdGVJbXB1dC52YWx1ZSwgIHBhcmVudCk7XG4gICAgdG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgc2V0RGF0YShgdGFza3NgLCB0b0RvQXJyYXkpO1xufTtcblxuY29uc3QgdG9kYXlEYXRlID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJykudmFsdWUgPSBjdXJyZW50RGF0ZTtcbn07XG5cbmNvbnN0IGNsb3NlRGlhbG9ncyA9IChkaWFsb2dzLCBmb3JtcykgPT4ge1xuICAgIGZvcm1zLnJlc2V0KCk7XG4gICAgZGlhbG9ncy5jbG9zZSgpO1xuICB9XG5cbmNvbnN0IHRhc2tEb25lID0gKG15Q2hlY2tib3gsIHRhc2tUZXh0KSA9PiB7XG4gICAgaWYgKG15Q2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgdGFza1RleHQuc3R5bGUuY29sb3IgPSBcImdyYXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrVGV4dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICB0YXNrVGV4dC5zdHlsZS5jb2xvciA9IFwicmdiKDAsIDY1LCAxMTkpXCI7XG4gICAgfVxufTtcblxuY29uc3QgYWRkTmV3VGFza3MgPSAobWFpbkNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBuZXdUb2RvRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJuZXdUb2RvRGlhbG9nXCIpO1xuICAgIG5ld1RvZG9EaWFsb2cuc3R5bGUud2lkdGggPSBcIjIxMHB4XCI7XG4gICAgbmV3VG9kb0RpYWxvZy5vcGVuID0gdHJ1ZTtcbiAgXG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjcmVhdGVUYXNrRm9ybS5hY3Rpb24gPSBcInN1Ym1pdFwiO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVUYXNrXCIpO1xuXG4gICAgY3JlYXRlVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNyZWF0ZU5ld1RvRG8odGl0bGVJbnB1dCwgZGVzY3JpcHRpb25UZXh0YXJlYSwgZGF0ZUlucHV0LCBjdXJyZW50UHJvamVjdCwgZSwgbWFpbkNvbnRlbnQpO1xuICAgICAgICBjbG9zZURpYWxvZ3MobmV3VG9kb0RpYWxvZywgY3JlYXRlVGFza0Zvcm0pO1xuICAgIH0pO1xuICBcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5vbWJyZVwiO1xuICBcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcGNpw7NuXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gXCIyMFwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IFwiMlwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXBjacOzblwiO1xuICBcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIFxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWdyZWdhclwiO1xuICBcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2VycmFyXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbGFyXCI7XG4gIFxuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBjcmVhdGVUYXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIGNyZWF0ZVRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgY3JlYXRlVGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBuZXdUb2RvRGlhbG9nLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvRGlhbG9nKTtcbiAgfTsgXG5cbmV4cG9ydCB7VG9EbywgY3JlYXRlTmV3VG9EbywgbmV3VG9kb0RPTSwgdG9kYXlEYXRlLCB0YXNrRG9uZSwgY2xvc2VEaWFsb2dzLCB0b0RvQXJyYXksIGFkZE5ld1Rhc2tzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==