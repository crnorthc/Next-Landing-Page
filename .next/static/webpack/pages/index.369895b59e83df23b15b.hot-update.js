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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nfunction createToken() {\n  var top = Math.random();\n  var fuck;\n  var showcase;\n\n  if (top > .5) {\n    fuck = document.querySelector(\".showcase\");\n    showcase = true;\n  } else {\n    fuck = document.querySelector(\".tokenCont\");\n    showcase = false;\n  }\n\n  var token = document.createElement(\"img\");\n  var crypto = Math.floor(Math.random() * 4);\n  var size = Math.random() * 50;\n  token.className = \"token\";\n  token.style.borderRadius = 100 + \"%\";\n  token.style.zIndex = 6;\n\n  if (crypto == 0) {\n    token.style.background = \"rgb(63, 63, 63)\";\n    token.src = \"vapur.svg\";\n    token.style.padding = \"5px\";\n    token.style.width = 20 + size + \"px\";\n    token.style.height = 20 + size + \"px\";\n  }\n\n  if (crypto == 1) {\n    token.src = \"bitcoin.svg\";\n    token.style.width = 30 + size + \"px\";\n    token.style.height = 30 + size + \"px\";\n  }\n\n  if (crypto == 2) {\n    token.style.background = \"rgb(63, 63, 63)\";\n    token.style.padding = \"5px\";\n    token.src = \"eth.svg\";\n    token.style.width = 20 + size + \"px\";\n    token.style.height = 20 + size + \"px\";\n  }\n\n  if (crypto == 3) {\n    token.src = \"litecoin.svg\";\n    token.style.width = 30 + size + \"px\";\n    token.style.height = 30 + size + \"px\";\n  }\n\n  token.style.bottom = 0 + \"px\";\n  token.style.left = Math.random() * (innerWidth - 100) + \"px\";\n  fuck.appendChild(token);\n  setTimeout(function () {\n    token.remove();\n  }, 200000);\n}\n\nsetInterval(createToken, 2500);\n\nfor (i = 0; i < accordion.length; i++) {\n  accordion[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLElBQXpCO0FBQ0FkLEVBQUFBLEtBQUssQ0FBQ00sS0FBTixDQUFZUyxJQUFaLEdBQW1CckIsSUFBSSxDQUFDQyxNQUFMLE1BQWlCcUIsVUFBVSxHQUFHLEdBQTlCLElBQXFDLElBQXhEO0FBRUFwQixFQUFBQSxJQUFJLENBQUNxQixXQUFMLENBQWlCakIsS0FBakI7QUFFQWtCLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2hCbEIsSUFBQUEsS0FBSyxDQUFDbUIsTUFBTjtBQUNBLEdBRlMsRUFFUCxNQUZPLENBQVY7QUFHQTs7QUFDREMsV0FBVyxDQUFDNUIsV0FBRCxFQUFjLElBQWQsQ0FBWDs7QUFFQSxLQUFLNkIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQTFCLEVBQWtDRixDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDQyxFQUFBQSxTQUFTLENBQUNELENBQUQsQ0FBVCxDQUFhRyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFZO0FBQ2xELFNBQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNBLEdBRkQ7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvdG9rZW5zLmpzP2E5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgIGZ1bmN0aW9uIGNyZWF0ZVRva2VuKCkge1xuICAgIGxldCB0b3AgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGxldCBmdWNrO1xuICAgIGxldCBzaG93Y2FzZTtcbiAgICBpZiAodG9wID4gLjUpIHtcbiAgICAgICAgZnVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd2Nhc2VcIik7XG4gICAgICAgIHNob3djYXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZ1Y2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRva2VuQ29udFwiKTtcbiAgICAgICAgc2hvd2Nhc2UgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgY3J5cHRvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgbGV0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogNTA7XG4gICAgdG9rZW4uY2xhc3NOYW1lID0gXCJ0b2tlblwiO1xuICAgIHRva2VuLnN0eWxlLmJvcmRlclJhZGl1cyA9IDEwMCArIFwiJVwiO1xuICAgIHRva2VuLnN0eWxlLnpJbmRleCA9IDY7XG5cbiAgICBpZiAoY3J5cHRvID09IDApIHtcbiAgICAgdG9rZW4uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiKDYzLCA2MywgNjMpXCI7XG4gICAgIHRva2VuLnNyYyA9IFwidmFwdXIuc3ZnXCI7XG4gICAgIHRva2VuLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICB0b2tlbi5zdHlsZS53aWR0aCA9IDIwICsgc2l6ZSArIFwicHhcIjtcbiAgICAgdG9rZW4uc3R5bGUuaGVpZ2h0ID0gMjAgKyBzaXplICsgXCJweFwiO1xuICAgIH1cbiAgICBpZiAoY3J5cHRvID09IDEpIHtcbiAgICAgdG9rZW4uc3JjID0gXCJiaXRjb2luLnN2Z1wiO1xuICAgICB0b2tlbi5zdHlsZS53aWR0aCA9IDMwICsgc2l6ZSArIFwicHhcIjtcbiAgICAgdG9rZW4uc3R5bGUuaGVpZ2h0ID0gMzAgKyBzaXplICsgXCJweFwiO1xuICAgIH1cbiAgICBpZiAoY3J5cHRvID09IDIpIHtcbiAgICAgdG9rZW4uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiKDYzLCA2MywgNjMpXCI7XG4gICAgIHRva2VuLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICB0b2tlbi5zcmMgPSBcImV0aC5zdmdcIjtcbiAgICAgdG9rZW4uc3R5bGUud2lkdGggPSAyMCArIHNpemUgKyBcInB4XCI7XG4gICAgIHRva2VuLnN0eWxlLmhlaWdodCA9IDIwICsgc2l6ZSArIFwicHhcIjtcbiAgICB9XG4gICAgaWYgKGNyeXB0byA9PSAzKSB7XG4gICAgIHRva2VuLnNyYyA9IFwibGl0ZWNvaW4uc3ZnXCI7XG4gICAgIHRva2VuLnN0eWxlLndpZHRoID0gMzAgKyBzaXplICsgXCJweFwiO1xuICAgICB0b2tlbi5zdHlsZS5oZWlnaHQgPSAzMCArIHNpemUgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgdG9rZW4uc3R5bGUuYm90dG9tID0gMCArIFwicHhcIjtcbiAgICB0b2tlbi5zdHlsZS5sZWZ0ID0gTWF0aC5yYW5kb20oKSAqIChpbm5lcldpZHRoIC0gMTAwKSArIFwicHhcIjtcblxuICAgIGZ1Y2suYXBwZW5kQ2hpbGQodG9rZW4pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgIHRva2VuLnJlbW92ZSgpO1xuICAgIH0sIDIwMDAwMCk7XG4gICB9XG4gICBzZXRJbnRlcnZhbChjcmVhdGVUb2tlbiwgMjUwMCk7XG5cbiAgIGZvciAoaSA9IDA7IGkgPCBhY2NvcmRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICBhY2NvcmRpb25baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgfSJdLCJuYW1lcyI6WyJjcmVhdGVUb2tlbiIsInRvcCIsIk1hdGgiLCJyYW5kb20iLCJmdWNrIiwic2hvd2Nhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2tlbiIsImNyZWF0ZUVsZW1lbnQiLCJjcnlwdG8iLCJmbG9vciIsInNpemUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsImJhY2tncm91bmQiLCJzcmMiLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJib3R0b20iLCJsZWZ0IiwiaW5uZXJXaWR0aCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInNldEludGVydmFsIiwiaSIsImFjY29yZGlvbiIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/tokens.js\n");

/***/ })

});