exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

// Exports
module.exports = {
	"cardImage": "Smol_cardImage__a6vw2"
};


/***/ }),

/***/ 8194:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "home_table__rK3jF",
	"li": "home_li__foNV2",
	"ol": "home_ol__e9JsH"
};


/***/ }),

/***/ 2339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _certificates__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _certificates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7289);



/***/ }),

/***/ 6654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/layout.js
var layout = __webpack_require__(9752);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./pages/home/home.module.css
var home_module = __webpack_require__(8194);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./components/FollowBtn/index.js + 1 modules
var FollowBtn = __webpack_require__(9371);
// EXTERNAL MODULE: ./components/Divider/index.js
var Divider = __webpack_require__(3401);
// EXTERNAL MODULE: ./pages/certificates/index.js
var certificates = __webpack_require__(2339);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Smol/Smol.module.css
var Smol_module = __webpack_require__(6517);
var Smol_module_default = /*#__PURE__*/__webpack_require__.n(Smol_module);
;// CONCATENATED MODULE: ./components/Smol/Smol.js




function Smol({ index , imgSrc , text  }) {
    const delayInit = 200;
    const delay = 50;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
            style: {
                width: "6rem",
                border: "none",
                background: "#ffffff00"
            },
            "data-aos": "fade-right",
            "data-aos-delay": delayInit + delay * index,
            "data-aos-": true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Smol_module_default()).cardImage,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
                        src: imgSrc ? imgSrc : "favicon.ico",
                        style: {
                            scale: "70%"
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Body, {
                    className: "text-center",
                    style: {
                        fontSize: "12px",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                        children: text ? text : "MyIcon"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Smol_Smol = (Smol);

;// CONCATENATED MODULE: ./pages/home/home.json
const home_namespaceObject = JSON.parse('{"n":[{"src":"/images/icons/unity.png","text":"Unity"},{"src":"/images/icons/python.png","text":"Python3"},{"src":"/images/icons/cpp.png","text":"C++"},{"src":"/images/icons/csharp.png","text":"C#"},{"src":"/images/icons/ps.png","text":"Adobe Photoshop"},{"src":"/images/icons/ai.png","text":"Adobe Illustrator"},{"src":"/images/icons/html.png","text":"HTML"},{"src":"/images/icons/css.png","text":"CSS"},{"src":"/images/icons/react.png","text":"React"},{"src":"/images/icons/js.png","text":"Javascript"}]}');
;// CONCATENATED MODULE: ./pages/home/home.js









function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        home: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Intro, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                "data-aos": "fade-up",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {
                        isLined: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(certificates["default"], {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {
                        isLined: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-alt",
                "data-aos": "fade-in",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                    className: "d-md-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Jobs, {})
                    ]
                })
            })
        ]
    });
}
function Intro() {
    const delay = 100;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: "15vh"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-md-flex align-items-center h-100",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        sm: 12,
                        md: 6,
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                "data-aos": "fade-down",
                                "data-aos-delay": delay * 0,
                                children: "Gordon Yuen"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                "data-aos": "fade-down",
                                "data-aos-delay": delay * 1,
                                children: "Programmer, Game Developer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                "data-aos": "fade-down",
                                "data-aos-delay": delay * 2,
                                children: "Over 4-year experience developping games and tools using Unity, including PC, Android, IOS, AR and VR applications."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        sm: 12,
                        md: 6,
                        className: "p-3",
                        "data-aos": "fade-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                            src: "/images/web_design_profile_01.jpg",
                            fluid: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: "15vh"
                }
            })
        ]
    });
}
function Skills() {
    const delay = 100;
    const skillList = home_namespaceObject.n;
    var counter = 0;
    var smolList = ()=>[
            skillList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Smol_Smol, {
                    imgSrc: item.src,
                    text: item.text,
                    index: counter++
                }, item.src))
        ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-alt",
            "data-aos": "fade-in",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            height: "5vh"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "align-items-center h-100",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                sm: 12,
                                md: 6,
                                className: "p-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex justify-content-center flex-wrap gap-4",
                                    children: smolList()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                sm: 12,
                                md: 6,
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        "data-aos": "fade-left",
                                        style: {},
                                        "data-aos-delay": delay * 0,
                                        children: "Expertise"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "m-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-group overflow-hidden",
                                            "data-aos": "fade-left",
                                            style: {
                                                overflowX: "hidden"
                                            },
                                            "data-aos-delay": delay,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-group-item d-flex justify-content-between align-items-start",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "ms-2 me-auto",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "fw-bold",
                                                                children: "Unity"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                children: "Educational Apps, XR CAVE"
                                                            })
                                                        ]
                                                    })
                                                }, "unity"),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "list-group-item d-flex justify-content-between align-items-start",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "ms-2 me-auto",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "fw-bold",
                                                                children: "Python"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                children: "Multi-Pose Detection"
                                                            })
                                                        ]
                                                    })
                                                }, "python")
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "overflow-hidden",
                                        "data-aos": "fade-left",
                                        "data-aos-delay": delay * 1,
                                        children: "And other self studied languages or professional applications."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "data-aos": "fade-left",
                                        style: {
                                            overflowX: "hidden"
                                        },
                                        "data-aos-delay": delay,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                            variant: "primary",
                                            className: "btn-block mt-1",
                                            href: "/awards",
                                            children: "Awards"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            height: "5vh"
                        }
                    })
                ]
            })
        })
    });
}
function Education() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
        className: "my-5",
        "data-aos": "fade-right",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
            className: "align-items-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                className: "text-center button-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Education"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (home_module_default()).li,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "BSc(Hons) - Digital Media"
                                })
                            }, "dm"),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (home_module_default()).li,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Higher Diploma in Game and Animation"
                                })
                            }, "ga")
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                            variant: "primary",
                            className: "btn-block mt-1",
                            href: "/academic",
                            children: "Academic works"
                        })
                    })
                ]
            })
        })
    });
}
function Jobs() {
    const delay = 100;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
        className: "my-5 position-relative overflow-hidden",
        "data-aos": "fade-left",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
            className: "align-items-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Work Experiences"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (home_module_default()).li,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.polyu.edu.hk/",
                                            target: "_blank",
                                            children: "PolyU"
                                        }),
                                        "  - Research Assistant"
                                    ]
                                })
                            }, "polyu"),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (home_module_default()).li,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://website.app-mocha.com/",
                                            target: "_blank",
                                            children: "App Mocha"
                                        }),
                                        " - Game Programmer"
                                    ]
                                })
                            }, "appmocha")
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "primary",
                        className: "btn-block mt-1",
                        href: "/job-experience",
                        children: "Participated Projects"
                    })
                ]
            })
        })
    });
}


/***/ })

};
;