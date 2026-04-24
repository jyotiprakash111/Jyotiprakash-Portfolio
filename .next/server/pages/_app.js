/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/PageShell.js":
/*!*********************************!*\
  !*** ./components/PageShell.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ \"animejs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([animejs__WEBPACK_IMPORTED_MODULE_3__]);\nanimejs__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst PageShell = ({ children })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const curtainRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const curtain = curtainRef.current;\n        const content = contentRef.current;\n        if (!curtain || !content) return undefined;\n        const prefersReducedMotion = window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n        if (prefersReducedMotion) {\n            curtain.style.opacity = \"0\";\n            content.style.opacity = \"1\";\n            content.style.transform = \"none\";\n            return undefined;\n        }\n        const loadCurtain = (0,animejs__WEBPACK_IMPORTED_MODULE_3__.animate)(curtain, {\n            scaleY: [\n                1,\n                0\n            ],\n            transformOrigin: [\n                \"top center\",\n                \"top center\"\n            ],\n            duration: 1100,\n            delay: 120,\n            ease: \"inOutExpo\"\n        });\n        const loadContent = (0,animejs__WEBPACK_IMPORTED_MODULE_3__.animate)(content, {\n            opacity: [\n                0,\n                1\n            ],\n            y: [\n                28,\n                0\n            ],\n            duration: 900,\n            delay: 280,\n            ease: \"outExpo\"\n        });\n        const handleRouteStart = ()=>{\n            (0,animejs__WEBPACK_IMPORTED_MODULE_3__.animate)(curtain, {\n                scaleY: [\n                    0,\n                    1\n                ],\n                transformOrigin: [\n                    \"bottom center\",\n                    \"bottom center\"\n                ],\n                duration: 450,\n                ease: \"inOutExpo\"\n            });\n        };\n        const handleRouteDone = ()=>{\n            (0,animejs__WEBPACK_IMPORTED_MODULE_3__.animate)(content, {\n                opacity: [\n                    0,\n                    1\n                ],\n                y: [\n                    20,\n                    0\n                ],\n                duration: 700,\n                delay: 120,\n                ease: \"outExpo\"\n            });\n            (0,animejs__WEBPACK_IMPORTED_MODULE_3__.animate)(curtain, {\n                scaleY: [\n                    1,\n                    0\n                ],\n                transformOrigin: [\n                    \"top center\",\n                    \"top center\"\n                ],\n                duration: 650,\n                ease: \"inOutExpo\"\n            });\n        };\n        router.events.on(\"routeChangeStart\", handleRouteStart);\n        router.events.on(\"routeChangeComplete\", handleRouteDone);\n        router.events.on(\"routeChangeError\", handleRouteDone);\n        return ()=>{\n            loadCurtain.pause();\n            loadContent.pause();\n            router.events.off(\"routeChangeStart\", handleRouteStart);\n            router.events.off(\"routeChangeComplete\", handleRouteDone);\n            router.events.off(\"routeChangeError\", handleRouteDone);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-shell\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: curtainRef,\n                className: \"page-shell__curtain\",\n                \"aria-hidden\": \"true\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Downloads/Freeelance/Jyotiprakash-Portfolio/components/PageShell.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: contentRef,\n                className: \"page-shell__content\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/apple/Downloads/Freeelance/Jyotiprakash-Portfolio/components/PageShell.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Downloads/Freeelance/Jyotiprakash-Portfolio/components/PageShell.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageShell);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VTaGVsbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVDtBQUNOO0FBRWxDLE1BQU1LLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDN0IsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU1LLGFBQWFOLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1PLGFBQWFQLDZDQUFNQSxDQUFDO0lBRTFCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLFVBQVVGLFdBQVdHLE9BQU87UUFDbEMsTUFBTUMsVUFBVUgsV0FBV0UsT0FBTztRQUVsQyxJQUFJLENBQUNELFdBQVcsQ0FBQ0UsU0FBUyxPQUFPQztRQUVqQyxNQUFNQyx1QkFBdUJDLE9BQU9DLFVBQVUsQ0FBQyxvQ0FBb0NDLE9BQU87UUFFMUYsSUFBSUgsc0JBQXNCO1lBQ3hCSixRQUFRUSxLQUFLLENBQUNDLE9BQU8sR0FBRztZQUN4QlAsUUFBUU0sS0FBSyxDQUFDQyxPQUFPLEdBQUc7WUFDeEJQLFFBQVFNLEtBQUssQ0FBQ0UsU0FBUyxHQUFHO1lBQzFCLE9BQU9QO1FBQ1Q7UUFFQSxNQUFNUSxjQUFjakIsZ0RBQU9BLENBQUNNLFNBQVM7WUFDbkNZLFFBQVE7Z0JBQUM7Z0JBQUc7YUFBRTtZQUNkQyxpQkFBaUI7Z0JBQUM7Z0JBQWM7YUFBYTtZQUM3Q0MsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUVBLE1BQU1DLGNBQWN2QixnREFBT0EsQ0FBQ1EsU0FBUztZQUNuQ08sU0FBUztnQkFBQztnQkFBRzthQUFFO1lBQ2ZTLEdBQUc7Z0JBQUM7Z0JBQUk7YUFBRTtZQUNWSixVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBRUEsTUFBTUcsbUJBQW1CO1lBQ3ZCekIsZ0RBQU9BLENBQUNNLFNBQVM7Z0JBQ2ZZLFFBQVE7b0JBQUM7b0JBQUc7aUJBQUU7Z0JBQ2RDLGlCQUFpQjtvQkFBQztvQkFBaUI7aUJBQWdCO2dCQUNuREMsVUFBVTtnQkFDVkUsTUFBTTtZQUNSO1FBQ0Y7UUFFQSxNQUFNSSxrQkFBa0I7WUFDdEIxQixnREFBT0EsQ0FBQ1EsU0FBUztnQkFDZk8sU0FBUztvQkFBQztvQkFBRztpQkFBRTtnQkFDZlMsR0FBRztvQkFBQztvQkFBSTtpQkFBRTtnQkFDVkosVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1lBRUF0QixnREFBT0EsQ0FBQ00sU0FBUztnQkFDZlksUUFBUTtvQkFBQztvQkFBRztpQkFBRTtnQkFDZEMsaUJBQWlCO29CQUFDO29CQUFjO2lCQUFhO2dCQUM3Q0MsVUFBVTtnQkFDVkUsTUFBTTtZQUNSO1FBQ0Y7UUFFQW5CLE9BQU93QixNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JIO1FBQ3JDdEIsT0FBT3dCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QkY7UUFDeEN2QixPQUFPd0IsTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CRjtRQUVyQyxPQUFPO1lBQ0xULFlBQVlZLEtBQUs7WUFDakJOLFlBQVlNLEtBQUs7WUFDakIxQixPQUFPd0IsTUFBTSxDQUFDRyxHQUFHLENBQUMsb0JBQW9CTDtZQUN0Q3RCLE9BQU93QixNQUFNLENBQUNHLEdBQUcsQ0FBQyx1QkFBdUJKO1lBQ3pDdkIsT0FBT3dCLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLG9CQUFvQko7UUFDeEM7SUFDRixHQUFHO1FBQUN2QixPQUFPd0IsTUFBTTtLQUFDO0lBRWxCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlFLEtBQUs3QjtnQkFBWTRCLFdBQVU7Z0JBQXNCRSxlQUFZOzs7Ozs7MEJBQ2xFLDhEQUFDSDtnQkFBSUUsS0FBSzVCO2dCQUFZMkIsV0FBVTswQkFDN0I5Qjs7Ozs7Ozs7Ozs7O0FBSVQ7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFscG9ydGZvbGlvLy4vY29tcG9uZW50cy9QYWdlU2hlbGwuanM/YjVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhbmltYXRlIH0gZnJvbSAnYW5pbWVqcyc7XG5cbmNvbnN0IFBhZ2VTaGVsbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGN1cnRhaW5SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJ0YWluID0gY3VydGFpblJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoIWN1cnRhaW4gfHwgIWNvbnRlbnQpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXM7XG5cbiAgICBpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24pIHtcbiAgICAgIGN1cnRhaW4uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkQ3VydGFpbiA9IGFuaW1hdGUoY3VydGFpbiwge1xuICAgICAgc2NhbGVZOiBbMSwgMF0sXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IFsndG9wIGNlbnRlcicsICd0b3AgY2VudGVyJ10sXG4gICAgICBkdXJhdGlvbjogMTEwMCxcbiAgICAgIGRlbGF5OiAxMjAsXG4gICAgICBlYXNlOiAnaW5PdXRFeHBvJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGxvYWRDb250ZW50ID0gYW5pbWF0ZShjb250ZW50LCB7XG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICB5OiBbMjgsIDBdLFxuICAgICAgZHVyYXRpb246IDkwMCxcbiAgICAgIGRlbGF5OiAyODAsXG4gICAgICBlYXNlOiAnb3V0RXhwbycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgYW5pbWF0ZShjdXJ0YWluLCB7XG4gICAgICAgIHNjYWxlWTogWzAsIDFdLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFsnYm90dG9tIGNlbnRlcicsICdib3R0b20gY2VudGVyJ10sXG4gICAgICAgIGR1cmF0aW9uOiA0NTAsXG4gICAgICAgIGVhc2U6ICdpbk91dEV4cG8nLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlRG9uZSA9ICgpID0+IHtcbiAgICAgIGFuaW1hdGUoY29udGVudCwge1xuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICAgIHk6IFsyMCwgMF0sXG4gICAgICAgIGR1cmF0aW9uOiA3MDAsXG4gICAgICAgIGRlbGF5OiAxMjAsXG4gICAgICAgIGVhc2U6ICdvdXRFeHBvJyxcbiAgICAgIH0pO1xuXG4gICAgICBhbmltYXRlKGN1cnRhaW4sIHtcbiAgICAgICAgc2NhbGVZOiBbMSwgMF0sXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogWyd0b3AgY2VudGVyJywgJ3RvcCBjZW50ZXInXSxcbiAgICAgICAgZHVyYXRpb246IDY1MCxcbiAgICAgICAgZWFzZTogJ2luT3V0RXhwbycsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlU3RhcnQpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZURvbmUpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVSb3V0ZURvbmUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxvYWRDdXJ0YWluLnBhdXNlKCk7XG4gICAgICBsb2FkQ29udGVudC5wYXVzZSgpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZVN0YXJ0KTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVEb25lKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlUm91dGVEb25lKTtcbiAgICB9O1xuICB9LCBbcm91dGVyLmV2ZW50c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNoZWxsXCI+XG4gICAgICA8ZGl2IHJlZj17Y3VydGFpblJlZn0gY2xhc3NOYW1lPVwicGFnZS1zaGVsbF9fY3VydGFpblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICA8ZGl2IHJlZj17Y29udGVudFJlZn0gY2xhc3NOYW1lPVwicGFnZS1zaGVsbF9fY29udGVudFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTaGVsbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJhbmltYXRlIiwiUGFnZVNoZWxsIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJjdXJ0YWluUmVmIiwiY29udGVudFJlZiIsImN1cnRhaW4iLCJjdXJyZW50IiwiY29udGVudCIsInVuZGVmaW5lZCIsInByZWZlcnNSZWR1Y2VkTW90aW9uIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJsb2FkQ3VydGFpbiIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwibG9hZENvbnRlbnQiLCJ5IiwiaGFuZGxlUm91dGVTdGFydCIsImhhbmRsZVJvdXRlRG9uZSIsImV2ZW50cyIsIm9uIiwicGF1c2UiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PageShell.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lenis */ \"lenis\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ \"animejs\");\n/* harmony import */ var _components_PageShell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageShell */ \"./components/PageShell.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/App.css */ \"./styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Chatbot_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Chatbot.css */ \"./styles/Chatbot.css\");\n/* harmony import */ var _styles_Chatbot_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Chatbot_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Contact.css */ \"./styles/Contact.css\");\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Footer.css */ \"./styles/Footer.css\");\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Resume_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Resume.css */ \"./styles/Resume.css\");\n/* harmony import */ var _styles_Resume_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Resume_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_Particles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Particles.css */ \"./styles/Particles.css\");\n/* harmony import */ var _styles_Particles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Particles_css__WEBPACK_IMPORTED_MODULE_12__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lenis__WEBPACK_IMPORTED_MODULE_3__, animejs__WEBPACK_IMPORTED_MODULE_4__, _components_PageShell__WEBPACK_IMPORTED_MODULE_5__]);\n([lenis__WEBPACK_IMPORTED_MODULE_3__, animejs__WEBPACK_IMPORTED_MODULE_4__, _components_PageShell__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const lenis = new lenis__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            autoRaf: true,\n            smoothWheel: true,\n            syncTouch: false,\n            lerp: 0.085,\n            duration: 1.15,\n            anchors: {\n                offset: -72\n            }\n        });\n        document.documentElement.classList.add(\"lenis-ready\");\n        return ()=>{\n            document.documentElement.classList.remove(\"lenis-ready\");\n            lenis.destroy();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const prefersReducedMotion = window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n        const heroTargets = Array.from(document.querySelectorAll(\"[data-hero-item]\"));\n        const revealTargets = Array.from(document.querySelectorAll(\"[data-reveal]\"));\n        if (prefersReducedMotion) {\n            [\n                ...heroTargets,\n                ...revealTargets\n            ].forEach((element)=>{\n                element.style.opacity = \"1\";\n                element.style.transform = \"none\";\n            });\n            return undefined;\n        }\n        heroTargets.forEach((element)=>{\n            element.style.opacity = \"0\";\n            element.style.transform = \"translate3d(0, 24px, 0)\";\n            element.style.willChange = \"transform, opacity\";\n        });\n        revealTargets.forEach((element)=>{\n            element.style.opacity = \"0\";\n            element.style.transform = \"translate3d(0, 30px, 0) scale(0.985)\";\n            element.style.willChange = \"transform, opacity\";\n        });\n        const heroAnimation = heroTargets.length ? (0,animejs__WEBPACK_IMPORTED_MODULE_4__.animate)(heroTargets, {\n            opacity: [\n                0,\n                1\n            ],\n            y: [\n                24,\n                0\n            ],\n            delay: (0,animejs__WEBPACK_IMPORTED_MODULE_4__.stagger)(120, {\n                start: 180\n            }),\n            duration: 900,\n            ease: \"outExpo\"\n        }) : null;\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                if (!entry.isIntersecting) return;\n                observer.unobserve(entry.target);\n                (0,animejs__WEBPACK_IMPORTED_MODULE_4__.animate)(entry.target, {\n                    opacity: [\n                        0,\n                        1\n                    ],\n                    y: [\n                        30,\n                        0\n                    ],\n                    scale: [\n                        0.985,\n                        1\n                    ],\n                    duration: 820,\n                    ease: \"outExpo\"\n                });\n            });\n        }, {\n            threshold: 0.18,\n            rootMargin: \"0px 0px -8% 0px\"\n        });\n        revealTargets.forEach((element)=>observer.observe(element));\n        return ()=>{\n            heroAnimation?.pause();\n            observer.disconnect();\n            [\n                ...heroTargets,\n                ...revealTargets\n            ].forEach((element)=>{\n                element.style.willChange = \"auto\";\n            });\n        };\n    }, [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageShell__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/apple/Downloads/Freeelance/Jyotiprakash-Portfolio/pages/_app.js\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Downloads/Freeelance/Jyotiprakash-Portfolio/pages/_app.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQ0ksVUFBVSxHQUFHO1lBQzdCO1FBQ0Y7SUFDRixHQUFHO1FBQUM5QixPQUFPa0QsTUFBTTtLQUFDO0lBRWxCLHFCQUNFLDhEQUFDdEQsNkRBQVNBO2tCQUNSLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbHBvcnRmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGVuaXMgZnJvbSAnbGVuaXMnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhZ2dlciB9IGZyb20gJ2FuaW1lanMnO1xuaW1wb3J0IFBhZ2VTaGVsbCBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VTaGVsbCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvQXBwLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9DaGF0Ym90LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9Db250YWN0LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9Gb290ZXIuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL1Jlc3VtZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvUGFydGljbGVzLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxlbmlzID0gbmV3IExlbmlzKHtcbiAgICAgIGF1dG9SYWY6IHRydWUsXG4gICAgICBzbW9vdGhXaGVlbDogdHJ1ZSxcbiAgICAgIHN5bmNUb3VjaDogZmFsc2UsXG4gICAgICBsZXJwOiAwLjA4NSxcbiAgICAgIGR1cmF0aW9uOiAxLjE1LFxuICAgICAgYW5jaG9yczogeyBvZmZzZXQ6IC03MiB9LFxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xlbmlzLXJlYWR5Jyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlbmlzLXJlYWR5Jyk7XG4gICAgICBsZW5pcy5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJlZmVyc1JlZHVjZWRNb3Rpb24gPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzO1xuICAgIGNvbnN0IGhlcm9UYXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1oZXJvLWl0ZW1dJykpO1xuICAgIGNvbnN0IHJldmVhbFRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJldmVhbF0nKSk7XG5cbiAgICBpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24pIHtcbiAgICAgIFsuLi5oZXJvVGFyZ2V0cywgLi4ucmV2ZWFsVGFyZ2V0c10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGhlcm9UYXJnZXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsIDI0cHgsIDApJztcbiAgICAgIGVsZW1lbnQuc3R5bGUud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0sIG9wYWNpdHknO1xuICAgIH0pO1xuXG4gICAgcmV2ZWFsVGFyZ2V0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAzMHB4LCAwKSBzY2FsZSgwLjk4NSknO1xuICAgICAgZWxlbWVudC5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSwgb3BhY2l0eSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZXJvQW5pbWF0aW9uID0gaGVyb1RhcmdldHMubGVuZ3RoXG4gICAgICA/IGFuaW1hdGUoaGVyb1RhcmdldHMsIHtcbiAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICAgICAgeTogWzI0LCAwXSxcbiAgICAgICAgICBkZWxheTogc3RhZ2dlcigxMjAsIHsgc3RhcnQ6IDE4MCB9KSxcbiAgICAgICAgICBkdXJhdGlvbjogOTAwLFxuICAgICAgICAgIGVhc2U6ICdvdXRFeHBvJyxcbiAgICAgICAgfSlcbiAgICAgIDogbnVsbDtcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHJldHVybjtcblxuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXG4gICAgICAgICAgYW5pbWF0ZShlbnRyeS50YXJnZXQsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgIHk6IFszMCwgMF0sXG4gICAgICAgICAgICBzY2FsZTogWzAuOTg1LCAxXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA4MjAsXG4gICAgICAgICAgICBlYXNlOiAnb3V0RXhwbycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiAwLjE4LFxuICAgICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtOCUgMHB4JyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV2ZWFsVGFyZ2V0cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBoZXJvQW5pbWF0aW9uPy5wYXVzZSgpO1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgWy4uLmhlcm9UYXJnZXRzLCAuLi5yZXZlYWxUYXJnZXRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lsbENoYW5nZSA9ICdhdXRvJztcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVNoZWxsPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUGFnZVNoZWxsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMZW5pcyIsImFuaW1hdGUiLCJzdGFnZ2VyIiwiUGFnZVNoZWxsIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJsZW5pcyIsImF1dG9SYWYiLCJzbW9vdGhXaGVlbCIsInN5bmNUb3VjaCIsImxlcnAiLCJkdXJhdGlvbiIsImFuY2hvcnMiLCJvZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImRlc3Ryb3kiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaGVyb1RhcmdldHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2ZWFsVGFyZ2V0cyIsImZvckVhY2giLCJlbGVtZW50Iiwic3R5bGUiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwid2lsbENoYW5nZSIsImhlcm9BbmltYXRpb24iLCJsZW5ndGgiLCJ5IiwiZGVsYXkiLCJzdGFydCIsImVhc2UiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJzY2FsZSIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwicGF1c2UiLCJkaXNjb25uZWN0IiwiYXNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/App.css":
/*!************************!*\
  !*** ./styles/App.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Chatbot.css":
/*!****************************!*\
  !*** ./styles/Chatbot.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Contact.css":
/*!****************************!*\
  !*** ./styles/Contact.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Footer.css":
/*!***************************!*\
  !*** ./styles/Footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Particles.css":
/*!******************************!*\
  !*** ./styles/Particles.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Resume.css":
/*!***************************!*\
  !*** ./styles/Resume.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("animejs");;

/***/ }),

/***/ "lenis":
/*!************************!*\
  !*** external "lenis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("lenis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();