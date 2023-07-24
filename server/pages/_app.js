(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js








function _app({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 250,
            easing: "ease-out",
            offset: 150,
            disable: false
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 9605:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7522));
module.exports = __webpack_exports__;

})();