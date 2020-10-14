module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/lisbon.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AttractionCard.tsx":
/*!***************************************!*\
  !*** ./components/AttractionCard.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\gilad\\Desktop\\Bridgify\\BridgifyAsg\\components\\AttractionCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

//An exapmle of style using object (for more readable code)
const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: '25em',
  marginRight: '2em',
  marginBottom: '2em',
  minHeight: '42em'
};

const AttractionCard = ({
  name,
  rating,
  number_of_reviews,
  types,
  imgURL,
  titleColor,
  titleSize
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: cardStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: "attraction",
    src: imgURL,
    style: {
      objectFit: 'cover',
      height: '25em',
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      fontSize: '2em',
      padding: '0.7em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("h4", {
    style: {
      padding: '2px 16px',
      color: titleColor ? titleColor : 'black',
      fontSize: titleSize ? titleSize : '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, name)), __jsx("p", {
    style: {
      fontSize: '0.8em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Rating: ", rating, "   |   ", number_of_reviews, " Reviews"), __jsx("p", {
    style: {
      color: 'grey',
      fontSize: '0.7em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, types.join(', '), " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (AttractionCard);

/***/ }),

/***/ "./pages/api/lisbon.tsx":
/*!******************************!*\
  !*** ./pages/api/lisbon.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./pages/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_webapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/webapi */ "./services/webapi.ts");
var _jsxFileName = "C:\\Users\\gilad\\Desktop\\Bridgify\\BridgifyAsg\\pages\\api\\lisbon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const params = {
  location: '38.7198852,-9.1402976',
  radius: '3000',
  keyword: 'bars'
};

const lisbon = async (req, res) => {
  const attractions = await Object(_services_webapi__WEBPACK_IMPORTED_MODULE_3__["getAttractions"])(params);
  const HTMLString = react_dom_server__WEBPACK_IMPORTED_MODULE_0___default.a.renderToString(__jsx(___WEBPACK_IMPORTED_MODULE_1__["default"], {
    attractions: attractions,
    hotel: 'lisbon',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 60
    }
  })); // res.status(200).send(JSON.stringify (HTMLString))

  res.status(200).send(HTMLString);
};

/* harmony default export */ __webpack_exports__["default"] = (lisbon);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AttractionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AttractionCard */ "./components/AttractionCard.tsx");
/* harmony import */ var _services_webapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/webapi */ "./services/webapi.ts");
var _jsxFileName = "C:\\Users\\gilad\\Desktop\\Bridgify\\BridgifyAsg\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//----->react & next


//----->components & services


//Optional Design Feature: create a specific design for each hotel/city using dictionary
const hotelsDesignDic = {
  ['default']: {
    titleSize: '1em',
    titleColor: 'black'
  },
  ['london']: {
    titleSize: '1em',
    titleColor: 'pink'
  },
  ['lisbon']: {
    titleSize: '0.8em',
    titleColor: 'green'
  }
}; //Please set wanted location's coordiantes

const params = {
  location: '38.7198852,-9.1402976',
  radius: '1500',
  keyword: 'attraction'
}; // getServerSideProps (Server-side Rendering): Fetches data on each request, to get the most updated attractions

const getServerSideProps = async () => {
  //uses getAttractions service to fetch the attractions from google's API
  const attractions = await Object(_services_webapi__WEBPACK_IMPORTED_MODULE_3__["getAttractions"])(params); // 'Home' component will receive attractions as a prop by returning it

  return {
    props: {
      attractions
    }
  };
};

const Home = ({
  attractions,
  hotel
}) => {
  const chosenHotel = hotel ? hotel : 'default'; //handling customized design

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      textAlign: 'center',
      padding: '2em',
      fontFamily: 'Monospace'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, "Bridgify")), __jsx("h1", {
    style: {
      color: 'purple',
      paddingBottom: '0.5em',
      fontSize: '3em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }
  }, "Bridgify!"), __jsx("div", {
    style: {
      placeContent: 'center',
      display: 'flex',
      flexWrap: 'wrap'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }
  }, attractions.map(attr => {
    return __jsx(_components_AttractionCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: attr.place_id,
      name: attr.name,
      number_of_reviews: attr.user_ratings_total,
      rating: attr.rating,
      types: attr.types,
      imgURL: attr.imgURL,
      titleSize: hotelsDesignDic[chosenHotel].titleSize,
      titleColor: hotelsDesignDic[chosenHotel].titleColor,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./services/webapi.ts":
/*!****************************!*\
  !*** ./services/webapi.ts ***!
  \****************************/
/*! exports provided: getAttractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttractions", function() { return getAttractions; });
const googleKey = 'AIzaSyBPWFwHrsgzYw36bl-ecghaFEqNuRuGDUg';
const googleURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`; //Create params sending the object to the generator URLSearchParams 

const getAttractions = async params => {
  //adding key property to the request in order not to expose to users
  params['key'] = googleKey;
  const parsedParams = new URLSearchParams(params).toString(); // Call an external API endpoint to get attractions and extract the 'results' section.

  const res = await fetch(googleURL + parsedParams);
  let data = await res.json();
  const attractions = data['results'];
  const notFoundPhoto = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'; //adding for attraction an new imgURL field
  // with his picture reference or 'not found' photo in case there's no one

  attractions.forEach(attr => {
    const googlePhotoURL = attr['imgURL'] = !attr.photos || !attr.photos[0] ? notFoundPhoto : `https://maps.googleapis.com/maps/api/place/photo?maxheight=400&key=${googleKey}&photoreference=${attr.photos[0].photo_reference}`;
  });
  return attractions;
};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdHRyYWN0aW9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xpc2Jvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NlcnZpY2VzL3dlYmFwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJjYXJkU3R5bGUiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsIkF0dHJhY3Rpb25DYXJkIiwibmFtZSIsInJhdGluZyIsIm51bWJlcl9vZl9yZXZpZXdzIiwidHlwZXMiLCJpbWdVUkwiLCJ0aXRsZUNvbG9yIiwidGl0bGVTaXplIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nIiwiY29sb3IiLCJqb2luIiwicGFyYW1zIiwibG9jYXRpb24iLCJyYWRpdXMiLCJrZXl3b3JkIiwibGlzYm9uIiwicmVxIiwicmVzIiwiYXR0cmFjdGlvbnMiLCJnZXRBdHRyYWN0aW9ucyIsIkhUTUxTdHJpbmciLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwic3RhdHVzIiwic2VuZCIsImhvdGVsc0Rlc2lnbkRpYyIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIiwiSG9tZSIsImhvdGVsIiwiY2hvc2VuSG90ZWwiLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwicGFkZGluZ0JvdHRvbSIsInBsYWNlQ29udGVudCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImF0dHIiLCJwbGFjZV9pZCIsInVzZXJfcmF0aW5nc190b3RhbCIsImdvb2dsZUtleSIsImdvb2dsZVVSTCIsInBhcnNlZFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm5vdEZvdW5kUGhvdG8iLCJmb3JFYWNoIiwiZ29vZ2xlUGhvdG9VUkwiLCJwaG90b3MiLCJwaG90b19yZWZlcmVuY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQWFBO0FBQ0EsTUFBTUEsU0FBOEIsR0FBRztBQUNuQ0MsV0FBUyxFQUFFLDZCQUR3QjtBQUVuQ0MsWUFBVSxFQUFFLE1BRnVCO0FBR25DQyxPQUFLLEVBQUUsTUFINEI7QUFJbkNDLGFBQVcsRUFBRSxLQUpzQjtBQUtuQ0MsY0FBWSxFQUFFLEtBTHFCO0FBTW5DQyxXQUFTLEVBQUU7QUFOd0IsQ0FBdkM7O0FBVUEs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QUFDQS9CLGFBQVcsQ0FBQ2dDLE9BQVosQ0FBcUJaLElBQUQsSUFBVTtBQUM1QixVQUFNYSxjQUFzQixHQUM1QmIsSUFBSSxDQUFDLFFBQUQsQ0FBSixHQUFpQixDQUFDQSxJQUFJLENBQUNjLE1BQU4sSUFBZ0IsQ0FBQ2QsSUFBSSxDQUFDYyxNQUFMLENBQVksQ0FBWixDQUFqQixHQUFrQ0gsYUFBbEMsR0FDaEIsc0VBQXFFUixTQUFVLG1CQUFrQkgsSUFBSSxDQUFDYyxNQUFMLENBQVksQ0FBWixFQUFlQyxlQUFnQixFQUZqSTtBQUdELEdBSkQ7QUFNQSxTQUFPbkMsV0FBUDtBQUNELENBcEJNLEM7Ozs7Ozs7Ozs7O0FDTlAsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvYXBpL2xpc2Jvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2xpc2Jvbi50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdHlwZXM6IHN0cmluZ1tdLFxyXG4gICAgbnVtYmVyX29mX3Jldmlld3M6IG51bWJlcixcclxuICAgIHJhdGluZzogbnVtYmVyLFxyXG5cclxuICAgIGltZ1VSTD86IHN0cmluZyxcclxuICAgIHRpdGxlU2l6ZT86IHN0cmluZyxcclxuICAgIHRpdGxlQ29sb3I/OiBzdHJpbmdcclxufVxyXG5cclxuLy9BbiBleGFwbWxlIG9mIHN0eWxlIHVzaW5nIG9iamVjdCAoZm9yIG1vcmUgcmVhZGFibGUgY29kZSlcclxuY29uc3QgY2FyZFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgYm94U2hhZG93OiAnMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpJyxcclxuICAgIHRyYW5zaXRpb246ICcwLjNzJyxcclxuICAgIHdpZHRoOiAnMjVlbScsXHJcbiAgICBtYXJnaW5SaWdodDogJzJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gICAgbWluSGVpZ2h0OiAnNDJlbScsXHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgQXR0cmFjdGlvbkNhcmQgPSAoeyBuYW1lLFxyXG4gICAgcmF0aW5nLFxyXG4gICAgbnVtYmVyX29mX3Jldmlld3MsXHJcbiAgICB0eXBlcyxcclxuICAgIGltZ1VSTCxcclxuICAgIHRpdGxlQ29sb3IsXHJcbiAgICB0aXRsZVNpemVcclxufTogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2NhcmRTdHlsZX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cImF0dHJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWdVUkx9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicsIGhlaWdodDogJzI1ZW0nLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzJlbScscGFkZGluZzonMC43ZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCAxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGl0bGVDb2xvciA/IHRpdGxlQ29sb3IgOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aXRsZVNpemUgPyB0aXRsZVNpemUgOiAnMmVtJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57bmFtZX08L2I+PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC44ZW0nIH19PlJhdGluZzoge3JhdGluZ30gICB8ICAge251bWJlcl9vZl9yZXZpZXdzfSBSZXZpZXdzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgZm9udFNpemU6ICcwLjdlbScgfX0+e3R5cGVzLmpvaW4oJywgJyl9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdHRyYWN0aW9uQ2FyZCIsImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuLidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGdldEF0dHJhY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ViYXBpJztcclxuXHJcbmNvbnN0IHBhcmFtcyA9IHtcclxuICBsb2NhdGlvbjogJzM4LjcxOTg4NTIsLTkuMTQwMjk3NicsXHJcbiAgcmFkaXVzOiAnMzAwMCcsXHJcbiAga2V5d29yZDogJ2JhcnMnLFxyXG59XHJcblxyXG5jb25zdCBsaXNib24gPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBhdHRyYWN0aW9uczogQXR0cmFjdGlvbltdID0gYXdhaXQgZ2V0QXR0cmFjdGlvbnMocGFyYW1zKVxyXG4gIGNvbnN0IEhUTUxTdHJpbmc6IHN0cmluZyA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKDxIb21lIGF0dHJhY3Rpb25zPXthdHRyYWN0aW9uc30gaG90ZWw9eydsaXNib24nfSAvPik7XHJcbiAgLy8gcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkgKEhUTUxTdHJpbmcpKVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEhUTUxTdHJpbmcpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc2JvbiIsIi8vLS0tLS0+cmVhY3QgJiBuZXh0XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcbi8vLS0tLS0+Y29tcG9uZW50cyAmIHNlcnZpY2VzXHJcbmltcG9ydCBBdHRyYWN0aW9uQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0F0dHJhY3Rpb25DYXJkJ1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy8nXHJcbmltcG9ydCB7IGdldEF0dHJhY3Rpb25zIH0gZnJvbSAnLi4vc2VydmljZXMvd2ViYXBpJ1xyXG5cclxudHlwZSBkZXNpZ25Qcm9wcyA9IHtcclxuXHR0aXRsZVNpemU6IHN0cmluZyxcclxuXHR0aXRsZUNvbG9yOiBzdHJpbmdcclxufVxyXG5cclxuLy9PcHRpb25hbCBEZXNpZ24gRmVhdHVyZTogY3JlYXRlIGEgc3BlY2lmaWMgZGVzaWduIGZvciBlYWNoIGhvdGVsL2NpdHkgdXNpbmcgZGljdGlvbmFyeVxyXG5jb25zdCBob3RlbHNEZXNpZ25EaWM6IHsgW2tleTogc3RyaW5nXTogZGVzaWduUHJvcHMgfSA9IHtcclxuXHRbJ2RlZmF1bHQnXToge1xyXG5cdFx0dGl0bGVTaXplOiAnMWVtJyxcclxuXHRcdHRpdGxlQ29sb3I6ICdibGFjaydcclxuXHR9LFxyXG5cdFsnbG9uZG9uJ106IHtcclxuXHRcdHRpdGxlU2l6ZTogJzFlbScsXHJcblx0XHR0aXRsZUNvbG9yOiAncGluaydcclxuXHR9LFxyXG5cdFsnbGlzYm9uJ106IHtcclxuXHRcdHRpdGxlU2l6ZTogJzAuOGVtJyxcclxuXHRcdHRpdGxlQ29sb3I6ICdncmVlbidcclxuXHR9XHJcbn07XHJcblxyXG4vL1BsZWFzZSBzZXQgd2FudGVkIGxvY2F0aW9uJ3MgY29vcmRpYW50ZXNcclxuY29uc3QgcGFyYW1zID0ge1xyXG5cdGxvY2F0aW9uOiAnMzguNzE5ODg1MiwtOS4xNDAyOTc2JyxcclxuXHRyYWRpdXM6ICcxNTAwJyxcclxuXHRrZXl3b3JkOiAnYXR0cmFjdGlvbicsXHJcbn1cclxuXHJcbi8vIGdldFNlcnZlclNpZGVQcm9wcyAoU2VydmVyLXNpZGUgUmVuZGVyaW5nKTogRmV0Y2hlcyBkYXRhIG9uIGVhY2ggcmVxdWVzdCwgdG8gZ2V0IHRoZSBtb3N0IHVwZGF0ZWQgYXR0cmFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdC8vdXNlcyBnZXRBdHRyYWN0aW9ucyBzZXJ2aWNlIHRvIGZldGNoIHRoZSBhdHRyYWN0aW9ucyBmcm9tIGdvb2dsZSdzIEFQSVxyXG5cdGNvbnN0IGF0dHJhY3Rpb25zID0gYXdhaXQgZ2V0QXR0cmFjdGlvbnMocGFyYW1zKVxyXG5cdC8vICdIb21lJyBjb21wb25lbnQgd2lsbCByZWNlaXZlIGF0dHJhY3Rpb25zIGFzIGEgcHJvcCBieSByZXR1cm5pbmcgaXRcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0YXR0cmFjdGlvbnNcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcblx0aG90ZWw/OiBzdHJpbmdcclxuXHRhdHRyYWN0aW9ucz86IEF0dHJhY3Rpb25bXVxyXG59XHJcblxyXG5jb25zdCBIb21lID0gKHsgYXR0cmFjdGlvbnMsIGhvdGVsIH06IFByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2hvc2VuSG90ZWwgPSBob3RlbCA/IGhvdGVsIDogJ2RlZmF1bHQnIC8vaGFuZGxpbmcgY3VzdG9taXplZCBkZXNpZ25cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzJlbScsIGZvbnRGYW1pbHk6ICdNb25vc3BhY2UnIH19PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+QnJpZGdpZnk8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxoMSBzdHlsZT17eyBjb2xvcjogJ3B1cnBsZScsIHBhZGRpbmdCb3R0b206ICcwLjVlbScsIGZvbnRTaXplOiAnM2VtJyB9fT5CcmlkZ2lmeSE8L2gxPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IHBsYWNlQ29udGVudDogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cclxuXHRcdFx0XHR7YXR0cmFjdGlvbnMubWFwKChhdHRyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPEF0dHJhY3Rpb25DYXJkXHJcblx0XHRcdFx0XHRcdGtleT17YXR0ci5wbGFjZV9pZH1cclxuXHRcdFx0XHRcdFx0bmFtZT17YXR0ci5uYW1lfVxyXG5cdFx0XHRcdFx0XHRudW1iZXJfb2ZfcmV2aWV3cz17YXR0ci51c2VyX3JhdGluZ3NfdG90YWx9XHJcblx0XHRcdFx0XHRcdHJhdGluZz17YXR0ci5yYXRpbmd9XHJcblx0XHRcdFx0XHRcdHR5cGVzPXthdHRyLnR5cGVzfVxyXG5cdFx0XHRcdFx0XHRpbWdVUkw9eyBhdHRyLmltZ1VSTH1cclxuXHRcdFx0XHRcdFx0dGl0bGVTaXplPXtob3RlbHNEZXNpZ25EaWNbY2hvc2VuSG90ZWxdLnRpdGxlU2l6ZX1cclxuXHRcdFx0XHRcdFx0dGl0bGVDb2xvcj17aG90ZWxzRGVzaWduRGljW2Nob3NlbkhvdGVsXS50aXRsZUNvbG9yfVxyXG5cdFx0XHRcdFx0PjwvQXR0cmFjdGlvbkNhcmQ+XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgeyBBdHRyYWN0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIlxyXG5cclxuY29uc3QgZ29vZ2xlS2V5ID0gJ0FJemFTeUJQV0Z3SHJzZ3pZdzM2YmwtZWNnaGFGRXFOdVJ1R0RVZydcclxuY29uc3QgZ29vZ2xlVVJMID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9uZWFyYnlzZWFyY2gvanNvbj9gXHJcblxyXG4vL0NyZWF0ZSBwYXJhbXMgc2VuZGluZyB0aGUgb2JqZWN0IHRvIHRoZSBnZW5lcmF0b3IgVVJMU2VhcmNoUGFyYW1zIFxyXG5leHBvcnQgY29uc3QgZ2V0QXR0cmFjdGlvbnMgPSBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgLy9hZGRpbmcga2V5IHByb3BlcnR5IHRvIHRoZSByZXF1ZXN0IGluIG9yZGVyIG5vdCB0byBleHBvc2UgdG8gdXNlcnNcclxuICBwYXJhbXNbJ2tleSddID0gZ29vZ2xlS2V5XHJcbiAgY29uc3QgcGFyc2VkUGFyYW1zOiBzdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKVxyXG5cclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgYXR0cmFjdGlvbnMgYW5kIGV4dHJhY3QgdGhlICdyZXN1bHRzJyBzZWN0aW9uLlxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdvb2dsZVVSTCArIHBhcnNlZFBhcmFtcylcclxuICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBjb25zdCBhdHRyYWN0aW9uczogQXR0cmFjdGlvbltdID0gZGF0YVsncmVzdWx0cyddXHJcblxyXG4gIGNvbnN0IG5vdEZvdW5kUGhvdG86IHN0cmluZyA9ICdodHRwczovL3d3dy5wdWJsaWNkb21haW5waWN0dXJlcy5uZXQvcGljdHVyZXMvMjgwMDAwL3ZlbGthL25vdC1mb3VuZC1pbWFnZS0xNTM4Mzg2NDc4N2x1LmpwZydcclxuICAvL2FkZGluZyBmb3IgYXR0cmFjdGlvbiBhbiBuZXcgaW1nVVJMIGZpZWxkXHJcbiAgLy8gd2l0aCBoaXMgcGljdHVyZSByZWZlcmVuY2Ugb3IgJ25vdCBmb3VuZCcgcGhvdG8gaW4gY2FzZSB0aGVyZSdzIG5vIG9uZVxyXG4gIGF0dHJhY3Rpb25zLmZvckVhY2goKGF0dHIpID0+IHtcclxuICAgIGNvbnN0IGdvb2dsZVBob3RvVVJMOiBzdHJpbmcgPSBcclxuICAgIGF0dHJbJ2ltZ1VSTCddID0gIWF0dHIucGhvdG9zIHx8ICFhdHRyLnBob3Rvc1swXSA/IG5vdEZvdW5kUGhvdG8gOiBcclxuICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvcGhvdG8/bWF4aGVpZ2h0PTQwMCZrZXk9JHtnb29nbGVLZXl9JnBob3RvcmVmZXJlbmNlPSR7YXR0ci5waG90b3NbMF0ucGhvdG9fcmVmZXJlbmNlfWBcclxuICB9KVxyXG4gIFxyXG4gIHJldHVybiBhdHRyYWN0aW9uc1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=