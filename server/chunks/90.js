exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 8419:
/***/ ((module) => {

// Exports
module.exports = {
	"h3icon": "academic_h3icon__x76de",
	"title": "academic_title__kC6Ni",
	"titleText": "academic_titleText__tsSEN",
	"fadeIn": "academic_fadeIn__zA2LW",
	"titleCard": "academic_titleCard__QR_FI",
	"titleCard2": "academic_titleCard2__byb_f academic_titleCard__QR_FI",
	"DescriptionCard": "academic_DescriptionCard__lTBzO",
	"iframe": "academic_iframe__auory",
	"background": "academic_background__Q24q9"
};


/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(517);
/* harmony import */ var _academic_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8419);
/* harmony import */ var _academic_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_academic_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);







function academic() {
    const id_pigcity = "the-pig-city";
    const id_rookie = "rookie-duty";
    const id_plastic = "plastic-saving-game";
    const topMargin = "80px";
    function SetCard({ useId , useClassName , img_src , card_text  }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/academic#" + useId,
            className: "mx-auto",
            "data-aos": "flip-up",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                className: useClassName,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
                        variant: "top",
                        src: img_src,
                        className: "justify-content-center py-2",
                        style: {
                            height: "100px",
                            width: "auto"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                            className: "",
                            children: card_text
                        })
                    })
                ]
            })
        });
    }
    function CollapsableCard({ context  }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().CollapsableCard),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "m-3",
                    children: context
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {},
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleText) + " fw-board",
                                children: "Academic Works"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleText) + "",
                                children: "Click for details"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "10vh"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-item-center justify-content-center flex-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SetCard, {
                                useId: id_pigcity,
                                useClassName: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleCard),
                                img_src: "/images/icons/pig_logo.png",
                                card_text: "The Pig City"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SetCard, {
                                useId: id_rookie,
                                useClassName: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleCard2),
                                img_src: "/images/icons/rookie_logo.png",
                                card_text: "Rookie Duty"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SetCard, {
                                useId: id_plastic,
                                useClassName: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleCard),
                                img_src: "/images/icons/plastic_logo.png",
                                card_text: "Plastic Saving Game"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PigCity, {
                useId: id_pigcity,
                topMargin: topMargin
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RookieDuty, {
                useId: id_rookie,
                topMargin: topMargin
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Uwe, {
                useId: id_plastic,
                topMargin: topMargin
            })
        ]
    });
}
function StyleHeader3({ h3 , useId  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "d-flex justify-content-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: useId,
                className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3icon),
                height: 64,
                "data-aos": "flip-up",
                "data-aos-offset": "300"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "my-auto",
                "data-aos": "flip-up",
                children: h3
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: useId,
                className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().h3icon),
                height: 64,
                "data-aos": "flip-up",
                "data-aos-offset": "300"
            })
        ]
    });
}
function PigCity({ useId , topMargin  }) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: useId,
        style: {
            scrollMarginTop: topMargin
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-alt",
            "data-aos": "fade-in",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyleHeader3, {
                    h3: "The Pig City",
                    useId: "/images/icons/pig_logo.png"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            "data-aos": "fade-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "my-auto me-1",
                                        children: "Description"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                    className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().DescriptionCard),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "m-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "It is a graduation project from 2019, which utilized technologies such as AR, VR and Networking."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                                in: expanded,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                "The project is a series of applications for the children to design their own character (a pig). By the reference ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "http://www.szwwco.com",
                                                                    children: "Window of the World (世界之窗)"
                                                                }),
                                                                ", the children will explore and interact with different famous building a virtual environment."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "The project had won multiple awards, including Outstanding Project Award in IVE IT Discipline Graduation Project Exhibition and Finalist in CHI PLAY 2019."
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "accordion-button",
                                                onClick: ()=>setExpanded((expanded)=>!expanded),
                                                children: expanded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read less"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowUp, {})
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read more"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowDown, {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            className: "pt-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    className: "",
                                    "data-aos": "fade-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            children: "Game Trailer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            width: "560",
                                            height: "315",
                                            src: "https://www.youtube.com/embed/t3nQ8NntQ5w",
                                            title: "YouTube video player",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                            allowFullScreen: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    className: "",
                                    "data-aos": "fade-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            children: "Game Play"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            width: "560",
                                            height: "315",
                                            src: "https://www.youtube.com/embed/0IlwUzWHlWc",
                                            title: "YouTube video player",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                            allowFullScreen: true
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            className: "pt-3",
                            "data-aos": "fade-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Related websites"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                listStyle: "none"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://dl.acm.org/doi/10.1145/3341215.3358240",
                                                target: "_blank",
                                                children: "CHI PLAY 2019"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                listStyle: "none"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://vco-create.vtc.edu.hk/en/project/detail/66",
                                                target: "_blank",
                                                children: "VTC"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                listStyle: "none"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://www.facebook.com/thepigcity",
                                                target: "_blank",
                                                children: "Facebook page"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function RookieDuty({ useId , topMargin  }) {
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: useId,
        style: {
            scrollMarginTop: topMargin
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-child1",
            "data-aos": "fade-in",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyleHeader3, {
                    h3: "Rookie Duty",
                    useId: "/images/icons/rookie_logo.png"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            "data-aos": "fade-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "my-auto me-1",
                                        children: "Description"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                    className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().DescriptionCard),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "m-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Graduation project from 2020."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                                in: expanded,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "The theme inspiration comes from the pandemic COVID-19. A parody game of making the room clean but also making troubles to others."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "accordion-button",
                                                onClick: ()=>setExpanded((expanded)=>!expanded),
                                                children: expanded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read less"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowUp, {})
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read more"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowDown, {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: {
                                span: 6,
                                offset: 6
                            },
                            "data-aos": "fade-left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Game Demo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    width: "560",
                                    height: "315",
                                    src: "https://www.youtube.com/embed/coJRE6aLUv8",
                                    title: "YouTube video player",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: true
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function Uwe({ useId , topMargin  }) {
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: useId,
        style: {
            scrollMarginTop: topMargin
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-alt",
            "data-aos": "fade-in",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyleHeader3, {
                    h3: "Plastic Saving Game",
                    useId: "/images/icons/plastic_logo.png"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            "data-aos": "fade-right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "my-auto me-1",
                                        children: "Description"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                    className: (_academic_module_css__WEBPACK_IMPORTED_MODULE_6___default().DescriptionCard),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "m-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "It is a game in 2019 UWE study tour and one of the section is about plastic usage in the UK."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                                in: expanded,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "It could be done by making a simple presentation. However our group designed a game to make it interesting."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "accordion-button",
                                                onClick: ()=>setExpanded((expanded)=>!expanded),
                                                children: expanded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read less"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowUp, {})
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read more"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowDown, {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: {
                                span: 6,
                                offset: 6
                            },
                            "data-aos": "fade-left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Game Demo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    width: "560",
                                    height: "315",
                                    src: "https://www.youtube.com/embed/fMSoG_EenlI",
                                    title: "YouTube video player",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: true
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (academic);


/***/ })

};
;