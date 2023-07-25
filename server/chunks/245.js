exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 8245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ImageSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: external "react-bootstrap/Carousel"
var Carousel_ = __webpack_require__(6964);
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_);
;// CONCATENATED MODULE: ./components/ImageSlider/ImageSlider.js




//https://react-bootstrap.github.io/components/carousel/
//https://youtu.be/2tUgOM8rjJI?t=529
/* harmony default export */ const ImageSlider = (ImageSlider_ImageSlider);
function CreateItem(item, keyName, handleItemClick) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Carousel_default()).Item, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "d-block w-100",
                src: item.src_alt ? "./images" + item.src_alt : "./images" + item.src,
                alt: item.alt,
                style: {
                    height: "400px",
                    objectFit: "cover",
                    width: "100%"
                },
                onClick: ()=>handleItemClick(item)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()).Caption, {})
        ]
    }, keyName);
}
function CreateItemsGroup(json, handleItemClick) {
    let count = 0;
    const items = json.photos.map((item)=>CreateItem(item, `${json.idPrefix}-${count++}`, handleItemClick));
    return items;
}
function ImageSlider_ImageSlider(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()), {
        indicators: true,
        children: CreateItemsGroup(props.json, props.handleItemClick)
    });
}
function UncontrolledExample() {
    return /*#__PURE__*/ _jsxs(Carousel, {
        children: [
            /*#__PURE__*/ _jsxs(Carousel.Item, {
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        style: {
                            width: 100,
                            height: "auto"
                        },
                        className: "d-block w-100",
                        src: "https://scontent.fhkg4-2.fna.fbcdn.net/v/t39.30808-6/273781189_4790043394424784_7296792629280176918_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=FFAVOG0aBzoAX8RzRQN&_nc_ht=scontent.fhkg4-2.fna&oh=00_AfC-1dlyg7J4Vyw95P8ers2DeKp3EMXW36NZklKVgIjTQQ&oe=645A851F",
                        alt: "First slide"
                    }),
                    /*#__PURE__*/ _jsxs(Carousel.Caption, {
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "First slide label"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Nulla vitae elit libero, a pharetra augue mollis interdum."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Carousel.Item, {
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        style: {
                            width: 100,
                            height: "auto"
                        },
                        className: "d-block w-100",
                        src: "https://scontent.fhkg4-1.fna.fbcdn.net/v/t39.30808-6/335466064_220647953781863_7695354294067717366_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=ocxQEV8Nl7cAX9R4PLh&_nc_ht=scontent.fhkg4-1.fna&oh=00_AfBVnaCbBWbrJGzAMTqDe71UBiBb6N8vIM_3pOmtcI-ang&oe=6459CFE3",
                        alt: "Second slide"
                    }),
                    /*#__PURE__*/ _jsxs(Carousel.Caption, {
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "Second slide label"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Carousel.Item, {
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        style: {
                            width: 100,
                            height: "auto"
                        },
                        className: "d-block w-100",
                        src: "https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.6435-9/69181570_2377539745675173_975590126090452992_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UrVIMX4oRT0AX-7prZ9&_nc_ht=scontent.fhkg4-1.fna&oh=00_AfAnH3vGJmqdhpALxidfDedAYg6eYrtJGRA04id4irU8pA&oe=647C90B8",
                        alt: "Third slide"
                    }),
                    /*#__PURE__*/ _jsxs(Carousel.Caption, {
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "Third slide label"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ImageSlider/index.js



/***/ }),

/***/ 9090:
/***/ (() => {



/***/ })

};
;