exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 1287:
/***/ ((module) => {

// Exports
module.exports = {
	"overlayBackground": "ImageViewer_overlayBackground__hic6L",
	"overlayWindow": "ImageViewer_overlayWindow__7mEZf",
	"overlayCloseBtn": "ImageViewer_overlayCloseBtn___093z",
	"img": "ImageViewer_img__6ycqk"
};


/***/ }),

/***/ 1582:
/***/ ((module) => {

// Exports
module.exports = {
	"li": "work-experience_li__bkCpt",
	"ol": "work-experience_ol__InAr7",
	"overlayBackground": "work-experience_overlayBackground__vjFRF",
	"overlayWindow": "work-experience_overlayWindow__voaz6",
	"img": "work-experience_img__Jnbh4"
};


/***/ }),

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ work_experience)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout/layout.js
var layout = __webpack_require__(9752);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./pages/work-experience/work-experience.module.css
var work_experience_module = __webpack_require__(1582);
var work_experience_module_default = /*#__PURE__*/__webpack_require__.n(work_experience_module);
// EXTERNAL MODULE: ./components/Divider/Divider.js
var Divider = __webpack_require__(517);
// EXTERNAL MODULE: ./components/ImageSlider/index.js + 1 modules
var ImageSlider = __webpack_require__(8245);
;// CONCATENATED MODULE: ./pages/work-experience/work-experience.json
const work_experience_namespaceObject = JSON.parse('{"Wc":[{"idPrefix":"polyU","photos":[{"src":"/polyu/cave01.jpeg","alt":"","title":"","p":""},{"src":"/polyu/cave_preview001e.jpg","alt":"","title":"","p":""},{"src":"/polyu/cave_preview002e.jpg","alt":"","title":"","p":""},{"src":"/polyu/cave_preview003e.jpg","alt":"","title":"","p":""}]},{"idPrefix":"appMocha","photos":[{"src":"/gulumaru/g01.jpg","src_alt":"/gulumaru/g01_alt.jpg","alt":"","title":"","p":""},{"src":"/gulumaru/g02.jpg","src_alt":"/gulumaru/g02_alt.jpg","alt":"","title":"","p":""},{"src":"/gulumaru/g03.jpg","src_alt":"/gulumaru/g03_alt.jpg","alt":"","title":"","p":""},{"src":"/gulumaru/g04.jpg","src_alt":"/gulumaru/g04_alt.jpg","alt":"","title":"","p":""},{"src":"/gulumaru/gmat01.jpg","src_alt":"/gulumaru/gmat01_alt.jpg","alt":"","title":"","p":""}]}],"RL":["Grimoire of Crimson","Instinct","Ember","CREDENCE","Online","Sickest City","Extinguisher","Demetrius","Absolutely","Perspectives","Jakarta PROGRESSION","I can avoid it.#φωφ","Sentimental Journey","Occidens","TOKONOMA Spacewalk","Karma","More Than Diamond"],"z":[{"name":"MyAniTale","src":"https://www.youtube.com/embed/bQeULCc3bk4"},{"name":"Devils Night","src":"https://www.youtube.com/embed/IPZ2irk5aho?start=66"},{"name":"Baby Chaos","src":"https://www.youtube.com/embed/GhLsx9LIplw"},{"name":"Hero of Alzano","src":"https://www.youtube.com/embed/c-vaeYfjwKA"}]}');
// EXTERNAL MODULE: ./components/ImageViewer/ImageViewer.module.css
var ImageViewer_module = __webpack_require__(1287);
var ImageViewer_module_default = /*#__PURE__*/__webpack_require__.n(ImageViewer_module);
;// CONCATENATED MODULE: ./components/ImageViewer/ImageViewer.js




function ImageViewer(props) {
    const imageItem = props.item;
    const handleWindowClick = (event)=>{
        event.stopPropagation();
    };
    return imageItem != null && /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ImageViewer_module_default()).overlayBackground,
        onClick: props.handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ImageViewer_module_default()).overlayWindow,
            onClick: handleWindowClick,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.CloseButton, {
                    className: (ImageViewer_module_default()).overlayCloseBtn,
                    onClick: props.handleClose
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: (ImageViewer_module_default()).img + " " + (ImageViewer_module_default()).child,
                    src: "./images" + imageItem.src,
                    alt: "full-size image"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ImageViewer_module_default()).caption,
                    children: imageItem.p
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: imageItem.title
                })
            ]
        })
    });
}
/* harmony default export */ const ImageViewer_ImageViewer = (ImageViewer);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./pages/work-experience/work-experience.js










//https://stackoverflow.com/questions/49711212/inline-css-in-react-how-to-style-multiple-li-elements
function ToJsonObject(idPrefix) {
    const ext = work_experience_namespaceObject.Wc.find((item)=>item.idPrefix === idPrefix);
    return ext;
}
function jobExperience() {
    const delay = 100;
    const [imageItem, setImageItem] = (0,external_react_.useState)(null);
    const [showCytusList, setShowCytusList] = (0,external_react_.useState)(false);
    const handleItemClick = (item)=>{
        console.log(item.src);
        setImageItem(item);
    };
    const handleClose = ()=>{
        setImageItem(null);
    };
    const jAppMocha = ToJsonObject("appMocha");
    const jPolyU = ToJsonObject("polyU");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex justify-content-center align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "m-auto",
                            "data-aos": "fade-in",
                            "data-aos-duration": 1000,
                            children: "Working Experiences"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-alt",
                        "data-aos": "fade-in",
                        "data-aos-delay": delay,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    "data-aos": "fade-left",
                                    "data-aos-delay": delay * 2,
                                    children: "The Hong Kong Polytechnic University - Research Assistant"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (work_experience_module_default()).li,
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Part-Time (2021 - 2023)"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (work_experience_module_default()).li,
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 3.5,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Developing virtual reality environment for research use"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (work_experience_module_default()).li,
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Predict, collect and analyze people’s interaction and behaviors"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ImageSlider/* default */.Z, {
                                    json: jPolyU,
                                    handleItemClick: handleItemClick
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-alt1",
                        "data-aos": "fade-in",
                        "data-aos-delay": 0,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    "data-aos": "fade-left",
                                    "data-aos-delay": delay * 1,
                                    children: "App Mocha - Game Programmer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (work_experience_module_default()).li,
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 1.5,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Intern, Outsourcing (2018 - 2022)"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (work_experience_module_default()).li,
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 2,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Designing mobile games for young children"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (work_experience_module_default()).li,
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 2.5,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "Games Released in name of ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "http://website.gulumaru.com/",
                                                        children: "GuluMaru"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ImageSlider/* default */.Z, {
                                    json: jAppMocha,
                                    handleItemClick: handleItemClick
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(WhissTech, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-alt1",
                        "data-aos": "fade-left",
                        "data-aos-delay": 0,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                            className: "d-md-flex",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        md: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                "data-aos": "fade-left",
                                                "data-aos-delay": delay * 1,
                                                children: "Rayark Inc. - CytusII Chart Designer"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: (work_experience_module_default()).li,
                                                        "data-aos": "fade-left",
                                                        "data-aos-delay": delay * 1.5,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Outsourcing (2017 - 2019)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: (work_experience_module_default()).li,
                                                        "data-aos": "fade-left",
                                                        "data-aos-delay": delay * 2,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                "Designing game charts for ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://rayark.com/g/cytus2/",
                                                                    children: "CytusII"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CytusList, {
                                                show: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "my-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        md: 6,
                                        className: "d-flex justify-content-center align-items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-aos": "fade-left",
                                            "data-aos-delay": delay * 5,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                                src: "/images/cytus/sickest_city.jpg",
                                                width: "560"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageViewer_ImageViewer, {
                item: imageItem,
                handleClose: handleClose
            })
        ]
    });
}
function CytusList() {
    const delay = 100;
    const [open, setOpen] = (0,external_react_.useState)(false);
    const myItems = work_experience_namespaceObject.RL;
    const itemsMap = (start = 0, end = -1)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: myItems.slice(start, end).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                    className: "col-md-12 d-flex justify-content-between",
                    style: {
                        borderTop: "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "",
                            children: item
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "",
                            children: "Easy,Hard,Chaos"
                        })
                    ]
                }, "cy" + index))
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        "data-aos": "fade-left",
        "data-aos-delay": delay * 3,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-2",
                children: "Participated Charts"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                        className: "col-md-12 d-flex justify-content-between",
                        variant: "primary",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "",
                                children: "Song Name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "",
                                children: "Difficulties"
                            })
                        ]
                    }, "cy-1"),
                    itemsMap(0, 3),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Collapse, {
                        in: open,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: itemsMap(3)
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.ListGroup.Item, {
                        className: "col-md-12 d-flex justify-content-between",
                        variant: "secondary",
                        style: {
                            borderTop: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "accordion-button",
                            onClick: ()=>setOpen((open)=>!open),
                            children: open ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex ms-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Show Less"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineKeyboardArrowUp, {})
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex ms-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Show All"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineKeyboardArrowDown, {})
                                    })
                                ]
                            })
                        })
                    }, "cy999")
                ]
            })
        ]
    });
}
function WhissTech() {
    const delay = 100;
    const [open, setOpen] = (0,external_react_.useState)(false);
    const data = work_experience_namespaceObject.z;
    const itemsMap = (start = 0, end = data.Length)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: data.slice(start, end).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                    className: "col-md-8 d-flex justify-content-between",
                    style: {
                        borderTop: "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "",
                            children: item.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "",
                            children: item.src ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "embed-responsive embed-responsive-16by9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    src: item.src,
                                    title: "YouTube video player",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: true
                                })
                            }) : "-"
                        })
                    ]
                }, "whiss" + index))
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-alt",
        "data-aos": "fade-left",
        "data-aos-delay": 0,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    "data-aos": "fade-left",
                    "data-aos-delay": delay * 1,
                    children: "Whiss Technologies - Member"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (work_experience_module_default()).li,
                            "data-aos": "fade-left",
                            "data-aos-delay": delay * 1.5,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Active member (2021 - )"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (work_experience_module_default()).li,
                            "data-aos": "fade-left",
                            "data-aos-delay": delay * 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Focus on programming other than web-development. Involved in developing different small scale prototypes and providing solutions."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (work_experience_module_default()).li,
                            "data-aos": "fade-left",
                            "data-aos-delay": delay * 2.5,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://whisstech.com/",
                                children: "Official Website"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ms-3",
                    "data-aos": "fade-left",
                    "data-aos-delay": delay * 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "my-2",
                            children: [
                                "Involved solutions:",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                                    className: "col-md-8 d-flex justify-content-between",
                                    variant: "primary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "",
                                            children: "Project Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "",
                                            children: "Reference"
                                        })
                                    ]
                                }, "whiss-1"),
                                itemsMap(0, 1),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Collapse, {
                                    in: open,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: itemsMap(1)
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.ListGroup.Item, {
                                    className: "col-md-8 d-flex justify-content-between",
                                    variant: "secondary",
                                    style: {
                                        borderTop: "none"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "accordion-button",
                                        onClick: ()=>setOpen((open)=>!open),
                                        children: open ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "d-flex ms-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Show Less"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineKeyboardArrowUp, {})
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "d-flex ms-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Show All"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineKeyboardArrowDown, {})
                                                })
                                            ]
                                        })
                                    })
                                }, "whiss999")
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const work_experience = (jobExperience);


/***/ })

};
;