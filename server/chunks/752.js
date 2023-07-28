exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 6064:
/***/ ((module) => {

// Exports
module.exports = {
	"line": "Divider_line__6vcmO",
	"line2": "Divider_line2__gIoKt"
};


/***/ }),

/***/ 2811:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "FollowBtn_button__s8O6D",
	"a": "FollowBtn_a__7kj3d"
};


/***/ }),

/***/ 407:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "layout_background__nGBlL",
	"container": "layout_container__ithU7",
	"header": "layout_header__WIdrS",
	"footerContainer": "layout_footerContainer__GmDee",
	"row": "layout_row__vqY2_",
	"backToTop": "layout_backToTop__q1wTV",
	"pagesItem": "layout_pagesItem__kHCnP"
};


/***/ }),

/***/ 7530:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY"
};


/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Divider_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6064);
/* harmony import */ var _Divider_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Divider_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);




function Divider({ isLined  }) {
    if (isLined) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Divider_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Divider_module_css__WEBPACK_IMPORTED_MODULE_3___default().line) + " " + (_Divider_module_css__WEBPACK_IMPORTED_MODULE_3___default().line2)
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_Divider_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 9371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ FollowButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./components/FollowBtn/FollowBtn.module.css
var FollowBtn_module = __webpack_require__(2811);
var FollowBtn_module_default = /*#__PURE__*/__webpack_require__.n(FollowBtn_module);
;// CONCATENATED MODULE: ./components/FollowBtn/FollowBtn.js




// https://react-icons.github.io/react-icons/icons?name=fa
function BtnType(props) {
    switch(props.template){
        case "facebook":
            return [
                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {
                    style: {
                        color: "#fff"
                    }
                }),
                "https://www.facebook.com/gordon.yuen.7/"
            ];
        case "github":
            return [
                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                    style: {
                        color: "#fff"
                    }
                }),
                "https://github.com/gfsd20433"
            ];
        case "youtube":
            return [
                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaYoutube, {
                    style: {
                        color: "#fff"
                    }
                }),
                "https://www.youtube.com/channel/UCbXhZtZTfHco6MgM_FZRpbw"
            ];
        default:
            return [
                null,
                "#"
            ];
    }
}
function FollowButton(props) {
    const result = BtnType(props);
    //const handleClick = () => {window.location.href = result[1];}
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: result[1],
        className: (FollowBtn_module_default()).a,
        target: "_blank",
        children: result[0]
    });
}
;

;// CONCATENATED MODULE: ./components/FollowBtn/index.js



/***/ }),

/***/ 9752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony export siteTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7530);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FollowBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9371);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(407);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Divider_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(517);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);










const myName = "Gordon Yuen";
const siteTitle = myName + "'s Profolio";
const cvLink = "https://docs.google.com/document/d/1rLOtGUQzHCZV0MZs1eMgiAgB2Kb5lXulLTxQBvU9wt0/edit";
function LayoutHeader() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
        id: "top",
        fixed: "top",
        expand: "lg",
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ms-3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Brand, {
                className: "d-flex ms-3",
                href: "/",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        priority: true,
                        src: "/images/profile.jpg",
                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().borderCircle),
                        height: 40,
                        width: 40,
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "ms-3",
                        children: myName
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {
                "aria-controls": "basic-navbar-nav",
                className: "me-3"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {
                id: "",
                className: "basic-navbar-nav",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
                    className: "ms-auto align-items-end",
                    style: {
                        background: "white"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                            className: "me-3",
                            href: "/home",
                            children: "Home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                            className: "me-3",
                            href: "/awards",
                            children: "Awards"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                            className: "me-3",
                            href: "/academic",
                            children: "Academic Works"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                            className: "me-3",
                            href: "/work-experience",
                            children: "Working Experiences"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                            className: "me-3",
                            href: "/contact",
                            children: "Contact"
                        })
                    ]
                })
            })
        ]
    });
}
function LayoutFooter() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-secondary " + (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().footerContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            className: "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-md-flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            className: "d-flex align-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                                href: "/home",
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        priority: true,
                                        src: "/images/profile.jpg",
                                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().borderCircle),
                                        height: 40,
                                        width: 40,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ms-3 text-white",
                                        children: myName
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            className: "d-block",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "#dddddd"
                                    },
                                    children: "Links:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FollowBtn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            template: "github"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FollowBtn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            template: "youtube"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FollowBtn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            template: "facebook"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "#dddddd"
                                    },
                                    children: "Downloads"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: cvLink,
                                        className: "text-white",
                                        target: "_blank",
                                        children: "Resume"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
function ButtonTop() {
    const [showBtn, setShowBtn] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function mount() {
        function onScroll() {
            setShowBtn(window.scrollY > window.innerHeight * 0.05);
        }
        window.addEventListener("scroll", onScroll);
        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });
    return showBtn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().backToTop),
        onClick: ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        children: "Top"
    }) : null;
}
function Layout({ children , home  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutHeader, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().background)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "10vh"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Divider_Divider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonTop, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackToHome, {
                        isHome: home
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Divider_Divider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutFooter, {})
                ]
            })
        ]
    });
}
function MyPage() {
    return /*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsx(Row, {
            children: /*#__PURE__*/ _jsx(Col, {
                children: /*#__PURE__*/ _jsx("h1", {
                    children: "Hello, world!"
                })
            })
        })
    });
}
function BackToHome({ isHome  }) {
    if (!isHome) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Divider_Divider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-flex justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().pagesItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/#",
                            children: "Back To Home"
                        })
                    })
                })
            ]
        });
    }
}


/***/ })

};
;