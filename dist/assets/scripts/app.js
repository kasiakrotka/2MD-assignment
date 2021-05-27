/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class HomePage {\r\n  constructor() {\r\n    this.galleryData = new Array();\r\n    this.descFull = false;\r\n    this.connectButtons();\r\n    this.addDynamicData();\r\n    this.loadGalleryData();\r\n  }\r\n\r\n  connectButtons() {\r\n    const moreBtn = document.getElementById(\"more-btn\");\r\n    moreBtn.addEventListener(\"click\", this.moreBtnHandler.bind(this));\r\n  }\r\n\r\n  addDynamicData() {\r\n    const descriptionDiv = document.getElementById(\"description-container\");\r\n    const dateContainer = document.getElementById(\"date-container\");\r\n    const timeContainer = document.getElementById(\"time-container\");\r\n    const date = new Date();\r\n    timeContainer.textContent =\r\n      \"Current date: \" +\r\n      date.toLocaleTimeString([], { hour: \"2-digit\", minute: \"2-digit\" });\r\n    dateContainer.textContent = \"Current time: \" + date.toLocaleDateString();\r\n  }\r\n\r\n  moreBtnHandler() {\r\n    const descriptionDiv = document.querySelector(\".content-container\");\r\n    descriptionDiv.classList.toggle(\"expanded\");\r\n  }\r\n\r\n  getJSON(url, callback) {\r\n    const request = new XMLHttpRequest();\r\n    request.open(\"GET\", url, true);\r\n    request.responseType = \"json\";\r\n    request.onload = function () {\r\n      const status = request.status;\r\n      callback(status, request.response);\r\n    };\r\n    request.send();\r\n  }\r\n\r\n  loadGalleryData() {\r\n    this.getJSON(\"https://picsum.photos/v2/list?limit=10\", (err, data) => {\r\n      if (err !== 200) {\r\n        console.error(\"Cant load data from source.\", err);\r\n      } else {\r\n        this.addDataToModal(data);\r\n      }\r\n    });\r\n  }\r\n\r\n  addDataToModal(data) {\r\n    const carouselInner = document.querySelector(\".carousel-inner\");\r\n    const item = document.querySelector(\".carousel-item\");\r\n\r\n    data.forEach((item, index) => {\r\n      const newItem = document.createElement(\"div\");\r\n      const img = document.createElement(\"img\");\r\n      newItem.classList.add(\"carousel-item\");\r\n      if (index === 0) {\r\n        newItem.classList.add(\"active\");\r\n      }\r\n      img.src = item.download_url;\r\n      img.alt = item.url;\r\n      img.classList.add(\"img-fluid\", \"mx-auto\", \"d-block\", \"w-75\");\r\n      newItem.appendChild(img);\r\n      carouselInner.appendChild(newItem);\r\n    });\r\n  }\r\n}\r\n\r\nnew HomePage();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhvbWVQYWdlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2FsbGVyeURhdGEgPSBuZXcgQXJyYXkoKTtcclxuICAgIHRoaXMuZGVzY0Z1bGwgPSBmYWxzZTtcclxuICAgIHRoaXMuY29ubmVjdEJ1dHRvbnMoKTtcclxuICAgIHRoaXMuYWRkRHluYW1pY0RhdGEoKTtcclxuICAgIHRoaXMubG9hZEdhbGxlcnlEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0QnV0dG9ucygpIHtcclxuICAgIGNvbnN0IG1vcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcmUtYnRuXCIpO1xyXG4gICAgbW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5tb3JlQnRuSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFkZER5bmFtaWNEYXRhKCkge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRpbWVDb250YWluZXIudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIkN1cnJlbnQgZGF0ZTogXCIgK1xyXG4gICAgICBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIiB9KTtcclxuICAgIGRhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgdGltZTogXCIgKyBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgbW9yZUJ0bkhhbmRsZXIoKSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XHJcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XHJcbiAgfVxyXG5cclxuICBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSByZXF1ZXN0LnN0YXR1cztcclxuICAgICAgY2FsbGJhY2soc3RhdHVzLCByZXF1ZXN0LnJlc3BvbnNlKTtcclxuICAgIH07XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9XHJcblxyXG4gIGxvYWRHYWxsZXJ5RGF0YSgpIHtcclxuICAgIHRoaXMuZ2V0SlNPTihcImh0dHBzOi8vcGljc3VtLnBob3Rvcy92Mi9saXN0P2xpbWl0PTEwXCIsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgaWYgKGVyciAhPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnQgbG9hZCBkYXRhIGZyb20gc291cmNlLlwiLCBlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWRkRGF0YVRvTW9kYWwoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkRGF0YVRvTW9kYWwoZGF0YSkge1xyXG4gICAgY29uc3QgY2Fyb3VzZWxJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtaW5uZXJcIik7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1pdGVtXCIpO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWl0ZW1cIik7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpbWcuc3JjID0gaXRlbS5kb3dubG9hZF91cmw7XHJcbiAgICAgIGltZy5hbHQgPSBpdGVtLnVybDtcclxuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWctZmx1aWRcIiwgXCJteC1hdXRvXCIsIFwiZC1ibG9ja1wiLCBcInctNzVcIik7XHJcbiAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgY2Fyb3VzZWxJbm5lci5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubmV3IEhvbWVQYWdlKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });