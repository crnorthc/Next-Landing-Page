/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/tokens.js":
/*!**************************!*\
  !*** ./public/tokens.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nif (nav) {\n  window.addEventListener(\"scroll\", function () {\n    nav.classList.toggle(\"scrolling-active\", window.scrollY > 0);\n  });\n}\n\nfunction createToken() {\n  var top = Math.random();\n  var fuck;\n  var showcase;\n\n  if (top > .5) {\n    fuck = document.querySelector(\".showcase\");\n    showcase = true;\n  } else {\n    fuck = document.querySelector(\".tokenCont\");\n    showcase = false;\n  }\n\n  var token = document.createElement(\"img\");\n  var crypto = Math.floor(Math.random() * 4);\n  var size = Math.random() * 50;\n  token.className = \"token\";\n  token.style.borderRadius = 100 + \"%\";\n  token.style.zIndex = 6;\n\n  if (crypto == 0) {\n    token.style.background = \"rgb(63, 63, 63)\";\n    token.src = \"vapur.svg\";\n    token.style.padding = \"5px\";\n    token.style.width = 20 + size + \"px\";\n    token.style.height = 20 + size + \"px\";\n  }\n\n  if (crypto == 1) {\n    token.src = \"bitcoin.svg\";\n    token.style.width = 30 + size + \"px\";\n    token.style.height = 30 + size + \"px\";\n  }\n\n  if (crypto == 2) {\n    token.style.background = \"rgb(63, 63, 63)\";\n    token.style.padding = \"5px\";\n    token.src = \"eth.svg\";\n    token.style.width = 20 + size + \"px\";\n    token.style.height = 20 + size + \"px\";\n  }\n\n  if (crypto == 3) {\n    token.src = \"litecoin.svg\";\n    token.style.width = 30 + size + \"px\";\n    token.style.height = 30 + size + \"px\";\n  }\n\n  token.style.bottom = 0 + \"px\";\n  token.style.left = Math.random() * (innerWidth - 100) + \"px\";\n  fuck.appendChild(token);\n  setTimeout(function () {\n    token.remove();\n  }, 200000);\n}\n\nsetInterval(createToken, 2500);\n\nfor (i = 0; i < accordion.length; i++) {\n  accordion[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsS0FBSyxDQUFDTSxLQUFOLENBQVlNLEtBQVosR0FBb0IsS0FBS1IsSUFBTCxHQUFZLElBQWhDO0FBQ0FKLElBQUFBLEtBQUssQ0FBQ00sS0FBTixDQUFZTyxNQUFaLEdBQXFCLEtBQUtULElBQUwsR0FBWSxJQUFqQztBQUNBOztBQUVESixFQUFBQSxLQUFLLENBQUNNLEtBQU4sQ0FBWVEsTUFBWixHQUFxQixJQUFJLElBQXpCO0FBQ0FkLEVBQUFBLEtBQUssQ0FBQ00sS0FBTixDQUFZUyxJQUFaLEdBQW1CckIsSUFBSSxDQUFDQyxNQUFMLE1BQWlCcUIsVUFBVSxHQUFHLEdBQTlCLElBQXFDLElBQXhEO0FBRUFwQixFQUFBQSxJQUFJLENBQUNxQixXQUFMLENBQWlCakIsS0FBakI7QUFFQWtCLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2hCbEIsSUFBQUEsS0FBSyxDQUFDbUIsTUFBTjtBQUNBLEdBRlMsRUFFUCxNQUZPLENBQVY7QUFHQTs7QUFDREMsV0FBVyxDQUFDNUIsV0FBRCxFQUFjLElBQWQsQ0FBWDs7QUFFQSxLQUFLNkIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQTFCLEVBQWtDRixDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDQyxFQUFBQSxTQUFTLENBQUNELENBQUQsQ0FBVCxDQUFhakMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtBQUNsRCxTQUFLQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDQSxHQUZEO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3Rva2Vucy5qcz9hOTRlIl0sInNvdXJjZXNDb250ZW50IjpbIiAgIGlmIChuYXYpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2Nyb2xsaW5nLWFjdGl2ZVwiLCB3aW5kb3cuc2Nyb2xsWSA+IDApO1xuICAgIH0pO1xuICAgfVxuXG4gICBmdW5jdGlvbiBjcmVhdGVUb2tlbigpIHtcbiAgICBsZXQgdG9wID0gTWF0aC5yYW5kb20oKTtcbiAgICBsZXQgZnVjaztcbiAgICBsZXQgc2hvd2Nhc2U7XG4gICAgaWYgKHRvcCA+IC41KSB7XG4gICAgICAgIGZ1Y2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3djYXNlXCIpO1xuICAgICAgICBzaG93Y2FzZSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmdWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2tlbkNvbnRcIik7XG4gICAgICAgIHNob3djYXNlID0gZmFsc2U7XG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IGNyeXB0byA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgIGxldCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDUwO1xuICAgIHRva2VuLmNsYXNzTmFtZSA9IFwidG9rZW5cIjtcbiAgICB0b2tlbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAxMDAgKyBcIiVcIjtcbiAgICB0b2tlbi5zdHlsZS56SW5kZXggPSA2O1xuXG4gICAgaWYgKGNyeXB0byA9PSAwKSB7XG4gICAgIHRva2VuLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYig2MywgNjMsIDYzKVwiO1xuICAgICB0b2tlbi5zcmMgPSBcInZhcHVyLnN2Z1wiO1xuICAgICB0b2tlbi5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgdG9rZW4uc3R5bGUud2lkdGggPSAyMCArIHNpemUgKyBcInB4XCI7XG4gICAgIHRva2VuLnN0eWxlLmhlaWdodCA9IDIwICsgc2l6ZSArIFwicHhcIjtcbiAgICB9XG4gICAgaWYgKGNyeXB0byA9PSAxKSB7XG4gICAgIHRva2VuLnNyYyA9IFwiYml0Y29pbi5zdmdcIjtcbiAgICAgdG9rZW4uc3R5bGUud2lkdGggPSAzMCArIHNpemUgKyBcInB4XCI7XG4gICAgIHRva2VuLnN0eWxlLmhlaWdodCA9IDMwICsgc2l6ZSArIFwicHhcIjtcbiAgICB9XG4gICAgaWYgKGNyeXB0byA9PSAyKSB7XG4gICAgIHRva2VuLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYig2MywgNjMsIDYzKVwiO1xuICAgICB0b2tlbi5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgdG9rZW4uc3JjID0gXCJldGguc3ZnXCI7XG4gICAgIHRva2VuLnN0eWxlLndpZHRoID0gMjAgKyBzaXplICsgXCJweFwiO1xuICAgICB0b2tlbi5zdHlsZS5oZWlnaHQgPSAyMCArIHNpemUgKyBcInB4XCI7XG4gICAgfVxuICAgIGlmIChjcnlwdG8gPT0gMykge1xuICAgICB0b2tlbi5zcmMgPSBcImxpdGVjb2luLnN2Z1wiO1xuICAgICB0b2tlbi5zdHlsZS53aWR0aCA9IDMwICsgc2l6ZSArIFwicHhcIjtcbiAgICAgdG9rZW4uc3R5bGUuaGVpZ2h0ID0gMzAgKyBzaXplICsgXCJweFwiO1xuICAgIH1cblxuICAgIHRva2VuLnN0eWxlLmJvdHRvbSA9IDAgKyBcInB4XCI7XG4gICAgdG9rZW4uc3R5bGUubGVmdCA9IE1hdGgucmFuZG9tKCkgKiAoaW5uZXJXaWR0aCAtIDEwMCkgKyBcInB4XCI7XG5cbiAgICBmdWNrLmFwcGVuZENoaWxkKHRva2VuKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICB0b2tlbi5yZW1vdmUoKTtcbiAgICB9LCAyMDAwMDApO1xuICAgfVxuICAgc2V0SW50ZXJ2YWwoY3JlYXRlVG9rZW4sIDI1MDApO1xuXG4gICBmb3IgKGkgPSAwOyBpIDwgYWNjb3JkaW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgYWNjb3JkaW9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgIH0iXSwibmFtZXMiOlsibmF2Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNjcm9sbFkiLCJjcmVhdGVUb2tlbiIsInRvcCIsIk1hdGgiLCJyYW5kb20iLCJmdWNrIiwic2hvd2Nhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2tlbiIsImNyZWF0ZUVsZW1lbnQiLCJjcnlwdG8iLCJmbG9vciIsInNpemUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsImJhY2tncm91bmQiLCJzcmMiLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJib3R0b20iLCJsZWZ0IiwiaW5uZXJXaWR0aCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInNldEludGVydmFsIiwiaSIsImFjY29yZGlvbiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/tokens.js\n");

/***/ })

});