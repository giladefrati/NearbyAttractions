module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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
  const attractions = data['results']; //adding for attraction an new imgURL field
  // with his picture reference or 'not found' photo in case there's no one

  attractions.forEach(attr => {
    const notFoundPhoto = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdHRyYWN0aW9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NlcnZpY2VzL3dlYmFwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImNhcmRTdHlsZSIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiQXR0cmFjdGlvbkNhcmQiLCJuYW1lIiwicmF0aW5nIiwibnVtYmVyX29mX3Jldmlld3MiLCJ0eXBlcyIsImltZ1VSTCIsInRpdGxlQ29sb3IiLCJ0aXRsZVNpemUiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmciLCJjb2xvciIsImpvaW4iLCJob3RlbHNEZXNpZ25EaWMiLCJwYXJhbXMiLCJsb2NhdGlvbiIsInJhZGl1cyIsImtleXdvcmQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJhdHRyYWN0aW9ucyIsImdldEF0dHJhY3Rpb25zIiwicHJvcHMiLCJIb21lIiwiaG90ZWwiLCJjaG9zZW5Ib3RlbCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJwYWRkaW5nQm90dG9tIiwicGxhY2VDb250ZW50IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFwIiwiYXR0ciIsInBsYWNlX2lkIiwidXNlcl9yYXRpbmdzX3RvdGFsIiwiZ29vZ2xlS2V5IiwiZ29vZ2xlVVJMIiwicGFyc2VkUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZm9yRWFjaCIsIm5vdEZvdW5kUGhvdG8iLCJnb29nbGVQaG90b1VSTCIsInBob3RvcyIsInBo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QUosQ0FBb0J4QixNQUFwQixFQUE0QnlCLFFBQTVCLEVBQTdCLENBSDhDLENBSzlDOztBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNMLFNBQVMsR0FBR0MsWUFBYixDQUF2QjtBQUNBLE1BQUlLLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBakI7QUFDQSxRQUFNeEIsV0FBeUIsR0FBR3VCLElBQUksQ0FBQyxTQUFELENBQXRDLENBUjhDLENBVzlDO0FBQ0E7O0FBQ0F2QixhQUFXLENBQUN5QixPQUFaLENBQXFCWixJQUFELElBQVU7QUFDNUIsVUFBTWEsYUFBcUIsR0FBRyw4RkFBOUI7QUFDQSxVQUFNQyxjQUFzQixHQUU1QmQsSUFBSSxDQUFDLFFBQUQsQ0FBSixHQUFpQixDQUFDQSxJQUFJLENBQUNlLE1BQU4sSUFBZ0IsQ0FBQ2YsSUFBSSxDQUFDZSxNQUFMLENBQVksQ0FBWixDQUFqQixHQUFrQ0YsYUFBbEMsR0FDaEIsc0VBQXFFVixTQUFVLG1CQUFrQkgsSUFBSSxDQUFDZSxNQUFMLENBQVksQ0FBWixFQUFlQyxlQUFnQixFQUhqSTtBQUlELEdBTkQ7QUFRQSxTQUFPN0IsV0FBUDtBQUNELENBdEJNLEM7Ozs7Ozs7Ozs7O0FDTlAsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlczogc3RyaW5nW10sXHJcbiAgICBudW1iZXJfb2ZfcmV2aWV3czogbnVtYmVyLFxyXG4gICAgcmF0aW5nOiBudW1iZXIsXHJcblxyXG4gICAgaW1nVVJMPzogc3RyaW5nLFxyXG4gICAgdGl0bGVTaXplPzogc3RyaW5nLFxyXG4gICAgdGl0bGVDb2xvcj86IHN0cmluZ1xyXG59XHJcblxyXG4vL0FuIGV4YXBtbGUgb2Ygc3R5bGUgdXNpbmcgb2JqZWN0IChmb3IgbW9yZSByZWFkYWJsZSBjb2RlKVxyXG5jb25zdCBjYXJkU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICBib3hTaGFkb3c6ICcwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgdHJhbnNpdGlvbjogJzAuM3MnLFxyXG4gICAgd2lkdGg6ICcyNWVtJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnMmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzJlbScsXHJcbiAgICBtaW5IZWlnaHQ6ICc0MmVtJyxcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBBdHRyYWN0aW9uQ2FyZCA9ICh7IG5hbWUsXHJcbiAgICByYXRpbmcsXHJcbiAgICBudW1iZXJfb2ZfcmV2aWV3cyxcclxuICAgIHR5cGVzLFxyXG4gICAgaW1nVVJMLFxyXG4gICAgdGl0bGVDb2xvcixcclxuICAgIHRpdGxlU2l6ZVxyXG59OiBQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17Y2FyZFN0eWxlfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiYXR0cmFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltZ1VSTH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogJ2NvdmVyJywgaGVpZ2h0OiAnMjVlbScsIHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyxwYWRkaW5nOicwLjdlbScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMnB4IDE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aXRsZUNvbG9yID8gdGl0bGVDb2xvciA6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRpdGxlU2l6ZSA/IHRpdGxlU2l6ZSA6ICcyZW0nXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPntuYW1lfTwvYj48L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhlbScgfX0+UmF0aW5nOiB7cmF0aW5nfSAgIHwgICB7bnVtYmVyX29mX3Jldmlld3N9IFJldmlld3M8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCBmb250U2l6ZTogJzAuN2VtJyB9fT57dHlwZXMuam9pbignLCAnKX0gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF0dHJhY3Rpb25DYXJkIiwiLy8tLS0tLT5yZWFjdCAmIG5leHRcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuLy8tLS0tLT5jb21wb25lbnRzICYgc2VydmljZXNcclxuaW1wb3J0IEF0dHJhY3Rpb25DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXR0cmFjdGlvbkNhcmQnXHJcbmltcG9ydCB7IEF0dHJhY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzLydcclxuaW1wb3J0IHsgZ2V0QXR0cmFjdGlvbnMgfSBmcm9tICcuLi9zZXJ2aWNlcy93ZWJhcGknXHJcblxyXG50eXBlIGRlc2lnblByb3BzID0ge1xyXG5cdHRpdGxlU2l6ZTogc3RyaW5nLFxyXG5cdHRpdGxlQ29sb3I6IHN0cmluZ1xyXG59XHJcblxyXG4vL09wdGlvbmFsIERlc2lnbiBGZWF0dXJlOiBjcmVhdGUgYSBzcGVjaWZpYyBkZXNpZ24gZm9yIGVhY2ggaG90ZWwvY2l0eSB1c2luZyBkaWN0aW9uYXJ5XHJcbmNvbnN0IGhvdGVsc0Rlc2lnbkRpYzogeyBba2V5OiBzdHJpbmddOiBkZXNpZ25Qcm9wcyB9ID0ge1xyXG5cdFsnZGVmYXVsdCddOiB7XHJcblx0XHR0aXRsZVNpemU6ICcxZW0nLFxyXG5cdFx0dGl0bGVDb2xvcjogJ2JsYWNrJ1xyXG5cdH0sXHJcblx0Wydsb25kb24nXToge1xyXG5cdFx0dGl0bGVTaXplOiAnMWVtJyxcclxuXHRcdHRpdGxlQ29sb3I6ICdwaW5rJ1xyXG5cdH0sXHJcblx0WydsaXNib24nXToge1xyXG5cdFx0dGl0bGVTaXplOiAnMC44ZW0nLFxyXG5cdFx0dGl0bGVDb2xvcjogJ2dyZWVuJ1xyXG5cdH1cclxufTtcclxuXHJcbi8vUGxlYXNlIHNldCB3YW50ZWQgbG9jYXRpb24ncyBjb29yZGlhbnRlc1xyXG5jb25zdCBwYXJhbXMgPSB7XHJcblx0bG9jYXRpb246ICczOC43MTk4ODUyLC05LjE0MDI5NzYnLFxyXG5cdHJhZGl1czogJzE1MDAnLFxyXG5cdGtleXdvcmQ6ICdhdHRyYWN0aW9uJyxcclxufVxyXG5cclxuLy8gZ2V0U2VydmVyU2lkZVByb3BzIChTZXJ2ZXItc2lkZSBSZW5kZXJpbmcpOiBGZXRjaGVzIGRhdGEgb24gZWFjaCByZXF1ZXN0LCB0byBnZXQgdGhlIG1vc3QgdXBkYXRlZCBhdHRyYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Ly91c2VzIGdldEF0dHJhY3Rpb25zIHNlcnZpY2UgdG8gZmV0Y2ggdGhlIGF0dHJhY3Rpb25zIGZyb20gZ29vZ2xlJ3MgQVBJXHJcblx0Y29uc3QgYXR0cmFjdGlvbnMgPSBhd2FpdCBnZXRBdHRyYWN0aW9ucyhwYXJhbXMpXHJcblx0Ly8gJ0hvbWUnIGNvbXBvbmVudCB3aWxsIHJlY2VpdmUgYXR0cmFjdGlvbnMgYXMgYSBwcm9wIGJ5IHJldHVybmluZyBpdFxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRhdHRyYWN0aW9uc1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuXHRob3RlbD86IHN0cmluZ1xyXG5cdGF0dHJhY3Rpb25zPzogQXR0cmFjdGlvbltdXHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBhdHRyYWN0aW9ucywgaG90ZWwgfTogUHJvcHMpID0+IHtcclxuXHRjb25zdCBjaG9zZW5Ib3RlbCA9IGhvdGVsID8gaG90ZWwgOiAnZGVmYXVsdCcgLy9oYW5kbGluZyBjdXN0b21pemVkIGRlc2lnblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnMmVtJywgZm9udEZhbWlseTogJ01vbm9zcGFjZScgfX0+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5CcmlkZ2lmeTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgxIHN0eWxlPXt7IGNvbG9yOiAncHVycGxlJywgcGFkZGluZ0JvdHRvbTogJzAuNWVtJywgZm9udFNpemU6ICczZW0nIH19PkJyaWRnaWZ5ITwvaDE+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3sgcGxhY2VDb250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxyXG5cdFx0XHRcdHthdHRyYWN0aW9ucy5tYXAoKGF0dHIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8QXR0cmFjdGlvbkNhcmRcclxuXHRcdFx0XHRcdFx0a2V5PXthdHRyLnBsYWNlX2lkfVxyXG5cdFx0XHRcdFx0XHRuYW1lPXthdHRyLm5hbWV9XHJcblx0XHRcdFx0XHRcdG51bWJlcl9vZl9yZXZpZXdzPXthdHRyLnVzZXJfcmF0aW5nc190b3RhbH1cclxuXHRcdFx0XHRcdFx0cmF0aW5nPXthdHRyLnJhdGluZ31cclxuXHRcdFx0XHRcdFx0dHlwZXM9e2F0dHIudHlwZXN9XHJcblx0XHRcdFx0XHRcdGltZ1VSTD17IGF0dHIuaW1nVVJMfVxyXG5cdFx0XHRcdFx0XHR0aXRsZVNpemU9e2hvdGVsc0Rlc2lnbkRpY1tjaG9zZW5Ib3RlbF0udGl0bGVTaXplfVxyXG5cdFx0XHRcdFx0XHR0aXRsZUNvbG9yPXtob3RlbHNEZXNpZ25EaWNbY2hvc2VuSG90ZWxdLnRpdGxlQ29sb3J9XHJcblx0XHRcdFx0XHQ+PC9BdHRyYWN0aW9uQ2FyZD5cclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsImltcG9ydCB7IEF0dHJhY3Rpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiXHJcblxyXG5jb25zdCBnb29nbGVLZXkgPSAnQUl6YVN5QlBXRndIcnNnell3MzZibC1lY2doYUZFcU51UnVHRFVnJ1xyXG5jb25zdCBnb29nbGVVUkwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL25lYXJieXNlYXJjaC9qc29uP2BcclxuXHJcbi8vQ3JlYXRlIHBhcmFtcyBzZW5kaW5nIHRoZSBvYmplY3QgdG8gdGhlIGdlbmVyYXRvciBVUkxTZWFyY2hQYXJhbXMgXHJcbmV4cG9ydCBjb25zdCBnZXRBdHRyYWN0aW9ucyA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAvL2FkZGluZyBrZXkgcHJvcGVydHkgdG8gdGhlIHJlcXVlc3QgaW4gb3JkZXIgbm90IHRvIGV4cG9zZSB0byB1c2Vyc1xyXG4gIHBhcmFtc1sna2V5J10gPSBnb29nbGVLZXlcclxuICBjb25zdCBwYXJzZWRQYXJhbXM6IHN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpXHJcblxyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBhdHRyYWN0aW9ucyBhbmQgZXh0cmFjdCB0aGUgJ3Jlc3VsdHMnIHNlY3Rpb24uXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZ29vZ2xlVVJMICsgcGFyc2VkUGFyYW1zKVxyXG4gIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGNvbnN0IGF0dHJhY3Rpb25zOiBBdHRyYWN0aW9uW10gPSBkYXRhWydyZXN1bHRzJ11cclxuXHJcblxyXG4gIC8vYWRkaW5nIGZvciBhdHRyYWN0aW9uIGFuIG5ldyBpbWdVUkwgZmllbGRcclxuICAvLyB3aXRoIGhpcyBwaWN0dXJlIHJlZmVyZW5jZSBvciAnbm90IGZvdW5kJyBwaG90byBpbiBjYXNlIHRoZXJlJ3Mgbm8gb25lXHJcbiAgYXR0cmFjdGlvbnMuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgY29uc3Qgbm90Rm91bmRQaG90bzogc3RyaW5nID0gJ2h0dHBzOi8vd3d3LnB1YmxpY2RvbWFpbnBpY3R1cmVzLm5ldC9waWN0dXJlcy8yODAwMDAvdmVsa2Evbm90LWZvdW5kLWltYWdlLTE1MzgzODY0Nzg3bHUuanBnJ1xyXG4gICAgY29uc3QgZ29vZ2xlUGhvdG9VUkw6IHN0cmluZyA9IFxyXG5cclxuICAgIGF0dHJbJ2ltZ1VSTCddID0gIWF0dHIucGhvdG9zIHx8ICFhdHRyLnBob3Rvc1swXSA/IG5vdEZvdW5kUGhvdG8gOiBcclxuICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvcGhvdG8/bWF4aGVpZ2h0PTQwMCZrZXk9JHtnb29nbGVLZXl9JnBob3RvcmVmZXJlbmNlPSR7YXR0ci5waG90b3NbMF0ucGhvdG9fcmVmZXJlbmNlfWBcclxuICB9KVxyXG4gIFxyXG4gIHJldHVybiBhdHRyYWN0aW9uc1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9